module.exports = {
	name: 'ping',
	description: "this is a command that tests to see if the bot works",
	execute(ctx, Discord) {
		ctx.reply('Pong!');
	}
}