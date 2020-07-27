const Command = require('../../structures/commands/AutoReply');

module.exports = class JoeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'joe',
			aliases: [],
			group: 'auto',
			memberName: 'joe',
			description: 'JOE MAMMAAAAA!!!!',
			patterns: [/^j+o+e+$/i]
		});
	}

	generateText() {
		return 'Joe Mama!!!!!!!!!!!!!!';
	}
};