const { PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'clear', execute: async(m, a) => {
    if (!m.member.permissions.has(PermissionFlagsBits.ManageMessages)) return m.reply('❌ Sin permisos');
    const c = parseInt(a[0]); if(isNaN(c)||c<1||c>100) return m.reply('❌ Cantidad 1-100.');
    await m.channel.bulkDelete(c, true); m.channel.send(`✅ ${c} mensajes borrados.`).then(msg=>setTimeout(()=>msg.delete(),3000));
}};