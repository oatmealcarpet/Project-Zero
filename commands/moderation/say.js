const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      aliases: ['make-me-say', 'print'],
      memberName: 'say',
      group: 'moderation',
      description: 'Make the bot say anything',
      userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      clientPermissions: ["MANAGE_MESSAGES"],
      args: [
        {
          key: 'text',
          prompt: 'What do you want the bot to say?',
          type: 'string'
        }
      ]
    });
  }

  run(message, { text }) {
  	message.delete({ timeout: 1 });
    return message.say(text);
  }
};