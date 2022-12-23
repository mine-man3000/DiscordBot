module.exports = {
    name: 'guildMemberUpdate',
    execute(oldMember, newMember, config, client) {
        const roleDiff = oldMember.roles.cache.difference(newMember.roles.cache);
        const oldCount = 0
        const newCount = 0
        
        for (i in oldMember.roles.cache) oldCount++
        for (i in newMember.roles.cache) newCount++

        if (oldMember.nickname != newMember.nickname) {
            const embed = {
                title: 'User Update',
                author: {
                    name: `${newMember.tag} has changed their nickname`
                },
                fields: [
                    {
                        name: `old: ${oldMember.nickname}`,
                        value: `new: ${newMember.nickname}`
                    }
                ],
                timestamp: new Date().toISOString(),
                color: 0x68ff61
            }
            var server
            for (i in config.guild) {
                if (config.guild[i] == oldMember.guild.id) {
                    server = config.botLogChannelID[i]
                }
            }
            const channel = client.channels.cache.get(server);
            channel.send({ embeds: [embed] })    
        }

        if (oldMember.tag != newMember.tag) {
            const embed = {
                title: 'User Update',
                author: {
                    name: `A user has changed their tag`
                },
                fields: [
                    {
                        name: `old: ${oldMember.tag}`,
                        value: `new: ${newMember.tag}`
                    }
                ],
                timestamp: new Date().toISOString(),
                color: 0x68ff61
            }
            var server
            for (i in config.guild) {
                if (config.guild[i] == oldMember.guild.id) {
                    server = config.botLogChannelID[i]
                }
            }
            const channel = client.channels.cache.get(server);
            channel.send({ embeds: [embed] })    
        }

        if (oldCount != newCount) {
            if (roleDiff > 0) {
                const embed = {
                    title: 'User Update',
                    author: {
                        name: `${oldMember.user.username} has lost/gained roles`
                    },
                    fields: [
                        {
                            name: `old: ${oldMember.roles.cache.map((role) => role.name).join(', ')}`,
                            value: `new: ${newMember.roles.cache.map((role) => role.name).join(', ')}`
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    color: 0x68ff61
                }
                var server
                for (i in config.guild) {
                    if (config.guild[i] == oldMember.guild.id) {
                        server = config.botLogChannelID[i]
                    }
                }
                const channel = client.channels.cache.get(server);
                channel.send({ embeds: [embed] })    
            }
        }
    }
}