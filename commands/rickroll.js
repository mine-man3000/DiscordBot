module.exports = {
    name: 'rickroll',
    description: "rickroll someone with tis",
    execute(message, args, Discord){
        const rickroll = require('./rickroll.json')

        message.channel.send(rickroll.rickroll);
    }
}