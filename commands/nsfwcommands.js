const { MessageEmbed } = require('discord.js');
const Booru = require('booru')
var nsfwTags = ['ass', 'boobs', 'tits', 'pussy', 'thighs', 'females']

module.exports = {
	names: ['ass', 'boobs', 'tits', 'pussy', 'thighs', 'females'],
	usage: 'ass',
	description: 'Generates a picture relating to the command.',
	execute: (message) => {
		var searchTerm = ['ass', 'boobs', 'tits', 'pussy', 'thighs', 'woman']
		var searchNum = 0
		if(message == '!ass')
		{
			searchNum = 0
		}
		else if (message == '!boobs')
		{
			searchNum = 1
		}
		else if (message == '!tits')
		{
			searchNum = 2
		}
		else if (message == '!pussy')
		{
			searchNum = 3
		}
		else if (message == '!thighs')
		{
			searchNum = 4
		}
		else if (message == '!females')
		{
			searchNum = 5
		}
		if (message.channel.nsfw)
		{
		booruSearch('realbooru', searchTerm[searchNum])
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
				.addField("You don't hafta do this, ya know.", "Come back again, okay? [Not an NSFW channel.]")
			).catch((error) => console.log)
		}		
		}
};
