const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['link', 'inv'],
      memberName: 'invite',
      group: 'others',
      description: "Sends the BOT invitation link."
    });
  }
  
  run(message) {
  	
  	const embed = new MessageEmbed()
    						 .setFooter(`${message.author.tag}`)
    						 .setAuthor(`${message.author.tag}`, 'https://i.postimg.cc/HspvnXJ5/JPEG-20200425-193202.png')
    						 .setURL('https://discord.com/api/oauth2/authorize?client_id=524873335864033290&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D524873335864033290%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.com%252Fapi%252Foauth2%252Fauthorize%253Fclient_id%253D5248733358&response_type=code&scope=bot%20gdm.join%20guilds.join%20guilds%20messages.read')
           .setColor(0x347ff7)
           .setTitle('BOT Invitaion Link')
           .setDescription(`Click the title to invite BOT.`)
    return message.say(embed);
    
  }
};