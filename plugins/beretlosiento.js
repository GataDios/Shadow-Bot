let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/beretlosiento.mp4', '', 'xd', m)
}
handler.command = /^(beretlosiento)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
