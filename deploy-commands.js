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
	new SlashCommandBuilder().setName('embedtest').setDescription('tests embeds'),
	new SlashCommandBuilder().setName('fact').setDescription('sends a random fact'),
	new SlashCommandBuilder().setName('help').setDescription('sends the help message'),
	new SlashCommandBuilder().setName('keysmash').setDescription('generates a random keysmash'),
	new SlashCommandBuilder().setName('ping').setDescription('replies with "pong"'),
	new SlashCommandBuilder().setName('rickroll').setDescription('rickrolls the user'),
	new SlashCommandBuilder().setName('specs').setDescription('lists the specs of my machines'),
	new SlashCommandBuilder().setName('react').setDescription('testing reaction roles'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(config.token);

rest.put(Routes.applicationGuildCommands(config.client, config.guild), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);