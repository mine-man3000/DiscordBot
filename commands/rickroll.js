module.exports = {
    name: 'rickroll',
    description: "rickroll someone with this",
    execute(ctx, Discord, client, conf) {
        const rickroll = require('./rickroll.json')

        ctx.reply(rickroll.rickroll.join("\n"));
    }
}