module.exports = {
	name: 'kick',
	description: "this is a kick command!",
	execute(ctx, Discord, client) {
		const member = ctx.options.getUser('user');
		const conf = require('../conf.json')
		if (!ctx.member.roles.cache.has(conf.modRoleID)) {
			ctx.reply('You don\'t have permissions to use this command!');
			return;
		}

		if (!member) {
			ctx.reply('You couldn\'t kick that member!');
			return;
		}
		const memberTarget = ctx.guild.members.cache.get(member.id);
		memberTarget.kick();
		ctx.reply('You succesfully kicked that member');

    	const channel = client.channels.cache.get(conf.botLogChannelID)
    	const embed = {
			author: {
				name: `${ctx.user.username} has kicked a user`
			},
			fields: [
				{
					name: `User:`,
					value: `${member.tag}`
				}
			],
			timestamp: new Date().toISOString(),
			color: 0x68ff61
		}
    	channel.send({ embeds: [embed] });
	}
}