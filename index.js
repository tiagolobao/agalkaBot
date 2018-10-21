//agalkaBot!!!

const config = require('./config.js');
const TelegramBot = require('node-telegram-bot-api');

var jsonSql = require('json-sql')();

const token = config.telegramToken;
var bot = new TelegramBot(token, {polling: true});

var mysql = require('mysql').createConnection(config.sqlOptions);
//mysql.connect(function(err) {
//  if (err) throw err;
//  console.log("mysql Connected!");
//});


// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  //bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Cara... eu sou um bot burrão ainda! Não sei o que te responder kkk');
});
