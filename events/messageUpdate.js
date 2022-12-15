const Diff = require("diff")

module.exports = {
    name: 'messageUpdate',
    execute(newMessage, oldMessage, client, config){
        const diff_chunks = [];
        Diff.diffWords(oldMessage.content, newMessage.content).forEach((chunk) => {
            let md = '';
            let diff = '';


            if (chunk.added)
                md = '**';
            else if (chunk.removed)
                md = '~~';

            diff += md + chunk.value + md;
            diff_chunks.push(diff)
            //console.log();
        })
        if(newMessage.author.id != "985213199248924722")
        {
            if (!oldMessage.author) {
                return;
            }
            const embed = {
                color: 0x68ff61,
                title: `A message in #${oldMessage.channel.name} has been updated`,
                author: {
                    name: `Updated by ${oldMessage.author.tag}`,
                },
                fields: [
                    {
                        name: "Original:",
                        value: `${oldMessage}`,
                    },
                    {
                        name: 'Edit:',
                        value: `${newMessage}`,
                    },
                    {
                        name: 'Diff:',
                        value: `${elide(diff_chunks.filter((chunk) => chunk !== '').join(''), 1024)}`,
                    },
                ]
            }
            var server
            for(i in config.guild) {
                if(config.guild[i] == newMessage.guildId) {
                    server = config.botLogChannelID[i]
                }
            }
            const channel = client.channels.cache.get(server);
            if(newMessage.content != oldMessage.content)
            {
                channel.send({ embeds: [embed] });  
            }
        }
    }
}

function elide(str, max_len) {
    if (!str)
        return;

    if (str.length > max_len)
        return str.substr(0, max_len - 3) + '...';

    return str;
}