const { MessageEmbed } = require('discord.js');

module.exports = {
	names: ['ping2'],
	usage: 'PING2',
	description: 'Checks bot response time.',
	execute: (message, args) => {
		client.on('message', message => {
			if (message.content === '!ping') {
					message.channel.send('Pong.');
				}
		});
	}
};