module.exports = {
    name: 'guildMemberAdd',
    execute(client, member, config){
        var server
        for(i in config.guild) {
            if(config.guild[i] == member.guild.id) {
                server = config.welcomeID[i]
            }
        }
        const channel = client.channels.cache.get(server);
        channel.send(`${member.user.tag} has joined the server`)
        const embed = {
            color: 0x68ff61,
            title: `${member.user.tag} has been joined the server`,
            author: {
                name: `${member.user.tag}`,
            },
            fields: [
                {
                    name: "putting this here so I don't die",
                    value: "putting this here so I don't die",
                },
            ]
        }
        for(i in config.guild) {
            if(config.guild[i] == guild.id) {
                server = config.botLogChannelID[i]
            }
        }
        channel = client.channels.cache.get(server);
        channel.send({ embeds: [embed] });
    }
}