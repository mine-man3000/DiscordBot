## Discord Bot

### Configuration:
Very creative name... I know...

In order to use the bot, change the data in ``conf.json`` file at the root of the repo.

Client and guild are only used in deploy-commands.js, they are so you can add, remove, or update slash commands in the given server.
the bot can be in as many servers as possible, just make sure it has the muted, pronoun, and color roles

If you add, remove, or update slash commands in deploy-commands.js, run ``npm run update-commands``  or ``node deploy-commands.js`` and it will update all of the commands..

### Autostart with systemd:

if you want to start the bot as a systemd service: 
* open bot.service
* change ``WorkingDirectory=`` to ``WorkingDirectory=(directory for bot)``
* change ``User=`` to ``User=(your username)``
* ``sudo cp bot.service /lib/systemd/system/``
* ``sudo systemctl enable --now bot``

TODO:
    log when someone is kicked/banned without using the bot