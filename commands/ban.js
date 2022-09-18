module.exports = {
	name: 'ban',
	description: "this is a ban command!",
	execute(message, args, Discord) {
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
		const memberTarger = message.guild.members.cache.get(member.id);
		memberTarger.ban();
		message.reply('You succesfully banned that member');
		// TODO: Save this in the log channel
	}
}