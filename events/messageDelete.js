module.exports = {
    name: 'messageDelete',
    execute(message, client, config){
        const channel = client.channels.cache.get(config.botLogChannelID);

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
        channel.send({ embeds: [embed] });
    }
}