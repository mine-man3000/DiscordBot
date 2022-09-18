module.exports = {
	name: 'keysmash',
	description: "yes",
	execute(message, args, Discord) {
		var dictionary = "abcdefghijklmnopqrstuvwxyz"
		let length = Math.ceil(Math.random() * 20);
		let dictionaryIndex = Math.ceil(Math.random() * dictionary.length());

		let messageToSend = "";

		for (let index = 0; index < length; index++) {
			messageToSend += dictionary[dictionaryIndex]
			dictionaryIndex = Math.ceil(Math.random() * dictionary.length());
		}
		message.channel.send(messageToSend)
	}
}