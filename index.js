const { Discord, Client, GatewayIntentBits, Collection, Partials } = require('discord.js'); 
const fs = require('fs');

const config = require("./conf.json")

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
	],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction
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
    for(i of config.botLogChannelID) {
        const channel = client.channels.cache.get(i)
        channel.send("I have to log when I come online so I don't break :/");
    }
});

client.on("messageUpdate", (newMessage, oldMessage) => {
    client.commands.get('messageUpdate').execute(oldMessage, newMessage, client, config);
});

client.on("messageDelete", async message => {
    client.commands.get('messageDelete').execute(message, client, config);
});

let context = null;

client.on("messageCreate", (message) => {
    context = message;
    client.commands.get('messageCreate').execute(message, client, Discord);
})

client.on("interactionCreate", (ctx) => {
    client.commands.get('interactionCreate').execute(ctx, Discord, client, config);
});


client.on("messageReactionAdd", (reaction, user) => {
    client.commands.get('messageReactionAdd').execute(reaction, user, client, context);
});

client.on("messageReactionRemove", (reaction, user) => {
    client.commands.get('messageReactionRemove').execute(reaction, user, client, context);
});

client.login(config.token);