const mineflayer =  require('mineflayer')

const bot = mineflayer.createBot({
	host: 'tom00s.aternos.me',
	port: 21740
})

const welcome = () => {
	bot.chat('Bruhhh')
}
bot.once('spawn', welcome)

bot.chatAddPattern(
  /(helo|hello|Hello)/,
  'hello',
  'Someone says hello'
)

const hi = () => {
  bot.chat('Hi!')
}

bot.on('hello', hi)