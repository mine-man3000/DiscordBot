module.exports = {
    name: 'messageDelete',
    execute(message, client, config){
        const embed = {
            color: 0x68ff61,
            title: `A message in #${message.channel.name} has been deleted`,
            author: {
                name: `Message by ${message.author.tag}`,
            },
            fields: [
                {
                    name: "Message:",
                    value: `${message}`,
                },
            ]
        }
        var server
        for(i in config.guild) {
            if(config.guild[i] == message.guildId) {
                server = config.botLogChannelID[i]
            }
        }
        const channel = client.channels.cache.get(server);
        channel.send({ embeds: [embed] });    
    }
}