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
    const channel = client.channels.cache.get(config.botLogChannelID)
    console.log("Logged in as " + client.user.tag);
    channel.send("I have to log when I come online so I don't break :/");
});

client.on("messageUpdate", (oldMessage, newMessage) => {
    client.commands.get('messageUpdate').execute(oldMessage, newMessage, client, config);
});

client.on("messageDelete", async message => {
    client.commands.get('messageDelete').execute(message, client, config);
});

let context = null;

client.on("messageCreate", (message) => {
    context = message;
    client.commands.get('messageCreate').execute(message);
})

client.on("interactionCreate", (ctx) => {
    client.commands.get('interactionCreate').execute(ctx, Discord, client);
});
client.on("messageReactionAdd", (reaction, user) => {
    console.log("reaction added")
    if (user.username != client.username) {
        if (reaction.emoji.name == '♀️')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'she/her');
            memberTarget.roles.add(role.id)
        }
        if (reaction.emoji.name == '♂️')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'he/him');
            memberTarget.roles.add(role)
        }
        if (reaction.emoji.name == '*️⃣')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'they/them');
            memberTarget.roles.add(role)
        }
        if (reaction.emoji.name == '🔴')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'red');
            memberTarget.roles.add(role)
        }
        if (reaction.emoji.name == '🔵')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'blue');
            memberTarget.roles.add(role)
        }
        if (reaction.emoji.name == '🟣')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'purple');
            memberTarget.roles.add(role)
        }
        if (reaction.emoji.name == '🟠')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'orange');
            memberTarget.roles.add(role)
        }
	}
});

client.on("messageReactionRemove", (reaction, user) => {
    if (user.username != client.username) {
        if (reaction.emoji.name == '♀️')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'she/her');
            memberTarget.roles.remove(role.id)
        }
        if (reaction.emoji.name == '♂️')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'he/him');
            memberTarget.roles.remove(role)
        }
        if (reaction.emoji.name == '*️⃣')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'they/them');
            memberTarget.roles.remove(role)
        }
        if (reaction.emoji.name == '🔴')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'red');
            memberTarget.roles.remove(role)
        }
        if (reaction.emoji.name == '🔵')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'blue');
            memberTarget.roles.remove(role)
        }
        if (reaction.emoji.name == '🟣')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'purple');
            memberTarget.roles.remove(role)
        }
        if (reaction.emoji.name == '🟠')
        {
            let memberTarget = context.guild.members.cache.get(user.id);
		    let role = context.guild.roles.cache.find(role => role.name === 'orange');
            memberTarget.roles.remove(role)
        }
	}
});

client.login(config.token);