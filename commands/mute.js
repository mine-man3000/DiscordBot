module.exports = {
	name: 'mute',
	description: "this is a mute",
	execute(ctx, Discord) {
		const member = ctx.options.getUser('user');
		const conf = require('../conf.json');
		if (!ctx.member.roles.cache.has(conf.modRoleID)) {
			ctx.reply('You don\'t have permissions to use this command!');
			return;
		}

		if (!member) {
			ctx.reply('We couldn\'t find that member');
			return;
		}

		let muteRole = ctx.guild.roles.cache.find(role => role.name === 'muted');

		let memberTarget = ctx.guild.members.cache.get(member.id);
		
		memberTarget.roles.add(muteRole.id);
		ctx.reply(`<@${memberTarget.user.id}> has been muted`);
		// TODO: Log this in the log channel
		return;
	}
}