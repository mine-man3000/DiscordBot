module.exports = {
    name: 'role',
    description: "add/remove roles",
    execute(ctx, conf, client){
        role = ctx.options.getRole('role')

        let rolemap = ctx.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r.name)
            .join("\n");

        var reachedRole = false
        var canGive     = false 
        
        for(i of rolemap.split("\n"))
        {
            if(i == "Bot")
            {
                reachedRole = true;
            }
            if(role.name == i && reachedRole == true)
            {
                canGive = true;
            }
        }


        let memberTarget = ctx.guild.members.cache.get(ctx.member.id);
        
        if(canGive)
        {
            if(ctx.member.roles.cache.has(role.id))
            {
		        memberTarget.roles.remove(role);
                ctx.reply({ content: `removed ${role.name}`, ephemeral: true });            
            }
            else {
		        memberTarget.roles.add(role);
                ctx.reply({ content: `added ${role.name}`, ephemeral: true });
            }
        }
        else
        {
            ctx.reply({ content: `sorry, I can't give you ${role.name}`, ephemeral: true });
        }

        const embed = {
			author: {
				name: `${ctx.user.username} has added/removed a role`
			},
			fields: [
                {
                    name: `Role:`,
                    value: `${role.name}`
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
        
        if(canGive)
        {
            channel.send({ embeds: [embed] });
        }
    }
}