module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args, Discord){
        const conf = require('../conf.json')
        if(message.member.roles.cache.has(conf.modRoleID))
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