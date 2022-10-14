module.exports = {
    name: 'messageReactionRemove',
    execute(reaction, user){
        if (user.username != client.username) {
            if (reaction.emoji.name == '♀️')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'she/her');
                memberTarget.roles.remove(role.id)
            }
            if (reaction.emoji.name == '♂️')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'he/him');
                memberTarget.roles.remove(role)
            }
            if (reaction.emoji.name == '*️⃣')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'they/them');
                memberTarget.roles.remove(role)
            }
            if (reaction.emoji.name == '🔴')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'red');
                memberTarget.roles.remove(role)
            }
            if (reaction.emoji.name == '🔵')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'blue');
                memberTarget.roles.remove(role)
            }
            if (reaction.emoji.name == '🟣')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'purple');
                memberTarget.roles.remove(role)
            }
            if (reaction.emoji.name == '🟠')
            {
                let memberTarget = context.guild.members.cache.get(user.id);
                let role = context.guild.roles.cache.find(role => role.name === 'orange');
                memberTarget.roles.remove(role)
            }
        }
    }
}