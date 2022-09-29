module.exports = {
	name: 'ban',
	description: "this is a ban command!",
	execute(ctx, Discord, client) {
		const member = ctx.options.getUser('user');
		const conf = require('../conf.json')
		if (!ctx.member.roles.cache.has(conf.modRoleID)) {
			ctx.reply('You don\'t have permissions to use this command!');
			return;
		}

		if (!member) {
			ctx.reply('You couldn\'t ban that member!');
			return;
		}
		const memberTarget = ctx.guild.members.cache.get(member.id);
		memberTarget.ban();
		ctx.reply('You succesfully banned that member');

    	const channel = client.channels.cache.get(conf.botLogChannelID)
    	const embed = {
			author: {
				name: `${ctx.user.username} has banned a user`
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