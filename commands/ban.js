module.exports = {
	name: 'ban',
	description: "this is a ban command!",
	execute(message, args, Discord, client) {
		const conf = require('../conf.json')
		if (!message.member.roles.cache.has(conf.modRoleID)) {
			message.reply('You don\'t have permissions to use this command!');
			return;
		}

		const member = message.mentions.users.first()

		if (!member) {
			message.reply('You couldn\'t ban that member!');
			return;
		}
		const memberTarget = message.guild.members.cache.get(member.id);
		memberTarget.ban();
		message.reply('You succesfully banned that member');
		// TODO: Save this in the log channel

    const channel = client.channels.cache.get(conf.botLogChannelID)

    var embed = new Discord.MessageEmbed()
        .setAuthor("Member banned " + member.name)
        .setTimestamp()
        .setColor('#68ff61')
        channel.send(embed);
	}
}