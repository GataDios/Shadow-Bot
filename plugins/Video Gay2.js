let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Gay2.mp4', '', '😏🔥', m)
}
handler.command = /^(videogay2)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
