let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/admin.mp3', '', 'xd', m)
}
handler.command = /^(admin)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
