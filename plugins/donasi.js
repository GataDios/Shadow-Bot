let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085713964963]
│ • Gopay [085713964963]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281390658325
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['reglasdelbot']
handler.tags = ['info']
handler.command = /^reglasdelbot$/i

module.exports = handler
