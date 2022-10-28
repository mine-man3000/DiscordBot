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
});

client.on("messageUpdate", (newMessage, oldMessage) => {
    client.commands.get('messageUpdate').execute(oldMessage, newMessage, client, config);
});

client.on("messageDelete", async message => {
    client.commands.get('messageDelete').execute(message, client, config);
});

client.on("messageCreate", (message) => {
    client.commands.get('messageCreate').execute(message, client, Discord);
})

client.on("interactionCreate", (ctx) => {
    client.commands.get('interactionCreate').execute(ctx, Discord, client, config);
});

client.on("guildBanAdd", function(guild, user){
    const embed = {
        color: 0x68ff61,
        title: `${user.tag} has been banned without using me`,
        author: {
            name: `${user.tag}`,
        },
        fields: [
            {
                name: "next time use me to ban someone",
                value: `I'm really just putting this here because this needs to be here or the bot will take a crap if this is blank`,
            },
        ]
    }
    var server
    for(i in config.guild) {
        if(config.guild[i] == message.guildId) {
            server = config.botLogChannelID[i]
        }
    }
    const channel = client.channels.cache.get(server);
    channel.send({ embeds: [embed] });    
});

client.on("guildBanRemove", function(guild, user){
    const embed = {
        color: 0x68ff61,
        title: `${user.tag} has been unbanned without using me`,
        author: {
            name: `${user.tag}`,
        },
        fields: [
            {
                name: "next time use me to unban someone, wait I don't have an unban command",
                value: `I'm really just putting this here because this needs to be here or the bot will take a crap if this is blank`,
            },
        ]
    }
    var server
    for(i in config.guild) {
        if(config.guild[i] == message.guildId) {
            server = config.botLogChannelID[i]
        }
    }
    const channel = client.channels.cache.get(server);
    channel.send({ embeds: [embed] });    
});

client.login(config.token);