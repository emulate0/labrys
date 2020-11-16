const { MessageEmbed } = require('discord.js');
const Booru = require('booru')

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {
		booruSearch('safebooru', ['cat'])
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})

			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.NSFW)
				.setTitle('Boorutest')
				.setImage(posts[0].fileUrl)
		).catch((error) => console.log)
		}
	}
};
