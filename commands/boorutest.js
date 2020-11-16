const { MessageEmbed } = require('discord.js');
const Booru = require('booru')

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {
		const booruUrl = '';
		
		return message.channel.send(new MessageEmbed()
			.setColor(message.client.colors.NSFW)
			.setTitle('Booru')
			.addField('Client', `${new Date() - message.createdAt}ms`, true)
			.addField('API', `${Math.round(message.client.ws.ping)}ms`, true)
		).catch((error) => console.log);
		
		Booru.search('safebooru', 'glaceon', { limit: 1, random: true })
  .then(posts => {
    if (posts.length === 0) {
      console.log('No images found.')
    }

    for (let post of posts) {
	  booruUrl = post.fileUrl.toString
      console.log(post.fileUrl)
    }
  });
		
		return message.channel.send(new messageEmbed()
			.setColor(message.client.colors.NSFW)
			.setTitle('Booru')
			.setImage(booruUrl)
	}
};
