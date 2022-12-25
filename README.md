## Discord Bot

### Configuration:
Very creative name... I know...

In order to use the bot create a ``conf.json`` file at the root of the repo and put this in it:
```
{
    "token": <token>,
    "client": <bot id>,
    "modRoleID": [
        <server1>,
        <server2>
    ],
    "botLogChannelID": [
        <server1>,
        <server2>
    ],
    "guild": [
        <server1>,
        <server2>
    ],
    "welcomeID": [
        <server1>,
        <server2>
    ],
    "leaveID": [
        <server1>,
        <server2>
    ]
}
```

Client and guild are only used in deploy-commands.js, they are so you can add, remove, or update slash commands in the given server.
the bot can be in as many servers as possible, just make sure it has the muted, pronoun, and color roles

If you add, remove, or update slash commands in deploy-commands.js, run ``node deploy-commands.js`` and it will update it all.

### Autostart with systemd:

if you want to start the bot as a systemd service: 
* open bot.service
* change ``WorkingDirectory=`` to ``WorkingDirectory=(directory for bot)``
* change ``User=`` to ``User=(yout username)``
* ``sudo cp bot.service /lib/systemd/system/``
* ``sudo systemctl enable --now bot``

TODO:
    log when someone is kicked/banned without using the bot