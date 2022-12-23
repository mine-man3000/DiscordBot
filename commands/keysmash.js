module.exports = {
	name: 'keysmash',
	description: "yes",
	execute(ctx, Discord, client, conf) {
		var dictionary = "abcdefghijklmnopqrstuvwxyz"
		let length = Math.ceil(Math.random() * 20);
		let dictionaryIndex = Math.ceil(Math.random() * 25);

		let messageToSend = "";

		for (let i = 0; i < 3; i++) {
			messageToSend += dictionary[dictionaryIndex]
			dictionaryIndex = Math.ceil(Math.random() * 25);
		}
		ctx.reply(messageToSend)
	}
}