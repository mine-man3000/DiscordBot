const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'help',
	description: "this is a help command",
	execute(ctx, Discord) {
		const exampleEmbed = {
            color: 0x0099ff,
            title: 'Help:',
            description: 'have some help',
            fields: [
                {
					name: 'fact:',
					value: "Gives a random fact",
					inline: false
				},
				{
					name: 'keysmash:',
					value: "Generates keysmashes",
					inline: false
				},
				{
					name: 'ping:',
					value: "Replies with \"Pong!\"",
					inline: false
				},
				{
					name: 'rickroll:',
					value: "Sends all the lyics to \"Never Gonna Give You Up\" by Rick Astley",
					inline: false
				},
				{
					name: 'MOD COMMANDS:',
					value: "\u200B",
					inline: false
				},
				{
					name: 'ban:',
					value: "Bans the member mentioned",
					inline: false
				},
				{
					name: 'kick:',
					value: "Kicks the member mentioned",
					inline: false
				},
				{
					name: 'mute:',
					value: "Mutes the member mentioned",
					inline: false
				},
				{
					name: 'unmute:',
					value: "Unmutes the member mentioned",
					inline: false
				}
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: 'you have been helped :P',
            },
        };
            
        ctx.reply({ embeds: [exampleEmbed] });
	}
}