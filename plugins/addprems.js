const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verivikasi !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*✅ Listo, te haz agregado correctamente ✅*\n\n*Numero:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expira en:* 30 Dias\n\n*Gracias por agregarte a usuario _PREMIUM_!*`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = false
handler.private = true

module.exports = handler
