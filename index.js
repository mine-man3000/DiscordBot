const { Discord, Client, GatewayIntentBits, Collection } = require('discord.js'); 
const fs = require('fs');

const config = require("./conf.json")

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for(const file of eventFiles){
    const command = require(`./events/${file}`);
 
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("Logged in as " + client.user.tag);
});

client.on("messageUpdate", (oldMessage, newMessage) => {
    client.commands.get('messageUpdate').execute(oldMessage, newMessage, client, config);
});

client.on("messageDelete", async message => {
    client.commands.get('messageDelete').execute(message, client, config);
});

client.on("messageCreate", (message) => {
    client.commands.get('messageCreate').execute(message);
})

client.on("interactionCreate", (ctx) => {
    client.commands.get('interactionCreate').execute(ctx, Discord, client);
});

client.login(config.token);