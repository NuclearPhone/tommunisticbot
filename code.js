//haha yes tommunistic bot
//nobody will see this
//why do i write this stuff
//also this is made by redshirtcult haha ok

//setting up constants
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


//vars
var fs = require('fs');


//echos into console when ready

client.on("ready", () => 
{
	console.log("Tommunism Bot Is up and Running");
});

// actual code for responses
//
client.on("message", (message) =>
{
	//removes botception
	if (message.author.bot) return;
	
	if (message.content.indexOf(config.prefix) !==0) return;
	
	//tokenize stuff
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	//actual code
	
	if (message.content.startsWith(config.prefix + "ping"))
	{
		message.channel.send("Pong!");
		console.log(message.content + " " + message.author.username);
	}
	else if (message.content.startsWith(config.prefix + "help"))
	{
		fs.readFile('./help.txt', (err, data) => {
			if (err) throw err;
			message.author.send('henol i guess\n' + data);
		});
	}
	//random tommunism selector
	else if (message.content.startsWith(config.prefix + "tommunism"))
	{
		var i = Math.floor(Math.random() * 9) + 1;
		message.channel.send({
			files: [{
				attachment: 'tommunism/' + i + '.png'
			}]
		})
		console.log(message.content + " " + message.author.username);
	}
	//change presence
	else if (message.content.startsWith(config.prefix + "presence"))
	{
		client.user.setPresence({game: { name: ' ' + args.join(" ")}, status: 'online' });
		message.channel.send("Presence has been changed to: " + args.join(" "));
		console.log(message.content + " " + args + "    " + message.author.username);
	}
	//test succ command
	else if (message.content.startsWith(config.prefix + "succ"))
	{
		message.channel.send("test");
		console.log(message.content + " " + message.author.username);
	}
	// henlp me 
});

client.login(config.token);
