module.exports = {
    name: 'keysmash',
    description: "yes",
    execute(message, args, Discord){
        var Mlowercase = "abcdefghijklmnopqrstuvwxyz"
        let length = Math.ceil(Math.random() * 20);
        let value2 = Math.ceil(Math.random() * 25);

        let Mmessage = ""

        for (let index = 0; index < length; index++) {
            Mmessage += Mlowercase[value2]
            value2 = Math.ceil(Math.random() * 25);
        }
        message.channel.send(Mmessage)
    }
}