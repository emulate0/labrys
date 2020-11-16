const { MessageEmbed } = require('discord.js');
const Booru = require('booru')
var sfw = ['e926.net', 'konan', 'safebooru', 'tbib']
var nsfw = ['e621', 'hypnohub', 'danbooru', 'konac', 'yandere', 'gelbooru', 'rule34', 'xbooru', 'paheal', 'derp', 'realbooru']

module.exports = {
	names: ['image'],
	usage: 'image [tag], [tag]...',
	description: 'Search an image and it will generate one from a booru.',
	execute: (message, args) => {
		//add random from sfw and nsfw
		//site, tags
		if (message.channel.nsfw)
		{
		var randWebNSFW = Math.floor(Math.random() * 11)
		booruSearch(nsfw[randWebNSFW], args[1])
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.NSFW)
				.setTitle('Boorutest')
				.setImage(posts[0].fileUrl)
			).catch((error) => console.log)
			}			
		}
		else
		{
		var randWebSFW = Math.floor(Math.random() * 4)
		console.log(sfw[randWebSFW])
		booruSearch(sfw[randWebSFW], args[1])
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.SUCCESS)
				.setTitle('Boorutest')
				.setImage(posts[0].fileUrl)
			).catch((error) => console.log)
			}		
		}
		
	}
};
