module.exports = {
    name: 'guildMemberAdd',
    execute(guild, client, user, config) {
        const embed = {
            color: 0x68ff61,
            title: `${user.tag} has been banned`,
            author: {
                name: `${user.tag}`,
            },
            fields: [
                {
                    name: "putting this here so I don't die",
                    value: "putting this here so I don't die",
                },
            ]
        }
        var server
        for (i in config.guild) {
            if (config.guild[i] == guild.id) {
                server = config.botLogChannelID[i]
            }
        }
        const channel = client.channels.cache.get(server);
        channel.send({ embeds: [embed] });
    }
}