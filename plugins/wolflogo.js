let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Espera, procesando...*')
  let res = `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'wolflogo.jpg', `Aqui tiene su logo`, m, false)
}
handler.help = ['wolflogo'].map(v => v + ' <text|text>')
handler.tags = ['sticker']
handler.command = /^(wolflogo)$/i
handler.group = false
handler.private = false 

module.exports = handler
