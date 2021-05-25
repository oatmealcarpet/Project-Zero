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
        skipTimer: false,
        loopSong: false,
        loopQueue: false,
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

//replace owner to your Discord id and invite to server.
const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '211774244294623243',
  invite: 'https://discord.gg/ZsSx8XB'
});

//registering command groups
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Commands'],
    ['gif', 'GIF Generate'],
    ['moderation', 'Server Moderation'],
    ['auto', 'Auto Reply'],
    ['info', 'Informations'],
    ['others', 'Other Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
//built-in commands
    eval: true,
    help: true,
    prefix: true,
    ping: true,
    unknowmCommand: false,
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');

//bot presence status
  let activities = [`v${version}`, `${client.guilds.cache.size} servers`, `${client.channels.cache.size} channels`, `${client.registry.commands.size} commands`, `${client.users.cache.size} users` ], i=0;
  setInterval(() => client.user.setActivity(`Music | ${prefix}help | ${activities[i++ % activities.length]}`, {type: 'LISTENING'}), 10000); //1000 is equals to 1 second
});

//if a user joined the server
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'joins-and-leaves'); //replace "ch.name" to "ch.topic" to find channel topic instead of name
  if (!channel) return;
  channel.send(`Welcome ${member} | ${member.user.tag}!`);
});

//if a user left the server
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'joins-and-leaves'); //replace "ch.name" to "ch.topic" to find channel topic instead of name
  if (!channel) return;
  channel.send(`${member} | ${member.user.tag} has left the server.`);
});

client.on('voiceStateUpdate', async (___, newState) => {
  if (
    newState.member.user.bot &&
    !newState.channelID &&
    newState.guild.musicData.songDispatcher &&
    newState.member.user.id == client.user.id
  ) {
    newState.guild.musicData.queue.length = 0;
    newState.guild.musicData.songDispatcher.end();
    return;
  }
  if (
    newState.member.user.bot &&
    newState.channelID &&
    newState.member.user.id == client.user.id &&
    !newState.selfDeaf
  ) {
    newState.setSelfDeaf(true);
  }
});

//if bot is mentioned without additional texts
client.on('message', async message => {
   let embed = new MessageEmbed()
    .setColor('#5dc4ff')
    .setDescription(`Hey there **${message.author.tag}**! \n• Want to know my prefix? \n\`gin\` | \`gin help\` \n\`@Gin-san#5627\` | \`@Gin-san#5627 help\``)
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)
    return message.channel.send(embed);
});

client.login(lx4ntnerjsJBOsnca4yDe-K0NrDVd5FJ);
