let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/videohentai1.mp4', '', '😏🔥', m)
}
handler.command = /^(videoh1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
