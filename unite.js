const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
const prefix = "!";

clbot.configure({botapi: "CC5ehFJkHVDXtn5xWK2FdJ1YfqA"});


  



///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////

// MESSAGE De Bienvenue //




client.on('guildMemberAdd', member => {
  let channel  = member.guild.channels.find('name', 'logs');
  //let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(`${member.user.avatarURL}`)
      .addField('name : ', `${member}`)
      .addField(' Welcome!', `Welcome to the server, ${member}`)
      .addField(':id: | User :', "**[" + `${member.id}` + "]**")
      .addField('Is the member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true)
      .setFooter(`${member.guild.name}`)
      .setTimestamp()

      channel.send(embed);
});

client.on('guildMemberAdd', member => {

  console.log(`${member}`, "has joined" + `$member.guild.name`)
});




client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;

  let weeb = new Discord.RichEmbed()
    .setAuthor("Kudos Bot", "https://i.imgur.com/bIqUl11.png")
//    .setAuthor(member.guild.get("481104131080192010").avatarURL)
//    .setAuthor(client.users.get("481104131080192010").avatarURL)
//  .setAuthor(member.user.username, member.user.avatarURL)
  .setTitle('Greetings adventurers!')
  .setColor('#F5DEA4')
  .setThumbnail(`${member.user.avatarURL}`)
  .setDescription(`Welcome to the official Shaiya Kudos Discord server, ${member.user.username}!
Please make sure to read #rules-and-info.
If you have any questions do not hesitate to use the #support channel.`)
  .setFooter('Shaiya Kudos')
  .setTimestamp()

channel.send(weeb);

});


// Auto role join //

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Member');
  member.addRole(role);
});






///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////

client.on('message', async message => {
  if (message.author.bot) return;

///////////////////////////////////////////

// Avatar commande //

let TaggedUser = message.mentions.users.first();

if (message.content === prefix + "avatar"){
  var avatar_embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Avatar')
    .setColor('#2ECC71')
    .setImage(message.author.avatarURL)
    message.channel.sendEmbed(avatar_embed);
 return;
}


if (message.content.includes('!avatar')) {
  var avatar2_embed = new Discord.RichEmbed()
    .setAuthor(TaggedUser.username, TaggedUser.avatarURL)
    .setTitle('Avatar')
    .setColor('#2ECC71')
    .setImage(TaggedUser.avatarURL)
    message.channel.sendEmbed(avatar2_embed);

}

// CLEVERBOT //

if (message.content.includes("376145584970792960")) {
  clbot.write(message.content, (response) => {
    message.channel.startTyping();
    setTimeout(() => {
      message.reply(response.output).catch(console.error);
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
  });
}

if (message.author.bot) return;

let msg = message.content.toUpperCase();
let cont = message.content.slice(prefix.length).split(" ");
let sender = message.author;
let args = cont.slice(1);

if (msg.startsWith(prefix + 'PURGE')) {
    async function purge() {
        message.delete();
   
      if (!message.member.roles.find("name", "Game Master")) {
        message.chanel.send('You need the permission to perform this action.'); 
        return;
      }


      if (isNaN(args[0])) {

        message.channel.send('Please supply a valid amount of message to purge');
        
        return;
      }

      if (args[0] > 100) return message.channel.send('*Plesse supply a number less than 100*');

      const fetched = await message.channel.fetchMessages({limit: args[0]});
      console.log(fetched.size + ' messages found, deleting...');

      message.channel.bulkDelete(fetched)
   //    .then( message => message.channel.send(`**Successfully deleted \`${message.size}/${args[0]}\` messages**`).then( msg => msg.delete({timeout: 1000})))
   //    .catch(error => message.channel.send(`Error ${error}`));

   }

  purge(); 


}

///////// AUTO ROLE COMMAND /////////


// AUTO ROLES //

if (message.channel.id === '605021735997276164') {
  message.delete();
}


if (message.content === "Join AoL") {
  message.reply('Your roles have been updated')
  .then(message => {
  message.delete(10000)
  })
  message.member.addRole('605016568581324810');
  message.delete();
}

if (message.content === "Leave AoL") {
  message.reply('Your roles have been updated')
  .then(message => {
  message.delete(10000)
  })
  message.member.removeRole('605016568581324810');
  message.delete();
}

if (message.content === "Join UoF") {
  message.reply('Your roles have been updated')
  .then(message => {
  message.delete(10000)
  })
  message.member.addRole('605016411370160145');
  message.delete();
}

if (message.content === "Leave UoF") {
  message.reply('Your roles have been updated')
  .then(message => {
  message.delete(10000)
  })
  message.member.removeRole('605016411370160145');
  message.delete();
}

// AUTO REACT //


if (message.channel.id === '602267275831017472') {
  message.react('👍');
 // message.react('👎');
 // message.react('🤷');
}

if (message.channel.id === '602267275831017472') {
  setTimeout (function(){
      message.react('👎');
  }, 1000);
  
}

if (message.channel.id === '602267275831017472') {
setTimeout (function(){
  message.react('🤷');
}, 2000);

}
 
if (message.content === prefix + droplist)
  

if(message.content.toLowerCase().includes('droplist') ){
    message.channel.sendMessage("https://shaiyakudos.com/guide/gameguide.php");

}
  

if(message.content.toLowerCase().includes('website') ){
    message.channel.sendMessage("https://shaiyakudos.com");

}



});
///////////////////////////////////////////////////////////////////////////////
client.login(process.env.BOT_TOKEN);
