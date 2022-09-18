const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "this is a mute",
    execute(message, args, Discord){
      const target = message.mentions.users.first();
        if(message.member.roles.cache.has('1013598371790999552'))
        {
          
          if(target)
          {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));


          }
          else
          {
           message.channel.send('we couldn\'t find that member');
          }
        }
        else
        {
          message.channel.send('You don\'t have permissions to use this commands');
        }
    }
}