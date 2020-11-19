module.exports = {
	names: ['say'],
	usage: 'say [text]',
	description: 'Make Labrys say something.',
	execute: (message, args) => {
		var senTence = ''
		for (let i = 0; i < args.length; i++)
		{
			senTence.concat(args[i])
			senTence += ' '
			if(args[i] = args[args.length - 1])
			{
				message.delete()
				return message.channel.send(senTence)
			}
		}
			
	}
};