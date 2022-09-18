module.exports = {
	name: 'unmute',
	description: "this is an unmute",
	execute(message, args, Discord) {
		const conf = require('../conf.json')
		if (!message.member.roles.cache.has(conf.modRoleID)) {
			message.reply('You don\'t have permissions to use this command!');
			return;
		}
		const target = message.mentions.users.first();
		if (!target) {
			message.reply('We couldn\'t find that member');
			return;
		}
		let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

		let memberTarget = message.guild.members.cache.get(target.id);

		memberTarget.roles.remove(muteRole.id)
		message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
		// TODO: Log this in the log channel
	}
}