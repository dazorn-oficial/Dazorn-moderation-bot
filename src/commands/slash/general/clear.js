const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('clear').setDescription('Borra mensajes').setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages).addIntegerOption(o=>o.setName('cant').setDescription('1-100').setRequired(true)),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.ManageMessages)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const c = i.options.getInteger('cant');
        await i.channel.bulkDelete(c, true); await i.reply({content:`✅ ${c} mensajes borrados.`, ephemeral:true});
    }
};