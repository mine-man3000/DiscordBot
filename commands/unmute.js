module.exports = {
    name: 'unmute',
    description: "this is an unmute",
    execute(message, args, Discord){
      const target = message.mentions.users.first();
        if(message.member.roles.cache.has('1013598371790999552'))
        {
          
          if(target)
          {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
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