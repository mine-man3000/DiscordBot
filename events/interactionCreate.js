module.exports = {
    name: 'interactionCreate',
    execute(ctx, Discord, client, config){
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
            client.commands.get('ban').execute(ctx, Discord, client, config);
            break;
        
        case "kick":
            client.commands.get('kick').execute(ctx, Discord, client, config);
            break;
  
        case "mute":
            client.commands.get('mute').execute(ctx, Discord, config);
            break;
  
        case "unmute":
            client.commands.get('unmute').execute(ctx, Discord, config);
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

        case "throw":
            client.commands.get('throw').execute(ctx, Discord);
            break;

        case "vote":
            client.commands.get('vote').execute(ctx, Discord);
            break;

        case "role":
            client.commands.get('role').execute(ctx, config, client);
            break;

        case "quote":
            client.commands.get('quote').execute(ctx, config, client);
            break;
 
            case "wiki":
            client.commands.get('wiki').execute(ctx, config, client);
            break;
        

        default:
            break;
        }
    }
}