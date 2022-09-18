module.exports = {
    name: 'modtest',
    description: "",
    execute(message, args, Discord){
        const conf = require('../conf.json')
        if(message.member.roles.cache.has(conf.modRoleID))
        {
            message.channel.send("you got the power!")
        }
        else
        {
          message.channel.send('You don\'t have permissions to use the mod commands');
        }
    }
}