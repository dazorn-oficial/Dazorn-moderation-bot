const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'kick', execute: async(m, a) => {
    if (!m.member.permissions.has(PermissionFlagsBits.KickMembers)) return m.reply('❌ Sin permisos');
    const t = m.mentions.members.first(); const r = a.slice(1).join(' ')||'Sin razón';
    if (!t || !t.kickable) return m.reply('❌ No se puede expulsar.');
    await t.kick(r); await m.reply({embeds:[new EmbedBuilder().setColor('Orange').setTitle('👢 Expulsado').setDescription(`**${t.user.tag}**\nRazón: ${r}`)]});
}};