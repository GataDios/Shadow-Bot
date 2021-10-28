let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Buenos días 2.mp4', '', 'xd', m)
}
handler.command = /^(buenosdias2)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
