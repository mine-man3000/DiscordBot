module.exports = {
    name: 'fact',
    description: "this is a random facts command",
    execute(message, args, Discord){
         
        const messages = require('./messages.json')

        const randomMessage = messages.facts[Math.floor(Math.random() * messages.facts.length)]

        message.channel.send(randomMessage);
    }
}