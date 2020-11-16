const { MessageEmbed } = require('discord.js');
const Booru = require('booru')

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})

			return console.log(posts[0].fileUrl)
		}	
		var imgLink = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Woman_Saying_Hello_Emoji_grande.png?v=1571606062'
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.NSFW)
			.setTitle('Booru' + imgLink)
			.setImage(imgLink)
		).catch((error) => console.log)
	}
};
