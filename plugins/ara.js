let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/Ara.mp3') 
conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = ['Ara'] 
handler.tags = ['audio'] 
handler.command = /^(Ara)$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = true 
handler.private = true

module.exports = handler
