module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('1013598371790999552'))
        {
          const member = message.mentions.users.first()
          if(member)
          {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
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
    }
}