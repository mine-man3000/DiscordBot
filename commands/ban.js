module.exports = {
	name: 'ban',
	description: "this is a ban command!",
	execute(ctx, Discord, client, conf) {
		const member = ctx.options.getUser('user');
		var hasMod = false
		for (i of conf.modRoleID) {
			if (ctx.member.roles.cache.has(i)) {
				hasMod = true
			}
		}

		if (!hasMod) {
			ctx.reply('You don\'t have permissions to use this command!');
			return;
		}

		if (!member) {
			ctx.reply('You couldn\'t ban that member!');
			return;
		}
		const memberTarget = ctx.guild.members.cache.get(member.id);
		memberTarget.ban();
		ctx.reply('You successfully banned that member');

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
		var server
        for (i in conf.guild) {
            if (conf.guild[i] == ctx.guildId) {
                server = conf.botLogChannelID[i]
            }
        }
		
		if(server) {
			const channel = client.channels.cache.get(server);
			channel.send({ embeds: [embed] });   	
		}
	}
}