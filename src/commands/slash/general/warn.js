const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js'); const db = require('../../../utils/db');
module.exports = {
    data: new SlashCommandBuilder().setName('warn').setDescription('Advierte').setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers).addUserOption(o=>o.setName('u').setDescription('Usuario').setRequired(true)).addStringOption(o=>o.setName('r').setDescription('Razón').setRequired(true)),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const t = i.options.getUser('u'); const r = i.options.getString('r');
        const c = db.addWarn(t.id, i.guild.id, r, i.user.tag);
        await i.reply({embeds:[new EmbedBuilder().setColor('Yellow').setTitle('⚠️ Advertencia').setDescription(`**${t.tag}** advertido.\nRazón: ${r}\nTotal: ${c}`)]});
    }
};