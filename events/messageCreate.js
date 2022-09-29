module.exports = {
    name: 'messageCreate',
    execute(message){
        if (message.content.includes("uwu") && !message.author.bot) {
            message.channel.send("uwu");
        }
    }
}