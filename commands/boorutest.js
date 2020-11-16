const { MessageEmbed } = require('discord.js');
const Booru = require('booru')

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.NSFW)
			.setTitle('Booru')
			.setImage('https://cdn.bulbagarden.net/upload/thumb/2/23/471Glaceon.png/250px-471Glaceon.png')
		).catch((error) => console.log);
	}
};
