const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('timeout').setDescription('Aísla a un usuario').setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers).addUserOption(o=>o.setName('u').setDescription('Usuario').setRequired(true)).addIntegerOption(o=>o.setName('m').setDescription('Minutos').setRequired(true)),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const t = i.options.getMember('u'); const m = i.options.getInteger('m');
        if (!t || !t.moderatable) return i.reply({content:'❌ No se puede.', ephemeral:true});
        await t.timeout(m * 60 * 1000); await i.reply({embeds:[new EmbedBuilder().setColor('Red').setTitle('⏱️ Timeout').setDescription(`**${t.user.tag}** aislado por ${m} mins.`)]});
    }
};