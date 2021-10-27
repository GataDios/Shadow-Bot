let limit = 10
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Ingrese el texto que desee', m)
if (text > 10) return conn.reply(m.chat, '*El texto es demasiado largo!*\n_Máximo 10 letras!_', m)
let link = 'https://api.zeks.xyz/api/crismes?text=' + text + '&apikey=apivinz'
conn.sendFile(m.chat, link, 'BOTSTYLE.png', '_BOTSTYLE_', m)
}
handler.help = ['crismes <text>']
handler.tags = ['creator']
handler.command = /^(3d)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null

handler.limit = true
module.exports = handler
