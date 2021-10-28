let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Te amo.mp3', '', 'xd', m)
}
handler.command = /^(Teamo)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
