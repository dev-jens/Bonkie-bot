// node ./main.js to start the bonkie bot
//constants

const discord = require("discord.js");
const client = new discord.Client();
const config = require('./config.json');
//const ytdl = require('ytdl-core');

// prefix to call the bot
const prefix = "69 ";

//Edit out next line when deploying on main branch
//const config = require('./config.json');

client.on('ready', () =>{
    console.log("Bonkie bot is online!");
})

client.on('message', async (message) =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix) || message.author.bot ) return;
    
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send(`
These are my supported Commands:
69 bing           -- returns suprise
69 walter         -- shows your favorite dog
69 pringles       -- when you reach for the last pringle in the can
69 play [link]    -- speelt pokoe
69 stop           -- stopt pokoe
        `);
    } 

    if(command === 'bing'){
        message.channel.send('BONK!');
    }

    if (command === 'walter'){
        message.channel.send('walter',{
            files: ['pictures/walter.png']
         });
    }

    if (command === 'pringles'){
         message.channel.send('Vuist in poep',{
            files: ['pictures/pringles.png']
        });
    }  
  /*  if(command === 'play'){
        const voiceChannel = message.member.voice.channel;
        const permissions = voiceChannel.permissionsFor(message.client.user);

        let url = args[0];
        if(!url) return message.channel.send("Please give link so we can play to pokoe on that link!");

        // if not connected to a channel 
        if(!voiceChannel) return message.channel.send("you need to be in a voice channel to use this command");
        // Rights to connect or speak with a voice channel
        if (!permissions.has('CONNECT')) return message.channel.send("Bonkie bot does not have the permission to connect to this voicechannel");
        if (!permissions.has('SPEAK')) return message.channel.send("Bonkie bot does not have the permission to play a pokoe in this voice channel");

        try {
            var connection = await voiceChannel.join();
        } catch (error) {
            console.log(`there was an error connecting to the voice channel: ${error} `);
            message.channel.send(`there was an error connecting to the voice channel: ${error}`);
        }

        const dispatcher = connection.play(ytdl(url, { filter: 'audioonly'}))
        .on('finish', () =>{
            console.log("POKOE DONE");
            voiceChannel.leave();
        })
        .on('error', error => {
            console.log(error);
        });
        dispatcher.setVolumeLogarithmic(5/5);
    }else if(command == 'stop'){
        if(!message.member.voice.channel) return message.channel.send("you must to be in a voice channel to cancel culture");
        message.member.voice.channel.leave();
        return undefined;
    } */   
}); 

// Client login 

client.login(config.token);    
