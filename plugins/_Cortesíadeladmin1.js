let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/cortesíadeladmin1.mp4', '', 'xd', m)
}
handler.command = /^(cortesíadeladmin1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
