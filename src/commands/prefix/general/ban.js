const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'ban', execute: async(m, a) => {
    if (!m.member.permissions.has(PermissionFlagsBits.BanMembers)) return m.reply('❌ Sin permisos');
    const t = m.mentions.members.first(); const r = a.slice(1).join(' ')||'Sin razón';
    if (!t || !t.bannable) return m.reply('❌ No se puede banear.');
    await t.ban({reason: r}); await m.reply({embeds:[new EmbedBuilder().setColor('Red').setTitle('🔨 Baneado').setDescription(`**${t.user.tag}**\nRazón: ${r}`)]});
}};