const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    await client.application.commands.set([]);
    console.log("All global slash commands have been removed!");

     const guildId = 'YOUR_GUILD_ID';
     const guild = client.guilds.cache.get(guildId);
     if (guild) {
         await guild.commands.set([]);
         console.log(`All slash commands in guild ${guildId} have been removed!`);
     }

    client.destroy(); 
});

client.login('TOKEN_ID');
