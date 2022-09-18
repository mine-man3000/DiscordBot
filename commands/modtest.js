module.exports = {
    name: 'modtest',
    description: "",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('1013598371790999552'))
        {
            message.channel.send("you got the power!")
        }
        else
        {
          message.channel.send('You don\'t have permissions to use this commands');
        }
    }
}