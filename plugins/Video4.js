let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Video4.mp4', '', '😏🔥', m)
}
handler.command = /^(video4)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
