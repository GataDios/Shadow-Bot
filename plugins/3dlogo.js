let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('aguarde toy procesando')
 if (args.length < 1) return reply(`por favor use bien el comando ${prefix}text3d NeKosmic`)
teks = `${body.slice(8)}`
if (teks.length > 10) return teslagod.sendMessage(from, '[ ! ] 10 digitos maximo', text, {quoted: mek})
buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
teslagod.sendMessage(from, buff, image, {quoted: mek})
			     	break
handler.help = ['text'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(text)$/i
handler.limit = false
handler.register = false

module.exports = handler
