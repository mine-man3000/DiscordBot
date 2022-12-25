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

var log = fs.createWriteStream('logs/index.html');
process.stdout.write = process.stderr.write = log.write.bind(log);

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const command = require(`./events/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`<script src="main.js"></script>\n<pre>\nLogged in as ${client.user.tag}`);
});

client.on("messageUpdate", (newMessage, oldMessage) => {
    client.commands.get('messageUpdate').execute(oldMessage, newMessage, client, config);
});

client.on("messageDelete", (message) => {
    client.commands.get('messageDelete').execute(message, client, config);
});

client.on("messageCreate", (message) => {
    client.commands.get('messageCreate').execute(message, client, Discord);
})

client.on("interactionCreate", (ctx) => {
    client.commands.get(ctx.commandName).execute(ctx, Discord, client, config)
});

client.on("guildBanAdd", (guild, user) => {
    client.commands.get('guildBanAdd').execute(guild, client, user, config);
});

client.on("guildBanRemove", (guild, user) => {
    client.commands.get('guildBanRemove').execute(guild, client, user, config);
});

client.on("guildMemberAdd", (member) => {
    client.commands.get('guildMemberAdd').execute(client, member, config);
});

client.on("guildMemberRemove", (member) => {
    client.commands.get('guildMemberRemove').execute(client, member, config);
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
    client.commands.get('guildMemberUpdate').execute(oldMember, newMember, config, client);
});

client.login(config.token);