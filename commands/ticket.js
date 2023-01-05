module.exports = {
    name: 'ticket',
    description: "",
    execute(ctx, Discord, client, conf) {
        var issue = ctx.options.getString('issue');

        var server

        for (i in conf.guild) {
            if (conf.guild[i] == ctx.guildId) {
                server = conf.supportID[i]
            }
        }

        if(server) {
            ctx.reply({content: "Ticket Submitted!", ephemeral: true})            
        }
        else {
            ctx.reply({content: "Tickets aren't set up for this server", ephemeral: true})
            return;
        }

        const channel = client.channels.cache.get(server);

        var modRole
        for (i in conf.guild) {
            if (conf.guild[i] == ctx.guildId) {
                modRole = conf.modRoleID[i]
            }
        }
        var allTrusteds = [];
        ctx.guild.members.fetch().then(members => {
            allTrusteds = members.filter(mmbr => mmbr.roles.cache.get(modRole)).map(m => m.user.id)
            console.log(allTrusteds);

            var mod = allTrusteds[Math.ceil(Math.random() * (allTrusteds.length - 1))]

            const ticket = {
                title: `${ctx.user.username} has submitted a ticket`,
                color: 4321431,
                timestamp: new Date().toISOString(),
                author: {
                    name: `${ctx.user.username}#${ctx.user.discriminator}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${ctx.user.id}/${ctx.user.avatar}`
                },
                fields: [
                    {
                        name: "their issue:",
                        value: issue,
                        inline: false
                    },
                    {
                        name: "Assigned to:",
                        value: `<@${mod}>`,
                        inline: false
                    }
                ]
            }
            channel.send({ embeds: [ticket] });
        });
    }
}