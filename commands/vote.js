module.exports = {
    name: 'vote',
    description: "cast a vote",
    async execute(ctx, Discord){
		const question = ctx.options.getString('question');        
		const option1 = ctx.options.getString('option1');        
		const option2 = ctx.options.getString('option2');
        const embed = {
			author: {
				name: `${ctx.user.username} has cast a vote`
			},
            title: `${question}`,
			fields: [
				{
					name: ` :regional_indicator_a:: ${option1}`,
					value: `\u200B`,
                    inline: true
				},
				{
					name: ` :regional_indicator_b:: ${option2}`,
					value: `\u200B`,
                    inline: true
                }
            ],
			timestamp: new Date().toISOString(),
			color: 0x68ff61
        }
        const message = await ctx.reply({ embeds: [embed], fetchReply: true });
        message.react('🇦');
        message.react("🇧");
        console.log("Hello");
        setTimeout(() => {
            const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(ctx.user.id));

            try {
                for (const reaction of userReactions.values()) {
                    console.log(reaction)
                }
            } catch (error) {
                console.error('Failed to remove reactions.');
            }
        }, 5000);
    }
}