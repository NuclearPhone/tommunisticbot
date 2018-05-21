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

// actual code for response

client.on("message", (message) =>
{

	//logging
	function logfile(x)
	{
		fs.appendFile("./log.log", message.content + " " + message.author.id + " " + x + '\n', function(err) {
			if(err) {
				return console.log(err);
			}
		});
	}


	//removes botception
	if (message.author.bot) return;
	
	if (message.content.indexOf(config.prefix) !==0) return;

	//bean machine
	if (config.bannedusers.includes(message.author.id) == true ) {
		consle.log('nerd got hecked' + message.author.id);
		return;	
	}
	//tokenize stuff
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	//actual code
	
	if (message.content.startsWith(config.prefix + "ping"))
	{
		message.channel.send("Pong!");
		console.log(message.content + " " + message.author.id);
		logfile();
	}
	else if (message.content.startsWith(config.prefix + "help"))
	{
		fs.readFile('./help.txt', (err, data) => {if (err) throw err;message.author.send('henol i guess\n' + data)});
	}
	//random tommunism selector
	else if (message.content.startsWith(config.prefix + "tommunism"))
	{
		var i = Math.floor(Math.random() * 9) + 1;
		message.channel.send({files: [{attachment: 'tommunism/' + i + '.png'}]})
		console.log(message.content + " " + message.author.id);
		logfile();
	}
	//change presence
	else if (message.content.startsWith(config.prefix + "presence") && config.privilegedusers.includes(message.author.id) == true)
	{	
		client.user.setPresence({game: { name: ' ' + args.join(" ")}, status: 'online' });
		message.channel.send("Presence has been changed to: " + args.join(" "));
		console.log(message.content + " " + args + "    " + message.author.id);
		logfile();
	}
	else if (message.content.startsWith(config.prefix + "presence") && config.privilegedusers.includes(message.author.id) == false)
	{
		message.channel.send("fRIIICK fRiCK oFF! FRIcK OfF!");i
		console.log(message.author.id);
		console.log("someone got fricked  " + message.author.id);
		logfile("got fricced");
	}
	//succ command
	else if (message.content.startsWith(config.prefix + "succ"))
	{
		message.channel.send({files: [{attachment: 'tommunism/succ01.png'}]});
		console.log(message.content + " " + message.author.id);
		logfile();
	}
	// slurp damn thats a good margarita
	else if (message.content.startsWith(config.prefix + "slurp"))
	{
		message.channel.send({files:[{attachment:'tommunism/damnthatsagoodmargarita.png'}]});
		console.log("damn thats a good margarita  " + message.author.id);
		logfile();
	}
	//displays git link
	else if (message.content.startsWith(config.prefix + "git"))
	{
		message.channel.send("https://github.com/nuclearphone/tommunisticbot");
		console.log("someone requested a git " + message.author.id);
		logfile();
	}
});

client.login(config.token);
