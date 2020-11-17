const { MessageEmbed } = require('discord.js');
const grabber = require("image-grabberjs");
const randomPuppy = require('random-puppy');

module.exports = {
	names: ['r', 'reddit'],
	usage: 'r [subreddit]',
	description: 'Generates a random image from a subreddit.',
	execute: (message, args) => {
		var subreddit = args[0]
		var imgUrl = ''

		if (message.channel.nsfw)
		{
			async function getImages() {
				let fetchedImage = await grabber(subreddit)
				imgUrl = fetchedImage
				console.log(imgUrl)
				return message.channel.send(new MessageEmbed()
					.setColor(message.client.colors.NSFW)
					.setTitle('Subreddit: ' + args[0])
					.setImage(imgUrl)	
				).catch((error) => console.log);		
			}
			getImages()
		}
		else
		{
			randomPuppy(subreddit)
				.then(url => {
					imgUrl = url
					console.log(imgUrl)
					return message.channel.send(new MessageEmbed()
						.setColor(message.client.colors.SUCCESS)
						.setTitle('Subreddit: ' + args[0])
						.setImage(imgUrl)
					).catch((error) => console.log);			
				})
		}
	}
};