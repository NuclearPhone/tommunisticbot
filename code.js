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
	console.log("you gay fo readin' this");
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
	if (message.author.bot /*&& message.channel.id != 416165432140234754*/) return;
	
	if (message.content.indexOf(config.prefix) !==0 && message.content.indexOf("yam" || "bean") < 0) return;

	//bean machine
	if (config.bannedusers.includes(message.author.id) == true ) {
		console.log('nerd got hecked' + message.author.id);
		return;	
	}
	//tokenize stuff
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	

	//actual code
	
	if (cmd == "ping")
	{
		message.channel.send("Pong!");
		console.log(message.content + " " + message.author.id);
		logfile();
	}
	else if (cmd == "help")
	{
		fs.readFile('./help.txt', (err, data) => {if (err) throw err;message.author.send('henol i guess\n' + data)});
	}
	//random tommunism selector
	else if (cmd == "tommunism")
	{
		var i = Math.floor(Math.random() * 9) + 1;
		message.channel.send({files: [{attachment: config.imagefolder + i + '.png'}]})
		console.log(message.content + " " + message.author.id);
		logfile();
	}
	//change presence
	else if (cmd == "presence" && config.privilegedusers.includes(message.author.id) == true)
	{	
		client.user.setPresence({game: { name: ' ' + args.join(" ")}, status: 'online' });
		message.channel.send("Presence has been changed to: " + args.join(" "));
		console.log(message.content + " " + args + "    " + message.author.id);
		logfile();
	}
	else if (cmd == "presence" && config.privilegedusers.includes(message.author.id) == false)
	{
		message.channel.send("fRIIICK fRiCK oFF! FRIcK OfF!");i
		console.log(message.author.id);
		console.log("someone got fricked  " + message.author.id);
		logfile("got fricced");
	}
	//succ command
	else if (cmd == "succ")
	{
		message.channel.send({files: [{attachment: config.succimg}]});
		console.log(message.content + " " + message.author.id);
		logfile();
	}
	// slurp damn thats a good margarita
	else if (cmd == "slurp")
	{
		message.channel.send({files:[{attachment: config.slurp}]});
		console.log("damn thats a good margarita  " + message.author.id);
		logfile("slurped a good margarita" + message.author.id);
	}
	//displays git link
	else if (cmd == "git")
	{
		message.channel.send("https://gitlab.com/NuclearPhone/tommunisticbot");
		console.log("someone requested a git " + message.author.id);
		logfile();
	}
	else if (message.content.includes("yam"))
	{
		message.channel.send("yam");
	}
	else if (message.content.includes("bean"))
	{
		message.channel.send("bean");
	}
	//i hate you all so im making this part impossible to read
	else if(cmd=="dong"){message.channel.send({files:[{attachment:config.dong}]});
		console.log("donger "+message.author.id);logfile();}
	//change actual username
	else if (cmd=="CHANGENAME"&& config.ultimateowner.indexOf(message.author.id) < 0)
	{
		
	}
});

client.login(config.token);
