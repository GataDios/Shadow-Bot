let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Ingrese un texto'
  m.reply('aguarde toy procesando')
 if (args.length < 1) return reply(`por favor use bien el comando ${prefix}text3d NeKosmic`)
teks = `${body.slice(8)}`
if (teks.length > 10) return teslagod.sendMessage(from, '[ ! ] 10 digitos maximo', text, {quoted: mek})
buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
teslagod.sendMessage(from, buff, image, {quoted: mek}) }

handler.help = ['text3d'].map(v => v + ' <teks>')
handler.tags = ['image']
handler.command = /^(text3d)$/i
handler.limit = false
handler.register = false

module.exports = handler
