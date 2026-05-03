require('dotenv').config();
const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const db = require('./src/utils/db');

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX || '!';
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const USE_SLASH = process.env.USE_SLASH !== 'false';
const USE_PREFIX = process.env.USE_PREFIX !== 'false';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
});

client.slashCommands = new Collection();
client.prefixCommands = new Collection();
const slashCommandsData = [];

if (USE_SLASH) {
    const loadSlash = (dir) => {
        if (!fs.existsSync(dir)) return;
        for (const file of fs.readdirSync(dir)) {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) loadSlash(filePath);
            else if (file.endsWith('.js')) {
                const cmd = require(filePath);
                if (cmd.data && cmd.execute) { client.slashCommands.set(cmd.data.name, cmd); slashCommandsData.push(cmd.data.toJSON()); }
            }
        }
    };
    loadSlash(path.join(__dirname, 'src/commands/slash'));
}

if (USE_PREFIX) {
    const loadPrefix = (dir) => {
        if (!fs.existsSync(dir)) return;
        for (const file of fs.readdirSync(dir)) {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) loadPrefix(filePath);
            else if (file.endsWith('.js')) {
                const cmd = require(filePath);
                if (cmd.name && cmd.execute) client.prefixCommands.set(cmd.name, cmd);
            }
        }
    };
    loadPrefix(path.join(__dirname, 'src/commands/prefix'));
}

client.once('ready', async () => {
    console.log(`✅ Bot conectado como ${client.user.tag}!`);
    if (TOKEN && CLIENT_ID) {
        const rest = new REST({version: '10'}).setToken(TOKEN);
        try {
            if (USE_SLASH) {
                if (GUILD_ID) await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: slashCommandsData});
                else await rest.put(Routes.applicationCommands(CLIENT_ID), {body: slashCommandsData});
                console.log('✅ Slash registrados.');
            } else {
                if (GUILD_ID) await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: []});
                else await rest.put(Routes.applicationCommands(CLIENT_ID), {body: []});
            }
        } catch(e) { console.error(e); }
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand() || !USE_SLASH) return;
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return;
    try { await cmd.execute(interaction); } 
    catch(e) { 
        console.error(e); 
        if (interaction.replied || interaction.deferred) await interaction.followUp({content:'Error', ephemeral:true});
        else await interaction.reply({content:'Error', ephemeral:true});
    }
});


client.on('messageCreate', async message => {
    if (!USE_PREFIX || message.author.bot || !message.content.startsWith(PREFIX)) return;
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const cmdName = args.shift().toLowerCase();
    const cmd = client.prefixCommands.get(cmdName);
    if (!cmd) return;
    try { await cmd.execute(message, args); } catch(e) { console.error(e); }
});


if (TOKEN) client.login(TOKEN);
