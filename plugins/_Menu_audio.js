let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Menu audio.mp3', '', 'xd', + text = '#help' m)
}
handler.command = /^(menu5)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
