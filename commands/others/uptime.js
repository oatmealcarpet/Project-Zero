const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class UptimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'uptime',
      aliases: ['alive', 'up'],
      memberName: 'uptime',
      group: 'others',
      description: "Replies with the bot's total uptime."
    });
  }
  run(message) {
    var seconds = parseInt((this.client.uptime / 1000) % 60),
      minutes = parseInt((this.client.uptime / (1000 * 60)) % 60),
      hours = parseInt((this.client.uptime / (1000 * 60 * 60)) % 24);
    // prettier-ignore
    hours = (hours < 10) ? ('0' + hours) : hours;
    // prettier-ignore
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    // prettier-ignore
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
    
    const embed = new MessageEmbed()
    						 .setFooter(`${message.author.tag}`)
    						 .setAuthor('Project Zero', 'https://i.postimg.cc/HspvnXJ5/JPEG-20200425-193202.png')
           .setColor(0x347ff7)
           .setTitle('BOT Uptime')
           .setDescription(`**__${hours}__** hours, **__${minutes}__** minutes, **__${seconds}__** seconds.`)
    return message.say(embed);
    
  }
};