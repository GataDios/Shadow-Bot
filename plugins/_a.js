let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/a.mp3', '', 'xd', m)
}
handler.command = /^(a)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
