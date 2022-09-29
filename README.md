## Discord Bot
very creative name... I know...  

In order to use the bot create a ``conf.json`` file at the root of the repo and put this in it:
```
{
    "token": "<your token goes here>",
    "modRoleID": "<role id for your chosen role>",
    "botLogChannelID": "<channel ID for the bot event log>",
    "client": "<bot user id>",
    "guild": "<id for the server to update slash commands for>"
}
```

client and guild are only used in deploy-commands.js, they are so you can add, remove, or update slash commands in the given server.  

If you add, remove, or update slash commands in deploy-commands.js, run ``node deploy-commands.js`` and it will update it all.

