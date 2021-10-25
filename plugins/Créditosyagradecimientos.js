let handler = async m => m.reply(`
    *_The Shadow Brokers - Bot_*
    
Base: https://github.com/BochilGaming/games-wabot

GitHub editada: https://github.com/TheShadowBrokers1/games-wabot

Créditos del diseño del menu: 💮Oreki-san💮
Numero: +51 936 366 761
Link directo: https://api.whatsapp.com/send?phone=51936366761_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['creditosyagradecimientos']
handler.tags = ['info']
handler.command = /^creditosyagradecimientos$/i

module.exports = handler
