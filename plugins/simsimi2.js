let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'No hay texto', m)

	axios.get(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${text}`).then ((res) => {
    let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	}).catch(() => {
 m.reply('Simi no lo entiende ¿es un idioma diferente al español?')
   })
}
handler.help = ['simi2','s2'].map(v => v + ' <chat>')
handler.tags = ['simi']
handler.command = /^(simi2|s2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
