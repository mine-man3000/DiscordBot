const fs = require("fs")

module.exports = {
    name: 'minefetch',
    description: "gets OS name and hostname of the system I'm running on",
    execute(ctx, Discord, client, conf) {
        if (fs.existsSync("/etc/os-release")) {
            var lineReader = ""
	        var hostname = ""
            fs.access("/etc/conf.d/hostname", fs.F_OK, (err) => {
		        if(err) {
		            fs.access("/etc/hostname", fs.F_OK, (err) => {
		        		if(err) {
		        		ctx.reply("running on a system that doesn't have ``/etc/hostname`` or ``/etc/conf.d/hostname``")
		        		}
		        	})
		        	hostname = fs.readFileSync("/etc/hostname")
                    
                } else {
		            console.log("hello?")
                    lineReader = require('readline').createInterface({
                        input: fs.createReadStream('/etc/conf.d/hostname')
                    });

                    lineReader.on('line', function (line) {
		            	if (line.includes("hostname=")) {
		            		hostname = line.split("=")[1].replace(/\"/g, '')
                            console.log(line.split("=")[1].replace(/\"/g, ''))
                        }
		            })
                }
	        })
            lineReader = require('readline').createInterface({
                input: fs.createReadStream('/etc/os-release')
            });

            lineReader.on('line', function (line) {
                if (line.includes("PRETTY_NAME")) {
                    ctx.reply("OS: " + line.split("=")[1].replace(/\"/g, '') + "\nHostname: " + hostname)
                }
            });
        }
        else {
            ctx.reply("running on Windows or a system that doesn't have ``/etc/os-release``!");
        }
    }
}
