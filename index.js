const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '211774244294623243',
  invite: 'https://discord.gg/ZsSx8XB'
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group'],
    ['moderation', 'Server Moderation'],
    ['others', 'Other Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`Music | ${prefix}help`, {
    type: 'LISTENING'
  });
  
});
		client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'joins-and-leaves'); 
  if (!channel) return;
  channel.send(`Welcome ${member}!`);
});

client.login(token);
