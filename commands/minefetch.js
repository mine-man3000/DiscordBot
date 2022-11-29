const fs = require("fs")
const https = require('https'); // or 'https' for https:// URLs
var exec = require('child_process').exec;

module.exports = {
    name: 'minefetch',
    description: "gets OS name and hostname of the system I'm running on",
    execute(ctx, Discord, client, conf){
        if (fs.existsSync("/etc/os-release")) {
            var lineReader = require('readline').createInterface({
                input: require('fs').createReadStream('/etc/os-release')
            });
            
            var hostname = fs.readFileSync("/etc/hostname", "utf8")

            lineReader.on('line', function (line) {
                if(line.includes("PRETTY_NAME"))
                {
                    ctx.reply("OS: " + line.split("=")[1].replace(/\"/g, '') + "\nHostname: " + hostname)
                }
            });
        }
        else {
            ctx.reply("running on Windows or a system that doesn't have ``/etc/os-release``!");
        }
    }
}