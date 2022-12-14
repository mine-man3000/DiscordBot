const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const config = require("./conf.json")

const commands = [
	new SlashCommandBuilder().setName('ban').setDescription('bans the specified user')
	.addUserOption(option =>
		option.setName('user')
			.setDescription('the user to ban')
			.setRequired(true)),
	new SlashCommandBuilder().setName('throw').setDescription('throws an object at the user')
	.addUserOption(option =>
		option.setName('user')
			.setDescription('the user to throw an object at')
			.setRequired(false)),
	new SlashCommandBuilder().setName('kick').setDescription('kicks the specified user')
	.addUserOption(option =>
		option.setName('user')
			.setDescription('the user to kick')
			.setRequired(true)),
	new SlashCommandBuilder().setName('mute').setDescription('mutes the specified user')
	.addUserOption(option =>
		option.setName('user')
			.setDescription('the user to mute')
			.setRequired(true)),
	new SlashCommandBuilder().setName('unmute').setDescription('unmutes the specified user')
	.addUserOption(option =>
		option.setName('user')
			.setDescription('the user to unmute')
			.setRequired(true)),
	new SlashCommandBuilder().setName('vote').setDescription('vote on something')
	.addStringOption(option =>
		option.setName('question')
			.setDescription('what do you want to ask?')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('option1')
			.setDescription('what\'s the first option?')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('option2')
			.setDescription('what\'s second option ?')
			.setRequired(true)),
	new SlashCommandBuilder().setName('role').setDescription('add/remove roles')
	.addRoleOption(option =>
		option.setName('role')
			.setDescription('the role to remove/add')
			.setRequired(true)),
	new SlashCommandBuilder().setName('quote').setDescription('add a quote to the wiki channel')
	.addIntegerOption(option =>
		option.setName('number')
			.setDescription('the number of messages to quote')
			.setRequired(true)),
	new SlashCommandBuilder().setName('wiki').setDescription('information to add to the wiki')
	.addStringOption(option =>
		option.setName('info')
			.setDescription('the info which should be documented on the wiki')
			.setRequired(true)),
	new SlashCommandBuilder().setName('ticket').setDescription('sends a ticket to the mods ticket channel')
	.addStringOption(option =>
		option.setName('issue')
			.setDescription('the info which you would like to tell one of the mods')
			.setRequired(true)),
	new SlashCommandBuilder().setName('embedtest').setDescription('tests embeds'),
	new SlashCommandBuilder().setName('fact').setDescription('sends a random fact'),
	new SlashCommandBuilder().setName('help').setDescription('sends the help message'),
	new SlashCommandBuilder().setName('keysmash').setDescription('generates a random keysmash'),
	new SlashCommandBuilder().setName('ping').setDescription('replies with "pong"'),
	new SlashCommandBuilder().setName('rickroll').setDescription('rickrolls the user'),
	new SlashCommandBuilder().setName('specs').setDescription('lists the specs of my machines'),
	new SlashCommandBuilder().setName('minefetch').setDescription('gets OS name and hostname of the system I\'m running on'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(config.token);

for (i of config.guild) {
	rest.put(Routes.applicationGuildCommands(config.client, i), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
}
