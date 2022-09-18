module.exports = {
    name: 'help',
    description: "tis a help command",
    execute(message, args, Discord){
        const Embed = new Discord.MessageEmbed()
                .setColor(0x0099FF)
                .setTitle("(Prefix: ~) Help:")
                .addFields({ name: 'fact:', value: "Gives a random fact", inline: false })
                .addFields({ name: 'keysmash:', value: "Generates keysmashes", inline: false })
                .addFields({ name: 'ping:', value: "Replies with \"Pong!\"", inline: false })
                .addFields({ name: 'rickroll:', value: "Sends all the lyics to Never Gonna Give you up", inline: false })
                .addFields({ name: 'MOD COMMANDS:', value: "\u200B", inline: false })
                .addFields({ name: 'ban:', value:    "Bans the member mentioned", inline: false })
                .addFields({ name: 'kick:', value:   "Kicks the member mentioned", inline: false })
                .addFields({ name: 'mute:', value:   "Mutes the member mentioned", inline: false })
                .addFields({ name: 'unmute:', value: "Unmutes the member mentioned", inline: false })
                .setFooter('you have been helped :P');
            message.channel.send(Embed);
    }
}