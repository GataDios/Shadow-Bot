let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/baneado.mp3', '', 'xd', m)
}
handler.command = /^(baneadomp3)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
