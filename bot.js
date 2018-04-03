const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("FailedBot ready");
});

bot.login(process.env.token);