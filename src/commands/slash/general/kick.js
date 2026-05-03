const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('kick').setDescription('Expulsa a un usuario').setDefaultMemberPermissions(PermissionFlagsBits.KickMembers).addUserOption(o=>o.setName('usuario').setDescription('Usuario').setRequired(true)).addStringOption(o=>o.setName('razon').setDescription('Razón')),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.KickMembers)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const t = i.options.getMember('usuario'); const r = i.options.getString('razon')||'Sin razón';
        if (!t || !t.kickable) return i.reply({content:'❌ No se puede expulsar.', ephemeral:true});
        await t.kick(r); await i.reply({embeds:[new EmbedBuilder().setColor('Orange').setTitle('👢 Expulsado').setDescription(`**${t.user.tag}**\nRazón: ${r}`)]});
    }
};