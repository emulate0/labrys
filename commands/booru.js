const { MessageEmbed } = require('discord.js');
const Booru = require('booru')
var sfw = ['safebooru']
var nsfw = ['hypnohub', 'danbooru', 'konac', 'yandere', 'gelbooru', 'rule34', 'xbooru', 'paheal', 'konan']

module.exports = {
	names: ['b'],
	usage: 'b [tag], [tag]...',
	description: 'Generates an image from a booru.',
	execute: (message, args) => {
		if (message.channel.nsfw)
		{
		var randWebNSFW = Math.floor(Math.random() * nsfw.length)
		booruSearch(nsfw[randWebNSFW], args[0])
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.NSFW)
				.setImage(posts[0].fileUrl)
				.addField(site, posts[0].postView)
			).catch((error) => console.log)
			}			
		}
		else
		{
		var randWebSFW = Math.floor(Math.random() * sfw.length)
		booruSearch(sfw[randWebSFW], args[0])
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.SUCCESS)
				.setImage(posts[0].fileUrl)
				.addField(site, posts[0].postView)
			).catch((error) => console.log)
			}		
		}
		
	}
};
