module.exports = {
	names: ['say'],
	usage: 'say [text]',
	description: 'Make Labrys say something.',
	execute: (message, args) => {
		var senTence = ''
		var sizeOf = args.length
		for (let i = 0; i < sizeOf; i++)
		{
			senTence += args[i] + ' '
			console.log(args[i])
			if(i = sizeOf)
			{
				console.log(sizeOf)
				message.delete()
				return message.channel.send(senTence)
			}
		}
			
	}
};