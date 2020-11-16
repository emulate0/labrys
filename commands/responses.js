const { MessageEmbed } = require('discord.js');

module.exports = {
	names: ['responses'],
	usage: 'responses',
	description: 'Checks responses.',
	execute: (message, args) => {
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.INFO)
			.setTitle('Responses')
			.addField('Test', `${new Date() - message.createdAt}ms`, true)
			.addField('Test2', `${Math.round(message.client.ws.ping)}ms`, true)
		).catch((error) => console.log);
	}
};