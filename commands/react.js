module.exports = {
    name: 'react',
    description: "reaction role testing",
    async execute(ctx, Discord){
        const embed = {
			author: {
				name: `${ctx.user.username}`
			},
			fields: [
				{
					name: `she/her: ♀️`,
					value: `\u200B`,
                    inline: true
				},
				{
					name: `he/him: ♂️`,
					value: `\u200B`,
                    inline: true
                },
				{
					name: `they/them: *️⃣`,
					value: `\u200B`,
                    inline: true
                },
				{
					name: `red: 🔴`,
					value: `blue: 🔵`,
                },
				{
					name: `purple: 🟣`,
					value: `orange: 🟠`,
                }
            ],
			timestamp: new Date().toISOString(),
			color: 0x68ff61
		}
        const message = await ctx.reply({ embeds: [embed], fetchReply: true });
        let id = message.id;
        message.react("♀️");
        message.react("♂️");
        message.react("*️⃣");
        message.react("🔴");
        message.react("🔵");
        message.react("🟣");
        message.react("🟠");
    }
}