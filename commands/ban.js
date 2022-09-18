module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args, Discord){
        const conf = require('../conf.json')
        if(message.member.roles.cache.has(conf.modRoleID))
        {
          const member = message.mentions.users.first()
          if(member)
          {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('You succesfully banned that member');
          }
          else
          {
            message.channel.send('You couldn\'t ban that member!');
          }
        }
        else
        {
          message.channel.send('You don\'t have permissions to use this commands');
        }
    }
}