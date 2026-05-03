const { EmbedBuilder, PermissionFlagsBits } = require('discord.js'); const db = require('../../../utils/db');
module.exports = { name: 'warn', execute: async(m, a) => {
    if (!m.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return m.reply('❌ Sin permisos');
    const t = m.mentions.users.first(); const r = a.slice(1).join(' '); if(!t||!r) return m.reply('❌ Faltan datos.');
    const c = db.addWarn(t.id, m.guild.id, r, m.author.tag);
    await m.reply({embeds:[new EmbedBuilder().setColor('Yellow').setTitle('⚠️ Advertencia').setDescription(`**${t.tag}** advertido.\nRazón: ${r}\nTotal: ${c}`)]});
}};