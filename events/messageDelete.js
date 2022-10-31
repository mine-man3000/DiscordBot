module.exports = {
    name: 'messageDelete',
    execute(message, client, config){
        newContent = "Empty Message"
        newAuthor = "Author unknown"
        if(message.content != null)
        {
            newContent = message.content
        }
        if(message.attachments.size > 0)
        {
            newContent = `deleted ${message.attachments.size} attachments`
        }
        if(message.author != null)
        {
            newAuthor = message.author.tag
        }
        const embed = {
            color: 0x68ff61,
            title: `A message in #${message.channel.name} has been deleted`,
            author: {
                name: `Message by ${newAuthor}`,
            },
            fields: [
                {
                    name: "Message:",
                    value: `${newContent}`,
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

