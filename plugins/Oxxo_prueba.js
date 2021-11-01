let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./media/Oxxo.mp3') 
conn.sendMessage(m.chat, Oxxo, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = ['Prueba'] 
handler.tags = ['audio'] 
handler.command = /^(Prueba)$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
