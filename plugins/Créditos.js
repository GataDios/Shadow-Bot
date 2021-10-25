let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let str = `
    *_The Shadow Brokers - Bot_*
    
Base: https://github.com/BochilGaming/games-wabot

GitHub editada: https://github.com/TheShadowBrokers1/games-wabot

Créditos del diseño del menu: 💮Oreki-san💮
Numero: +51 936 366 761
Link directo: https://api.whatsapp.com/send?phone=51936366761_
    conn.reply(m.chat, str, m)
}
handler.help = ['creditosyagradecimientos']
handler.tags = ['info']
handler.command = /^(creditosyagradecimientos)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
