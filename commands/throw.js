module.exports = {
    name: 'throw',
    description: "throws a random object at a user",
    execute(ctx, Discord){
        const member = ctx.options.getUser('user');
        const objects = require('./objects.json')

        const randomMessage = objects.objects[Math.floor(Math.random() * objects.objects.length)]

        if (Math.ceil(Math.random() * 100) == 50)
        {
            ctx.reply(`you threw **a broken LFS install** into **/lost+found**`)
        }
        else
        {
            if (member == null)
            {
                ctx.reply(`you threw **${randomMessage}** at **a random person**`);
            }
            else
            {
                ctx.reply(`you threw **${randomMessage}** at **${member.username}**`);
            }
        }
    }
}