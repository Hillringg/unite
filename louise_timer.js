const Discord = require('discord.js');
const http = require("http");
const https = require("https");
const client = new Discord.Client();
const settings = require('../settings.json')

client.on('ready', () => {
  var dateRaw = new Date();
  var dateString = dateRaw.toLocaleString();
  console.log(dateString);
  console.log('TIMER de Louise lancé :louise:');
  //client.user.setPresence({ status: 'online', game: { name: "servir l'armée", type: 0 } });

  var twitter = "N'oubliez pas de me suivre sur Twitter ! <http://twitter.com/pixelouise> <:louise:382587451488600065>";
  var pixelfranceGeneral = client.channels.get("334111297740472322");

  function logAnnonce (annonce) {
    var dateRaw = new Date();
    var dateString = dateRaw.toLocaleString();
    console.log(dateString);
    console.log(annonce);
  }

  function sendAnnonce (annonce) {
    //console.log("sendAnnonce");
    const functionAsync = async () => {
      //console.log("async");
      try {
        //console.log("try");

        const messagesFetched = await pixelfranceGeneral.fetchMessages(1);
        const dernierMessage = messagesFetched.first();
        //console.log(dernierMessage);
        if (dernierMessage.author.bot) return 0;

        pixelfranceGeneral.send(annonce);
        logAnnonce(annonce);

      } catch (e) {

      } finally {

      }
    }
    functionAsync();
  }

  var delai = 6*60*60*1000

  setInterval(sendAnnonce, delai, twitter);

  setTimeout(function(){
    //setInterval(sendAnnonce, delai, annonce);
  }, 1*60*60*1000);

});

client.login(settings.louise);
