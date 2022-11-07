module.exports = {
    name: 'specs',
    description: "list the specs of my stuff",
    execute(ctx, Discord, client, conf){
        ctx.reply(
            "Chromebook 1: hostname, Fancy-Hat: OS: Fedora 36, CPU: i3-10110U, RAM: 8GB, GPU: integrated graphics\n" + 
            "Chromebook 2: hostname, fedora, OS: Fedora 36, CPU: Celeron N3060, RAM: 4GB, GPU: integrated graphics\n" + 
            "Surface 2: hostname: pi, OS: Raspberry Pi OS 11, CPU: Tegra 4, RAM: 2GB, GPU: integrated graphics\n" + 
            "Desktop: OS: none currently, CPU: Celeron j1900, RAM: 4GB, GPU: integrated graphics\n" + 
            "laptop: hostname, whatever Windows named it, CPU: i7-7700HQ, RAM: 16GB, GPU: GTX 1060"
            );
    }
}