module.exports = {
    name: 'messageReactionAdd',
    execute(reaction, user, client, context){
        if (user.username != client.username) {
            if (reaction.emoji.name == '♀️')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'she/her');
                memberTarget.roles.add(role.id)
            }
            if (reaction.emoji.name == '♂️')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'he/him');
                memberTarget.roles.add(role)
            }
            if (reaction.emoji.name == '*️⃣')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'they/them');
                memberTarget.roles.add(role)
            }
            if (reaction.emoji.name == '🔴')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'red');
                memberTarget.roles.add(role)
            }
            if (reaction.emoji.name == '🔵')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'blue');
                memberTarget.roles.add(role)
            }
            if (reaction.emoji.name == '🟣')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'purple');
                memberTarget.roles.add(role)
            }
            if (reaction.emoji.name == '🟠')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'orange');
                memberTarget.roles.add(role)
            }
        }
    }
}