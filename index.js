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

client.on("ready", () => {
    console.log("Logged in as " + client.user.tag);
    "204255221017214977"
});

client.on("interactionCreate", (ctx) => {
    const command = ctx.commandName;
    switch(command) {
        case "ping":
            client.commands.get('ping').execute(ctx, Discord);
            break;
        
        case "embedtest":
            client.commands.get('embedtest').execute(ctx, Discord);
            break;
        
        case "fact":
            client.commands.get('fact').execute(ctx, Discord);
            break;
        
        case "modtest":
            client.commands.get('modtest').execute(ctx, Discord);
            break;
        
        case "rickroll":
            client.commands.get('rickroll').execute(ctx, Discord);
            break;
  
        case "ban":
            client.commands.get('ban').execute(ctx, Discord, client);
            break;
        
        case "kick":
            client.commands.get('kick').execute(ctx, Discord, client);
            break;
  
        case "mute":
            client.commands.get('mute').execute(ctx, Discord);
            break;
  
        case "unmute":
            client.commands.get('unmute').execute(ctx, Discord);
            break;
  
        case "keysmash":
            client.commands.get('keysmash').execute(ctx, Discord);
            break;
  
        case "help":
            client.commands.get('help').execute(ctx, Discord);
            break;
  
        case "specs":
            client.commands.get('specs').execute(ctx, Discord);
            break;

        default:
            break;
    }
});

client.login(config.token);