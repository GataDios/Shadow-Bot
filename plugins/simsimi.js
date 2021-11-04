let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Cuál es el texto?'
  let res = await fetch("https://api.simsimi.net/v2/?text=" + encodeURIComponent(text) + "&lang=es")
  let json = await res.json()
  if (json.status !== true) throw json
  m.reply(json.result.jawab)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' [teks]')
handler.tags = ['General']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

