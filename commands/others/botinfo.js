const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports = class WhoMadeMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['info'],
      memberName: 'whomademe',
      group: 'others',
      description: "Replies with the bot creator's name"
    });
  }
run(msg, args) {
  const embed = new MessageEmbed()
    	   .setFooter('Zero`#2726')
    	   .setAuthor('Project : Server', 'https://i.postimg.cc/HspvnXJ5/JPEG-20200425-193202.png')
           .setColor(0x347ff7)
           .setTitle('Bot Information')
           .setURL('https://discord.com/api/oauth2/authorize?client_id=524873335864033290&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D524873335864033290%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.com%252Fapi%252Foauth2%252Fauthorize%253Fclient_id%253D5248733358&response_type=code&scope=bot%20gdm.join%20guilds.join%20guilds%20messages.read')
           .setDescription('Bot Author, Created, Prefix')
           .addField('Server Count', `${client.guilds.cache.size}`)
           .addField('Made by: ', 'Zero`#2726')
           .addField('Created: ', 'May, 2020')
           .addField('BOT Prefix:', 'p')
    return msg.say(embed);
    
  }
  
};