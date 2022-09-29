module.exports = {
    name: 'fact',
    description: "this is a random facts command",
    execute(ctx, Discord){
         
        const messages = require('./messages.json')

        const randomMessage = messages.facts[Math.floor(Math.random() * messages.facts.length)]

        ctx.reply(randomMessage);
    }
}