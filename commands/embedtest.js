const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embedtest',
    description: "tests embeds",
    execute(ctx, Discord){
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Some title',
            url: 'https://discord.js.org',
            author: {
                name: 'Some name',
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
                url: 'https://discord.js.org',
            },
            description: 'Some description here',
            thumbnail: {
                url: 'https://i.imgur.com/AfFp7pu.png',
            },
            fields: [
                {
                    name: 'Regular field title',
                    value: 'Some value here',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                },
            ],
            image: {
                url: 'https://i.imgur.com/AfFp7pu.png',
            },
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Some footer text here',
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
            },
        };
            
        ctx.reply({ embeds: [exampleEmbed] });        
    }
}