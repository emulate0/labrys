const { MessageEmbed } = require('discord.js');

module.exports = {
	names: ['boorutest'],
	usage: 'boorutest [name]',
	description: 'Testing out the Booru.',
	execute: (message, args) => {
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
      message.send(post.fileUrl)
    }
  })
  .catch(err => {
    if (err instanceof BooruError) {
      // It's a custom error thrown by the package
      // Typically results from errors the boorus returns, eg. "too many tags"
      console.error(err)
    } else {
      // This means something pretty bad happened
      console.error(err)
    }
  })
	}
};
