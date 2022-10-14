module.exports = {
    name: 'messageCreate',
    execute(message){
        if (message.content.includes("uwu") && !message.author.bot) {
            message.channel.send("uwu");
        }
        if(message.content == ":3")
        message.channel.send("colon three")

        if(message.content == "4:")
            message.channel.send("four colon")

        if(message.content == "<@1009342267120685137>")
            client.commands.get('help').execute(message, "", Discord);

        let text = ""

        if(message.content[1] == "~") return;

        const array = message.content.split(" ")

        let value1 = Math.ceil(Math.random() * 100);

        lowercase = message.content.toLowerCase();

        if(lowercase == "what's seshos" || lowercase == "what's seshos?" || lowercase == "whats seshos" || lowercase == "whats seshos?")
        {
            message.channel.send("SeshOS is the hobby operating system mineman is making\ngithub: <https://github.com/mine-man3000/SeshOS>\nchannel: <#1016214331609849896>\nbeware of GUI and Shell in the kernel...")
        }

        if(array[0] == "I'm" && !message.author.bot && value1 == 50) {
          for (let i = 1; i < array.length; i++) {
            text += array[i] + " ";
          }
          message.channel.send("Hi " + text + "I'm DisNBot")
        }
    }
}