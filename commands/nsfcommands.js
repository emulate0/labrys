const { MessageEmbed } = require('discord.js');
const Booru = require('booru')
var nsfwTags = ['ass', 'boobs', 'tits', 'pussy', 'thighs', 'females']

module.exports = {
	names: ['ass', 'boobs', 'tits', 'pussy', 'thighs', 'females'],
	usage: 'ass',
	description: 'Generates a picture relating to the command.',
	execute: (message) => {
		var searchTag = [message]
		searchTag.substring(1)
		console.log(searchTag)
		if (message.channel.nsfw)
		{
		booruSearch('realbooru', searchTag[0])
		async function booruSearch(site, tags, limit = 1, random = true) {
			const posts = await Booru.search(site, tags, {limit, random})
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.NSFW)
				.setImage(posts[0].fileUrl)
				.addField('NSFW', posts[0].postView)
			).catch((error) => console.log)
			}			
		}
		else
		{
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.SUCCESS)
				.addField("You don't hafta do this, ya know.", "It seemed like we'd make a pretty good team! Come back again, okay? [Not an NSFW channel.]")
			).catch((error) => console.log)
		}		
		}
};
