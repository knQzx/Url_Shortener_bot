// This bot knows how to shorten links, just send them to the bot and it will issue a new one.

// if you want to run this app, read the README.md

const { Telegraf } = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const { exec } = require('child_process');


const bot = new Telegraf("TOKEN")

bot.command('start', (ctx) => {
  ctx.reply("Send me a URL and I'll send you a short URL");
});

bot.on('text', async (ctx) => {
  //
  const { exec } = require('child_process');
  exec(`python3 url.py ${ctx.message.text}`,  async (error, stdout, stderr) => {
    if (error) {
       console.error(`exec error: ${error}`);
       return;
    }
    await ctx.reply(stdout);
  });
});

bot.help((ctx) => ctx.reply("Send me a URL and I'll send you a short URL"));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
