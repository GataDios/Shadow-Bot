let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Gay1.mp4', '', '😏🔥', m)
}
handler.command = /^(videogay1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
