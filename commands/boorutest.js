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
			Booru.search('safebooru', ['glaceon'], { limit: 3, random: true }).then(posts =>
		{
			for (let post of posts)
				.setImage(post.fileUrl)
		})		
		).catch((error) => console.log);
		
	}
};
