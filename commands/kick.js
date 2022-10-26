module.exports = {
	name: 'kick',
	description: "this is a kick command!",
	execute(ctx, Discord, client, conf) {
		const member = ctx.options.getUser('user');
		var hasMod = false
		for(i of conf.modRoleID) {
			if (ctx.member.roles.cache.has(i)) {
				hasMod = true
			}
		}

		if(!hasMod) {
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
		var server
        for(i in conf.guild) {
            if(conf.guild[i] == ctx.guildId) {
                server = conf.botLogChannelID[i]
            }
        }
        const channel = client.channels.cache.get(server);
        channel.send({ embeds: [embed] });   
	}
}