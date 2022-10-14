module.exports = {
    name: 'interactionCreate',
    execute(ctx, Discord, client){
    const command = ctx.commandName;
    switch(command) {
        case "ping":
            client.commands.get('ping').execute(ctx, Discord);
            break;
        
        case "embedtest":
            client.commands.get('embedtest').execute(ctx, Discord);
            break;
        
        case "fact":
            client.commands.get('fact').execute(ctx, Discord);
            break;
        
        case "modtest":
            client.commands.get('modtest').execute(ctx, Discord);
            break;
        
        case "rickroll":
            client.commands.get('rickroll').execute(ctx, Discord);
            break;
  
        case "ban":
            client.commands.get('ban').execute(ctx, Discord, client);
            break;
        
        case "kick":
            client.commands.get('kick').execute(ctx, Discord, client);
            break;
  
        case "mute":
            client.commands.get('mute').execute(ctx, Discord);
            break;
  
        case "unmute":
            client.commands.get('unmute').execute(ctx, Discord);
            break;
  
        case "keysmash":
            client.commands.get('keysmash').execute(ctx, Discord);
            break;
  
        case "help":
            client.commands.get('help').execute(ctx, Discord);
            break;
  
        case "specs":
            client.commands.get('specs').execute(ctx, Discord);
            break;
        
        case "react":
            client.commands.get('react').execute(ctx, Discord);
            break;

        case "throw":
            client.commands.get('throw').execute(ctx, Discord);
            break;

        case "vote":
            client.commands.get('vote').execute(ctx, Discord);
            break;

        default:
            break;
    }
    }
}