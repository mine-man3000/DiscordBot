const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~';
const fs = require('fs');
const conf = require('./conf.json');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is online!');
  });

client.on('guildMemberAdd', guildMember =>{
  console.log(guildMember.username + "joined");
});


client.on('messageUpdate', (oldMessage, newMessage) => { // Old message may be undefined
    if (!oldMessage.author) return;
    const channel = client.channels.cache.get(conf.botLogChannelID)
    var embed = new Discord.MessageEmbed()
        .setAuthor("Message by " + newMessage.author.username + " updated in #" + oldMessage.channel.name)
        .setTimestamp()
        .setColor('#68ff61')
        .addFields(
            {name: 'original:',value: oldMessage},
            {name: 'edit:', value: newMessage}    );
        channel.send(embed);
})

client.on('messageDelete', async message => {
    const channel = client.channels.cache.get(conf.botLogChannelID)

    const embed = new Discord.MessageEmbed()
        .setTitle("Message Deleted")
        .setDescription(message.content)
        .addField('Author:', message.author.tag)
        .addField('Channel:', message.channel.name)
        .setTimestamp();
        channel.send(embed)
});

client.on('message', message =>{
    if(message.author.username == "mineman" && message.content == "uwu")
      message.channel.send("uwu");
    
    if(message.content == ":3")
        message.channel.send("colon three")

    if(message.content == "4:")
        message.channel.send("four colon")

    if(message.content == "<@1009342267120685137>")
        client.commands.get('help').execute(message, "", Discord);

    let text = ""

    if(message.content[1] == "~") return;

    const array = message.content.split(" ")

    let value1 = Math.ceil(Math.random() * 100);

    lowercase = message.content.toLowerCase();

    if(lowercase == "what's seshos" || lowercase == "what's seshos?" || lowercase == "whats seshos" || lowercase == "whats seshos?")
    {
        message.channel.send("SeshOS is the hobby operating system mineman is making\ngithub: <https://github.com/mine-man3000/SeshOS>\nchannel: <#1016214331609849896>\nbeware of GUI and Shell in the kernel...")
    }

    if(array[0] == "I'm" && !message.author.bot && value1 == 50) {
      for (let i = 1; i < array.length; i++) {
        text += array[i] + " ";
      }
      message.channel.send("Hi " + text + "I'm DisNBot")
    }


    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    switch(command) {
      case "ping":
          client.commands.get('ping').execute(message, args, Discord);
          break;
      
      case "embedtest":
          client.commands.get('embedtest').execute(message, args, Discord);
          break;
      
      case "fact":
          client.commands.get('fact').execute(message, args, Discord);
          break;
      
      case "modtest":
          client.commands.get('modtest').execute(message, args, Discord);
          break;
      
      case "rickroll":
          client.commands.get('rickroll').execute(message, args, Discord);
          break;

      case "ban":
          client.commands.get('ban').execute(message, args, Discord);
          break;

      case "mute":
          client.commands.get('mute').execute(message, args, Discord);
          break;

      case "unmute":
          client.commands.get('unmute').execute(message, args, Discord);
          break;

      case "unmute":
          client.commands.get('unmute').execute(message, args, Discord);
          break;

      case "keysmash":
          client.commands.get('keysmash').execute(message, args, Discord);
          break;

      case "help":
          client.commands.get('help').execute(message, args, Discord);
          break;

      case "specs":
          client.commands.get('specs').execute(message, args, Discord);
          break;

      default:
          message.channel.send("error command \"" + command + "\" not found")
    }
});

client.login(conf.token)