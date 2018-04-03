const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("config.json");


bot.on("ready", () => {
  console.log("I am at your fucking service");
});

bot.on("message", async msg => {

});


bot.login(config.token);