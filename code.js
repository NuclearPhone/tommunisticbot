//haha yes tommunistic bot
//nobody will see this
//why do i write this stuff
//also this is made by redshirtcult haha ok

//setting up constants
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

//echos into console when ready

client.on("ready", () => 
{
	console.log("Tommunism Bot Is up and Running");
});

// actual code for responses

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
		console.log("I have sent a message:   " + message.content + message.author.username);
	}
});

client.login(config.token);
