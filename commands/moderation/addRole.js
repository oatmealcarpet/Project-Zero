const { Command } = require('discord.js-commando')

module.exports = class addRoleCommand extends Command {
    constructor(client) {
        super(client, {
            name:"addrole",
            aliases: ["add-role", "arole"],
            group: 'moderation',
            memberName: 'addrole',
            description: 'Adds a role to a user.',
            userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      
            args: [
                {
                    type:"user",
                    prompt:"Which user would you like to add the role to?",
                    key:"user",
                },
                {
                    type:"role",
                    prompt:"Which role would you like to add?",
                    key:"role"
                }
            ]
        })
    }
    run(msg, { user, role }) {

        msg.guild.member(user).roles.add(role)
        msg.say('Successfully added ' + role + ' to ' + user)
 
    
    }
}
