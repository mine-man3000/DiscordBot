module.exports = {
    name: 'guildMemberRemove',
    execute(client, member, config) {
        var server
        for (i in config.guild) {
            if (config.guild[i] == member.guild.id) {
                server = config.welcomeID[i]
            }
        }
        var channel = client.channels.cache.get(server);
        channel.send(`${member.user.tag} has left the server`)
        const embed = {
            color: 0x68ff61,
            title: `${member.user.tag} has left the server`,
            author: {
                name: `${member.user.tag}`,
            },
            fields: [
                {
                    name: `id: ${member.user.id}`,
                    value: `\u200B`,
                },
            ]
        }
        for (i in config.guild) {
            if (config.guild[i] == member.guild.id) {
                server = config.botLogChannelID[i]
            }
        }
        channel = client.channels.cache.get(server);
        channel.send({ embeds: [embed] });
    }
}