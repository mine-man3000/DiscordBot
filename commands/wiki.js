module.exports = {
    name: 'wiki',
    description: "information to be added to the wiki",
    execute(ctx, Discord, client, conf) {
        info = ctx.options.getString('info')
        
        if (ctx.guild.id != "1013305096295174174")
        {
            ctx.reply("this command only works in DisNCord!")
        }
        else
        {
            ctx.reply(`user: ${ctx.user.username}\ninfo: "${info}"`)
        }
        console.log(ctx.guild.id)
    }
}