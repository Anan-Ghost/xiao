const Command = require('../../structures/Command');
const teachings = require('../../assets/json/axis-cult');

module.exports = class AxisCultCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'axis-cult',
			aliases: ['axis', 'axis-pray'],
			group: 'random',
			memberName: 'axis-cult',
			description: 'Responds with a teaching of the Axis Cult.',
			credit: [
				{
					name: 'Axis Order Bot',
					url: 'https://www.reddit.com/r/axisorderbot/wiki/index'
				},
				{
					name: 'KONOSUBA -God\'s blessing on this wonderful world!',
					url: 'http://konosuba.com/'
				}
			]
		});
	}

	run(msg) {
		return msg.say(teachings[Math.floor(Math.random() * teachings.length)]);
	}
};
