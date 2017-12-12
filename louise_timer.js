const Discord = require('discord.js');
const http = require("http");
const https = require("https");
const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
  var dateRaw = new Date();
  var dateString = dateRaw.toLocaleString();
  console.log(dateString);
  console.log('TIMER de Louise lancé :louise:');
  //client.user.setPresence({ status: 'online', game: { name: "servir l'armée", type: 0 } });

  var twitter = "N'oubliez pas de me suivre sur Twitter ! <http://twitter.com/pixelouise> <:louise:382587451488600065>";

  setInterval(function(){
    client.guilds.get("334111297740472322").channels.get("334111297740472322").send(twitter);
    console.log(dateString + twitter);
  }, 1000*60*60*6);

  setTimeout(function(){
    setInterval(function(){
      //client.guilds.get("334111297740472322").channels.get("334111297740472322").send(reseauxSociaux);
    }, 1000*60*60*6)
  }, 1000*60)

});

client.login('Mzc1ODA4Mjk2MTcyNjUwNTEw.DN1ORQ.oH1AuGaf3Q_D_K3bU5ifEM9j0YU');
