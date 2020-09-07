const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "-"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("-help", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

}
)

// THIS IS THE (-help) COMMAND

bot.on('message', async message => {
	if (message.content === "-help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#ff00c3')
		.setTitle('COMMANDS')
		.setAuthor('Wampus', 'https://media.discordapp.net/attachments/749691775202885645/750481391413624862/tenor.png?width=535&height=401')
		.setDescription('``This command is currently unavailable!``')
		.setThumbnail('https://media.discordapp.net/attachments/749691775202885645/750481391413624862/tenor.png?width=535&height=401')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "-Help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#ff00c3')
		.setTitle('ERROR')
		.setAuthor('Wampus', 'https://media.discordapp.net/attachments/749691775202885645/750481391413624862/tenor.png?width=535&height=401')
		.setDescription('``Try using lower cases!``')
		.setThumbnail('https://media.discordapp.net/attachments/749691775202885645/750481391413624862/tenor.png?width=535&height=401')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})
// THIS IS THE (-changelogs} COMMAND

bot.on('message', message => {
	if (message.content === '-changelogs') {
		message.channel.send('__**CHANGE LOGS:**__');
        message.channel.send('CHANGED COMMAND (-help)');
	}
});

// THIS IS THE (-DM) COMMAND

bot.on('message', message => {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let com = command.toLowerCase();
    let args = message.content.slice(prefix.length).split(" ");

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (com === `${prefix}dm`) {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`You don't have permission to use this command.`); 
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[1]);
        if (!user)
            return message.channel.send(
                `You did not mention a user`
            );
        if (!args.slice(2).join(" "))
            return message.channel.send("You did not specify your message");
        user.user
            .send(args.slice(1).join(" "))
            .catch(() => message.channel.send("That user could not be DMed!"))
            .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    }
})

bot.login(process.env.token);
