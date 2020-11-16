const { MessageEmbed } = require('discord.js');
const Booru = require('booru')

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {	
		var imgLink = ''
		Booru.search('safebooru', ['glaceon'], { limit: 1, random: true })
			.then(posts => {
				for (let post of posts)
					imgLink = post.fileUrl
				})
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.NSFW)
			.setTitle('Booru')
			.setImage(imgLink)
		).catch((error) => console.log)
	}
};
