let handler = async m => m.reply(`
#help
`.trim()) // Tambah sendiri kalo mau
handler.help = ['menu']
handler.tags = ['info']
handler.command = /^menu$/i

module.exports = handler
