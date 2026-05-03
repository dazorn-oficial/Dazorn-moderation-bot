const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'timeout', execute: async(m, a) => {
    if (!m.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return m.reply('❌ Sin permisos');
    const t = m.mentions.members.first(); const min = parseInt(a[1]); if(!t||!min) return m.reply('❌ Faltan datos.');
    if (!t.moderatable) return m.reply('❌ No se puede.');
    await t.timeout(min * 60 * 1000); await m.reply({embeds:[new EmbedBuilder().setColor('Red').setTitle('⏱️ Timeout').setDescription(`**${t.user.tag}** aislado por ${min} mins.`)]});
}};