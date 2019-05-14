//agalkaBot!!!

const config = require('./config.js');
const TelegramBot = require('node-telegram-bot-api');

var jsonSql = require('json-sql')();

const token = config.telegramToken;
const token2 = config.telegramToken2;
var bot = new TelegramBot(token, {polling: true});
var bot2 = new TelegramBot(token2, {polling: true});

var mysql = require('mysql').createConnection(config.sqlOptions);
//mysql.connect(function(err) {
// if (err) throw err;
// console.log("mysql Connected!");
// });

// Get random value between a range
function rand(high, low = 0) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}


bot.onText(/\/xinga/, (msg, match) => {
  let chatId = msg.chat.id;
  let resp = config.xinga[rand(config.xinga.length - 1)];
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/selfie/, (msg, match) => {
  let chatId = msg.chat.id;
  let resp = config.selfie[rand(config.selfie.length - 1)];
  bot.sendPhoto(chatId, resp);
});

bot.onText(/\/previsao/, (msg, match) => {
  let chatId = msg.chat.id;
  let resp = config.previsao[rand(config.previsao.length - 1)];
  if(resp == 51){
    votosValidos = rand(100,51);
    resp = votosValidos + ' dos votos válidos vão para o Haddad e ' + (100 - votosValidos) + ' vão para o Bolsonaro nesse segundo turno';
  }
  bot.sendMessage(chatId, resp);
});

bot2.onText(/\/fala/, (msg, match) => {
  let chatId = msg.chat.id;
  let resp = 'funfando';
  bot.sendMessage(chatId, resp);
});
