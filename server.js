const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");
const prefix = "";
const { clinet, MessageEmbed } = require("discord.js");
//////////


client.on("ready", () => {
    function randomStatus() {
        let status = [`Botlist`]
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: "WATCHING"});    
    }; setInterval(randomStatus, 2000)
})
/////
client.on('message',async message => {

  if(message.content.startsWith(prefix + "embed")) {

    const saymsg = message.content.slice(Number(prefix.length) + 5)
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(saymsg)

    message.delete({timeout: 300})
    message.channel.send(embed)
  }
})
/////
client.on('message',async message => {
  
  if(message.content.startsWith(prefix + "addbot")) {
    if (message.channel.id !== 'ID CHANNEL') return message.channel.send(`You cannot use robot commands outside of chat commands`)


    let channel = message.guild.channels.cache.find((x) => (x.name === "guild-bot" || x.name === "guild-bot"))
  let channells = message.guild.channels.cache.find((x) => (x.name === "guild-bot" || x.name === "guild-bot"))
        
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("addbot idbot")
    }
    let embed = new Discord.MessageEmbed()
    
    .setColor("")
    .addField("None", `${message.author.tag}`)
    .addField("None", `<@${args}>`)
    .addField("None", `[INVITE LINK](https://discord.com/api/oauth2/authorize?client_id=${args}&permissions=0&scope=bot)`)

    message.channel.send(embed)
    message.channells.send(embed)
   
    


  
  }
})
/////
client.login("");
