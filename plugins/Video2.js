let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Espera2.mp3', '', 'xd', m)
       conn.sendFile(m.chat, 'media/Musica de espera.mp3', '', 'xd', m)
       conn.sendFile(m.chat, 'media/video2.mp4', '', '😏🔥', m)
}
handler.command = /^(video2)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
