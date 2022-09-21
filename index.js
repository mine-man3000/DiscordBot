const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~';
const fs = require('fs');
const conf = require('./conf.json');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
 
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log(`Bot is online!  User: ${client.username}`);
});

/*
============== Member join ===============
*/
client.on('guildMemberAdd', guildMember =>{
	console.log(guildMember.username + "joined");
});

/*
============== Message edit ==============
*/
client.on('messageUpdate', (oldMessage, newMessage) => { // Old message may be undefined
	if (!oldMessage.author) {
		return;
	}
	const channel = client.channels.cache.get(conf.botLogChannelID);
	var embed = new Discord.MessageEmbed()
		.setAuthor("Message by " + newMessage.author.username + " updated in #" + oldMessage.channel.name)
		.setTimestamp()
		.setColor('#68ff61')
		.addField('Original:', oldMessage)
		.addField('Edit:', newMessage);

		channel.send(embed);
});
/*
============= Message deleted ============
*/
client.on('messageDelete', async message => {
	const channel = client.channels.cache.get(conf.botLogChannelID);

	const embed = new Discord.MessageEmbed()
		.setTitle("Message Deleted")
		.setDescription(message.content)
		.addField('Author:', message.author.tag)
		.addField('Channel:', message.channel.name)
		.setTimestamp();

		channel.send(embed);
});

/*
============== Message sent ==============
*/

client.on('message', message =>{
	if (message.author.username == "mineman" && message.content == "uwu") {
		message.reply("uwu");
	}
	
	if (message.content == ":3") {
		message.channel.send("colon three");
	}

	if (message.content == "4:") {
		message.channel.send("four colon");
	}

	/*
	========== If pinged, send help ==========
	*/
	if (message.content == "<@1009342267120685137>") {
		client.commands.get('help').execute(message, "", Discord);
	}

	let text = "";

	/*
	=== If message is just "~", do nothing ===
	*/
	if (message.content[1] == "~") {
		return;
	}

	const nameArray = message.content.split(" ");

	let someValue = Math.ceil(Math.random() * 100);

	lowercase = message.content.toLowerCase();

	/*
	If the message contains one of: "what's" OR "what is"
	as well as "seshos", send a description of SeshOS
	*/
	if ((lowercase.contains("what\'s") || lowercase.contains("what is")) && lowercase.contains("seshos")) {
		message.channel.send("SeshOS is the hobby operating system mineman is making\r\ngithub: <https://github.com/mine-man3000/SeshOS>\r\nchannel: <#1016214331609849896>\r\nbeware of GUI and Shell in the kernel...")
	}

	if ((nameArray[0] == "I\'m" || nameArray[0] == "i\'m" || nameArray[0] == "Im" || nameArray[0] == "im") && !message.author.bot && someValue == 50) {
		for (let i = 1; i < nameArray.length; i++) {
			text += nameArray[i] + " ";
		}
		message.channel.send("Hi " + text + "I'm DisNBot");
	}


	if (!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}
 
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	let command = client.commands.get(commandName);
	
	if (command != null) {
		command.execute(message, args, Discord);
	}
	else {
		message.channel.send(`Error: command \"${command}\" not found`);
	}
	
});

client.login(conf.token);