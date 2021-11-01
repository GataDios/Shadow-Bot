let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let oxxo = fs.readFileSync('/media/Oxxo.mp3') 
conn.sendMessage(m.chat, oxxo, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = ['oxxx'] 
handler.tags = ['audio'] 
handler.command = /^(oxxo)$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
