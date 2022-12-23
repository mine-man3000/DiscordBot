module.exports = {
    name: 'quote',
    description: "quotes the given number of messages",
    execute(ctx, Discord, client, conf) {
        const num = ctx.options.getInteger('number')
        var msg = ""
        ctx.channel.messages.fetch({ limit: num }).then(messages => {
            messages.forEach(message => msg = `${message.author.username}: ${message.content}\n${msg}`)
            ctx.reply(msg)  
        })
    }
}