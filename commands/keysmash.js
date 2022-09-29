module.exports = {
	name: 'keysmash',
	description: "yes",
	execute(ctx, Discord) {
		var dictionary = "abcdefghijklmnopqrstuvwxyz"
		let length = Math.ceil(Math.random() * 20);
		let dictionaryIndex = Math.ceil(Math.random() * 25);

		let messageToSend = "";

		for (let index = 0; index < 3; index++) {
			messageToSend += dictionary[dictionaryIndex]
			dictionaryIndex = Math.ceil(Math.random() * 25);
		}
		ctx.reply(messageToSend)
	}
}