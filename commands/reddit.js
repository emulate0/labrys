const { MessageEmbed } = require('discord.js');
const { meme } = require('memejs');
const { memeAsync } = require('memejs');
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
			meme(subreddit, function(err, data) {
            if (err) return console.error(err)
			return message.channel.send(new MessageEmbed()
				.setColor(message.client.colors.NSFW)
				.setTitle('Subreddit: ' + args[0])
				.setImage(data.url)
			).catch((error) => console.log);	
			}
			)
			
		}
		else
		{
			randomPuppy(subreddit)
				.then(url => {
					return message.channel.send(new MessageEmbed()
						.setColor(message.client.colors.SUCCESS)
						.setTitle('Subreddit: ' + args[0])
						.setImage(url)
					).catch((error) => console.log);			
				})
		}
	}
};