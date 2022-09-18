module.exports = {
    name: 'embedtest',
    description: "tests embeds",
    execute(message, args, Discord){
        const array = message.content.split(" ")
        let end_message = ""
        if(message.content == "~embedtest") {
            message.channel.send("you missed an argument silly")
        }
        else {
            for (let i = 1; i < array.length; i++) {
                end_message += array[i] + " ";}
            const Embed = new Discord.MessageEmbed()
            .setColor(0x0099FF)
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter('Some footer text here');        
            message.channel.send(Embed);            
        }
    }
}