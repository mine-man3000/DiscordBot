module.exports = {
    name: 'messageUpdate',
    execute(newMessage, oldMessage, client, config){
        if (!oldMessage.author) {
            return;
        }
        const channel = client.channels.cache.get(config.botLogChannelID);
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
        channel.send({ embeds: [embed] });
    }
}