module.exports = {
    name: 'rickroll',
    description: "rickroll someone with this",
    execute(ctx, Discord){
        const rickroll = require('./rickroll.json')

        ctx.reply(rickroll.rickroll.join("\n"));
    }
}