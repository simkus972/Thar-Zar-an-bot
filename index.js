
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('TharZarBot aktyvuotas 🌟'));
bot.command('ping', (ctx) => ctx.reply('pong'));

bot.launch();
