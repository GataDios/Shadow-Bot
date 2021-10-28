let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'Main',
  'rpg': 'Epic RPG',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Al Qur\'an',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
const defaultMenu = {
  before: `
「 THE SHADOW BROKERS - BOT 」

INFORMACIÓN DEL BOT
⚠️-EL DESCONOCIMIENTO DE LO MENCIONADO EN EL SIGUIENTE ARTICULO NO EXIME A LA PERSONA DE LAS REGLAS Y SANCIONES QUE DE ELLA EMANAN-⚠️
Reglas e información sobre el Bot: https://n9.cl/the-shadow-brokers-bot-html

Grupo oficial del Bot: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ
- Primeros en ser usuarios premium, regalos de numero virtuales, pruebas de comandos nuevos, etc

<OTROS MENUS>

° ඬ⃟ℹ️ #Infodecadacomando
° ඬ⃟ℹ️ #reglasdelbot
° ඬ⃟ℹ️ #creditosyagradecimientos

<NUMERO DEL CREADOR Y DE MODERADORES>

° ඬ⃟👻 #owner
° ඬ⃟👻 #creator
° ඬ⃟👻 #moderadores

<REPORTA FALLOS EN ALGÚN COMANDO/>

° ඬ⃟🔰 #bug texto
° ඬ⃟🔰 #report texto

<JUEGOS/>

° ඬ⃟🕹 #gay @tag / nombre
° ඬ⃟🕹 #lesbi @tag / nombre
° ඬ⃟🕹 #formarpareja
° ඬ⃟🕹 #slots cantidad

<ECONOMIA/> 

° ඬ⃟💵 #monthly
° ඬ⃟💵 #claim
° ඬ⃟💵 #weekly
° ඬ⃟💵 #billetera

<DESCARGAS/>

° ඬ⃟📥 #google  texto
° ඬ⃟📥 #googlef texto
° ඬ⃟📥 #image  texto
° ඬ⃟📥 #gimage  texto
° ඬ⃟📥 #ytsearch  texto
° ඬ⃟📥 #ytmp4  link yt
° ඬ⃟📥 #ytmp3  link yt
° ඬ⃟📥 #play  titulo
° ඬ⃟📥 #play2  titulo del video
° ඬ⃟📥 #lirik  nombredelacanción
 
<GESTION DE GRUPOS/> 

° ඬ⃟💎 #admin @tag
° ඬ⃟💎 #kick @tag
° ඬ⃟💎 #add  número
° ඬ⃟💎 #group open/close
° ඬ⃟💎 #enable welcome
° ඬ⃟💎 #disable welcome
° ඬ⃟💎 #group open/close
° ඬ⃟💎 #listonline
° ඬ⃟💎 #enable antilink
° ඬ⃟💎 #disable antilink 
° ඬ⃟💎 #link
° ඬ⃟💎 #linkgroup
° ඬ⃟💎 #hidetag texto
° ඬ⃟💎 #setname Nuevo nombre del grupo
° ඬ⃟💎 #invocar

<CREADORES/>

° ඬ⃟🧧 #style texto
° ඬ⃟🧧 #ytcomment texto
° ඬ⃟🧧 #hornycard texto
° ඬ⃟🧧 #s
° ඬ⃟🧧 #sticker*
° ඬ⃟🧧 #swm Link de la imagen
° ඬ⃟🧧 #ttp texto
° ඬ⃟🧧 #attp texto
° ඬ⃟🧧 #attp2 texto
° ඬ⃟🧧 #wasted
° ඬ⃟🧧 #rainbow
° ඬ⃟🧧 #circle
° ඬ⃟🧧 #tomp3
° ඬ⃟🧧 #toimg

<RANDOM/>

° ඬ⃟👾 #meme
° ඬ⃟👾 #meme2
° ඬ⃟👾 #meme3
° ඬ⃟👾 #cat
° ඬ⃟👾 #dog
° ඬ⃟👾 #pikachu
° ඬ⃟👾 #waifu
° ඬ⃟👾 #apakah pregunta
° ඬ⃟👾 #blackpink
° ඬ⃟👾 #reto
° ඬ⃟👾 #verdad
° ඬ⃟👾 #imagenrandom
° ඬ⃟👾 #randomkpop
° ඬ⃟👾 #neko
° ඬ⃟👾 #iqtest
° ඬ⃟👾 #nyan


<COMANDOS +18/>
​​​
° ඬ⃟🔞 #Image Hentai sin censura
° ඬ⃟🔞 #Image Hentai
° ඬ⃟🔞 #image yaoi
° ඬ⃟🔞 #Image loli
° ඬ⃟🔞 #Image Porno
° ඬ⃟🔞 #Image Tetas
° ඬ⃟🔞 #Image chico desnudo
° ඬ⃟🔞 #Image Pene
° ඬ⃟🔞 #Image XXX
° ඬ⃟🔞 #Image Teen desnuda
- Si la imagen se envía en formato de archivo reintentar nuevamente

<COMANDOS +18/>
- Usuarios premium 
​​​
° ඬ⃟🔞 #lesbian
° ඬ⃟🔞 #porno
° ඬ⃟🔞 #randomnsfw
° ඬ⃟🔞 #pornogif
° ඬ⃟🔞 #hentai

<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>
​​​
° ඬ⃟🎤 #bass
° ඬ⃟🎤 #deep
° ඬ⃟🎤 #earrape
° ඬ⃟🎤 #fast
° ඬ⃟🎤 #fat
° ඬ⃟🎤 #nightcore
° ඬ⃟🎤 #reverse
° ඬ⃟🎤 #robot
° ඬ⃟🎤 #slow
° ඬ⃟🎤 #smooth

<EXTRAS/>

° ඬ⃟🐺 #join link del grupo
° ඬ⃟🐺 #daftar nombre.edad
° ඬ⃟🐺 #profile
° ඬ⃟🐺 #simih texto
° ඬ⃟🐺 #afk motivo
° ඬ⃟🐺 #readmore texto1| texto2
° ඬ⃟🐺 #qr texto
° ඬ⃟🐺 #calc expresión matemática 
° ඬ⃟🐺 #zodiac AAAA MM DD
° ඬ⃟🐺 #scan numero con prefijo del pais
° ඬ⃟🐺 #kpop

<AUDIOS/> 

° ඬ⃟🎧 #buenosdias
° ඬ⃟🎧 #buenosdias2
° ඬ⃟🎧 #fiestadeladmin
° ඬ⃟🎧 #fiestadeladmin2
° ඬ⃟🎧 #viernes
° ඬ⃟🎧 #chicalgante
° ඬ⃟🎧 #baneado
° ඬ⃟🎧 #anadieleimporta
° ඬ⃟🎧 #horadesexo
° ඬ⃟🎧 #vetealavrg
° ඬ⃟🎧 #hola
° ඬ⃟🎧 #teamo
° ඬ⃟🎧 #Yamete

<CHAT ANONIMO/>

° ඬ⃟📳 #start
° ඬ⃟📳 #next
° ඬ⃟📳 #leave

<CONVIERTETE EN BOT/>

° ඬ⃟🏷 #stop
° ඬ⃟🏷 #jadibot

<CREA TU NUMERO VIRTUAL E INSTALA UN BOT EN EL/>

° ඬ⃟🔥 #tutorial

<NOTAS/>

° Manda mensaje al propietario del Bot para solicitar el comando para agregarte a usuarios PREMIUM
- El mensaje deber decir lo siguiente: Hola, me podrías decir el comando para agregarme a usuarios PREMIUM

<PROPIETARIO Y MODERADORES/>

° ඬ⃟🤖 #banuser @tag
° ඬ⃟🤖 #banchat
° ඬ⃟🤖 #setmenu
° ඬ⃟🤖 #enable restrict
° ඬ⃟🤖 #enable autoread*
° ඬ⃟🤖 #disable autoread
° ඬ⃟🤖 #enable autoread
° ඬ⃟🤖 #addprem @tag
° ඬ⃟🤖 #resetlimit
° ඬ⃟🤖 #banlist
° ඬ⃟🤖 #bcgc texto
° ඬ⃟🤖 #bc texto
° ඬ⃟🤖 #update
° ඬ⃟🤖 #restart
° ඬ⃟🤖 #backup
° ඬ⃟🤖 #unbanchat
° ඬ⃟🤖 #unban @tag
° ඬ⃟🤖 #del

「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」

*IGNORAR LO SIGUIENTE*

%readmore`.trimStart(),
  header: '╭─「 %category 」',
  body: '│ • %cmd %islimit %isPremium',
  footer: '╰────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m).catch(_ => conn.reply(m.chat, text.trim(), m))
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}
