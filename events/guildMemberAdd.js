module.exports = {
    name: 'guildMemberAdd',
    execute(client, member, config){
        var server
        for(i in config.guild) {
            if(config.guild[i] == member.guild.id) {
                server = config.welcomeID[i]
            }
        }
        const channel = client.channels.cache.get(server);
        channel.send(`${member.user.tag} has joined the server`)
    }
}