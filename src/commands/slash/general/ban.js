const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('ban').setDescription('Banea a un usuario').setDefaultMemberPermissions(PermissionFlagsBits.BanMembers).addUserOption(o=>o.setName('usuario').setDescription('Usuario').setRequired(true)).addStringOption(o=>o.setName('razon').setDescription('Razón')),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.BanMembers)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const t = i.options.getMember('usuario'); const r = i.options.getString('razon')||'Sin razón';
        if (!t || !t.bannable) return i.reply({content:'❌ No se puede banear.', ephemeral:true});
        await t.ban({reason: r}); await i.reply({embeds:[new EmbedBuilder().setColor('Red').setTitle('🔨 Baneado').setDescription(`**${t.user.tag}**\nRazón: ${r}`)]});
    }
};