module.exports = {
    name: 'messageUpdate',
    execute(newMessage, oldMessage, client, config){
        if(newMessage.author.id != "985213199248924722")
        {
            if (!oldMessage.author) {
                return;
            }
            const embed = {
                color: 0x68ff61,
                title: `A message in #${oldMessage.channel.name} has been updated`,
                author: {
                    name: `Updated by ${oldMessage.author.tag}`,
                },
                fields: [
                    {
                        name: "Original:",
                        value: `${oldMessage}`,
                    },
                    {
                        name: 'Edit:',
                        value: `${newMessage}`,
                    },
                ]
            }
            var server
            for(i in config.guild) {
                if(config.guild[i] == newMessage.guildId) {
                    server = config.botLogChannelID[i]
                }
            }
            const channel = client.channels.cache.get(server);
            if(newMessage.content != oldMessage.content)
            {
                channel.send({ embeds: [embed] });  
            }
        }
    }
}