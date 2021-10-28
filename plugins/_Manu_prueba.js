let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Menu audio.mp3', '', 'xd', m),
     }
  { 
let handler = async m => m.reply(`
#help
`.trim()) // Tambah sendiri kalo mau 
}

handler.command = /^(menu)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
