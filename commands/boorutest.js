const { MessageEmbed } = require('discord.js');
const Booru = require('booru')

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {	
		var imgLink = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Woman_Saying_Hello_Emoji_grande.png?v=1571606062'
		const posts = await Booru.search('safebooru', ['cat'], {limit: 3, random: true})
			console.log(posts[0].fileUrl)
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.NSFW)
			.setTitle('Booru' + imgLink)
			.setImage(imgLink)
		).catch((error) => console.log)
	}
};
