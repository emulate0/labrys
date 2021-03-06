const { MessageEmbed } = require('discord.js');

module.exports = {
	names: ['roll'],
	usage: 'roll [# of dice] [sides on die]',
	description: 'Generates a random number within the limit specified.',
	execute: (message, args) => {
		var totalNum = 0
		var i
		for (let i = 0; i < args[0]; i++) {
			totalNum += Math.floor(Math.random() * args[1]) + 1
		}
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.SUCCESS)
			.setTitle('Rolled [' + args[0] + '] D' + args[1])
			.addField('Got ', totalNum)
		).catch((error) => console.log);
	}
};