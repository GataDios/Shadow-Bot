let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'Cortesiadeladmin/cortesíadeladmin1.mp3', '', 'xd', m)
}
handler.command = /^(cortesíadeladmin1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
