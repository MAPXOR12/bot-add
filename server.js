const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");
const prefix = "#";
const { clinet, MessageEmbed } = require("discord.js");
//////////


client.on("ready", () => {
    function randomStatus() {
        let status = [`Codes`]
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: "WATCHING"});    
    }; setInterval(randomStatus, 2000)
})

///////////////

///////////////
client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "global-chats"
  );
  let user = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    
    .setColor("")
    .setThumbnail(user)
    .setTimestamp()
    .setTitle("Welcome to Developer Support!")
    .setURL("https://discord.gg/Yqp7DeypPJ")
    .setDescription(`
Hello ${member}, welcome, about the server, this server is created to make developers benefit greatly and we use code and projects for you every day,
and for bot developers who can add your bots to the server that you just have to vote for and add your bot.
`)
    .setImage(
      ""
    )
    
  channel.send(joinembed);
});

/////
client.on('message',async message => {

  if(message.content.startsWith(prefix + "embed")) {

    const saymsg = message.content.slice(Number(prefix.length) + 5)
    const embed = new Discord.MessageEmbed()
    .setColor("")
    .setDescription(saymsg)

    message.delete({timeout: 300})
    message.channel.send(embed)
  }
})
/////
client.on('message',async message => {
  
  if(message.content.startsWith(prefix + "addbot")) {
    if (message.channel.id !== '862825748725628928') return message.channel.send(`You cannot use bot commands outside of chat commands <#862825748725628928>`)


    let channel = message.guild.channels.cache.find((x) => (x.name === "guild-bot" || x.name === "guild-bot"))
  let channells = message.guild.channels.cache.find((x) => (x.name === "guild-bot" || x.name === "guild-bot"))
        
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("Usage: #addbot <ID-Bot>")
    }
    let embed = new Discord.MessageEmbed()
    
    .setColor("")
    .addField("Hey", `${message.author.tag}`)
    .addField("Bot Name", `<@${args}>`)
    .addField("Invite Link", `[Click Here](https://discord.com/api/oauth2/authorize?client_id=${args}&permissions=0&scope=bot)`)

    message.channel.send(embed)
    message.channells.send(embed)
   
    


  
  }
})

/////
const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); 
});
/////
client.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      channel => channel.name === "invite-status" 
    );
    channel.send(
      `<@${member.id}>, has been invited by ${inviter.tag} and has now ${invite.uses} invites.`
    );
  });
});
/////
client.on('message', async message => {
            if(message.content.includes('@everyone')){
                if(message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('This command only for servers');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()

            .addField(`You Have Been Muted` , `Reason: Type everyone`)
            .setColor("")
            message.channel.send(embed500)
     message.author.send('You´ve been mute by everyone beating');
 
 
    }
})
/////
client.login("ODcwNzk0MzkzMDg5NjIyMDc3.YQR8eQ.e7c6Qw08jC4KYjC_jGGCRufYaPs");
