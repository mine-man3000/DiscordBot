module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args, Discord, client){
        const conf = require('../conf.json')
        if(message.member.roles.cache.has(conf.modRoleID))
        {
          const member = message.mentions.users.first()
          if(member)
          {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('You succesfully kicked that member');
          }
          else
          {
            message.channel.send('You couldn\'t kick that member!');
          }
        }
        else
        {
          message.channel.send('You don\'t have permissions to use this commands');
        }

        const channel = client.channels.cache.get(conf.botLogChannelID)

        var embed = new Discord.MessageEmbed()
            .setAuthor("Member kicked " + member.name)
            .setTimestamp()
            .setColor('#68ff61')
            channel.send(embed);
    }
}