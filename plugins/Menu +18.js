let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now()),
                 conn.sendFile(m.chat, 'media/Oxxo.mp3', '', 'xd', m),
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*_「 THE SHADOW BROKERS - BOT 」_*
*_~⚠️USAR BAJO SU RESPONSABILIDAD~⚠️_*
  
*<COMANDOS +18/>*

~HETERO~
° ඬ⃟🔞 _#video1_
° ඬ⃟🔞 _#video2_
° ඬ⃟🔞 _#video3_
° ඬ⃟🔞 _#video4_

~LESBIAN~
° ඬ⃟🔞 _#videolesbian1_
° ඬ⃟🔞 _#videolesbian2_

~GAY~
° ඬ⃟🔞 _#videogay1_
° ඬ⃟🔞 _#videogay2_

~ANIME HENTAI~
° ඬ⃟🔞 _#videoh1_

~IMAGENES RANDOM~
° ඬ⃟🔞 _#lesbian_
° ඬ⃟🔞 _#porno_
° ඬ⃟🔞 _#randomnsfw_
° ඬ⃟🔞 _#pornogif_
° ඬ⃟🔞 _#hentai_
° ඬ⃟🔞 _#panties_
° ඬ⃟🔞 _#pene_

~LINK DE MEDIAFIRE~
° ඬ⃟🔞 _#indohot_

█║▌║ 𝕿𝖍𝖊 𝕾𝖍𝖆𝖉𝖔𝖜 𝕭𝖗𝖔𝖐𝖊𝖗𝖘 - 𝕭𝖔𝖙 ║▌║█
`.trim(), m)
}
handler.help = ['menu_+18']
handler.tags = ['info']
handler.command = /^(menu_+18?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
