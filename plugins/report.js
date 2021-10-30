const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Ingrese un reporte', m)
    if (text > 300) return conn.reply(m.chat, 'Lo siento, el texto es demasiado largo, máximo 300 caracteres', m)
    var nomor = m.sender
    const teks1 = `*[REPORTE]*\nNumero: wa.me/${nomor.split("@s.whatsapp.net")[0]}\nMensaje: ${text}`
    conn.sendMessage('19525220880@s.whatsapp.net','5219996125657@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '*_✔️ El Problema se ha informado al propietario del Bot ✔️_*\n\n*_Si el Reporte es falso o "broma" puede llegar a ser bloqueado del uso del Bot_*', m)
}
handler.help = ['bug <reporte>', 'report <reporte>']
handler.tags = ['info']
handler.command = /^(bug|report)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
