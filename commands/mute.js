const ms = require('ms');

module.exports = {
	name: 'mute',
	description: "this is a mute",
	execute(message, args, Discord) {
		const conf = require('../conf.json');
		if (!message.member.roles.cache.has(conf.modRoleID)) {
			message.channel.send('You don\'t have permissions to use this command!');
			return;
		}
		const target = message.mentions.users.first();

		if (!target) {
			message.reply('We couldn\'t find that member');
			return;
		}

		let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

		let memberTarget = message.guild.members.cache.get(target.id);

		if (!args[1]) {
			memberTarget.roles.add(muteRole.id);
			message.reply(`<@${memberTarget.user.id}> has been muted`);
			// TODO: Log this in the log channel
			return;
		}
		memberTarget.roles.add(muteRole.id);
		// TODO: Save this info somewhere on the disk, not just set a timer, that way if the bot goes down, it can see if the user should be unmuted yet
		message.reply(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
		// TODO: Log this in the log channel

		setTimeout(
			() => {
				memberTarget.roles.remove(muteRole.id);
			},
			ms(args[1])
		);
	}
}