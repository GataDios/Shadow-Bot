let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
      conn.sendFile(m.chat, 'media/FelizJueves.mp3', '', 'xd', m)
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
「 THE SHADOW BROKERS - BOT 」

INFORMACIÓN DEL BOT
⚠️-EL DESCONOCIMIENTO DE LO MENCIONADO EN EL SIGUIENTE ARTICULO NO EXIME A LA PERSONA DE LAS REGLAS Y SANCIONES QUE DE ELLA EMANAN-⚠️
Reglas e información sobre el Bot: https://n9.cl/the-shadow-brokers-bot-html

Grupo oficial del Bot: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ
- Regalos de numero virtuales, pruebas de comandos nuevos, ayuda casi inmediata, etc.

<OTROS MENUS>

° ඬ⃟ℹ️ #Infodecadacomando
° ඬ⃟ℹ️ #reglasdelbot
° ඬ⃟ℹ️ #creditosyagradecimientos
° ඬ⃟ℹ️ #codigoparaaudios

<NUMERO DEL CREADOR Y DE MODERADORES>
- Únicamente contactar números +1 

° ඬ⃟👻 #owner
° ඬ⃟👻 #creator
° ඬ⃟👻 #moderadores

<REPORTA FALLOS EN ALGÚN COMANDO/>
- Reportes falsos serán baneados del uso del Bot 

° ඬ⃟🔰 #bug texto
° ඬ⃟🔰 #report texto

<JUEGOS/>

° ඬ⃟🕹 #gay @tag / nombre
° ඬ⃟🕹 #lesbi @tag / nombre
° ඬ⃟🕹 #puta @tag / nombre
° ඬ⃟🕹 #formarpareja
° ඬ⃟🕹 #slots cantidad

<ECONOMIA/> 

° ඬ⃟💵 #monthly
° ඬ⃟💵 #claim
° ඬ⃟💵 #weekly
° ඬ⃟💵 #billetera

<DESCARGAS/>

° ඬ⃟📥 #image texto
° ඬ⃟📥 #gimage texto
° ඬ⃟📥 #ytsearch texto
° ඬ⃟📥 #ytmp4 link yt
° ඬ⃟📥 #ytmp3 link yt
° ඬ⃟📥 #play titulo
° ඬ⃟📥 #play2 titulo del video
° ඬ⃟📥 #lirik nombredelacanción
° ඬ⃟📥 #google texto
° ඬ⃟📥 #googlef texto
 
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
° ඬ⃟🧧 #swm Link d imagen d google
° ඬ⃟🧧 #ttp texto
° ඬ⃟🧧 #attp texto
° ඬ⃟🧧 #attp2 texto
° ඬ⃟🧧 #wasted
° ඬ⃟🧧 #trash
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
- Usuarios registrados 
​​​
° ඬ⃟🔞 #lesbian
° ඬ⃟🔞 #porno
° ඬ⃟🔞 #randomnsfw
° ඬ⃟🔞 #pornogif
° ඬ⃟🔞 #hentai
° ඬ⃟🔞 #indohot
° ඬ⃟🔞 #panties

<REGISTRO/>

° ඬ⃟📓 #daftar nombre.edad

<UNE EL BOT A TU GRUPO>

° ඬ⃟👽 #join link del grupo

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
° ඬ⃟🎧 #diagnosticadocongay
° ඬ⃟🎧 #bañate
° ඬ⃟🎧 #felizjueves

<CHAT ANONIMO/>

° ඬ⃟📳 #start
° ඬ⃟📳 #next
° ඬ⃟📳 #leave

<MUSICA CORTESIA DEL ADMIN/>
- Puede demorar 2 minuto aproximadamente en enviar el archivo mp3

° ඬ⃟🎵 #cortesiadeladmin1

<VIDEOS DE MUSICAS SAD/>
- Puede demorar 1 minuto en enviar el archivo mp4

° ඬ⃟⏯️ #edmaverickdondeestas
° ඬ⃟⏯️ #devuelvemeamichicahombresg
° ඬ⃟⏯️ #beretlosiento

<CONVIERTETE EN BOT/>

° ඬ⃟🏷 #stop
° ඬ⃟🏷 #jadibot

<CREA TU NUMERO VIRTUAL E INSTALA UN BOT EN EL/>

° ඬ⃟🔥 #tutorial

<CREA LOGOS>

° ඬ⃟🖍️ #tahta texto
- El texto debe ser menor a 11 letras
- Crea una imagen con el texto
- El texto lo escribe 3 veces en 3 filas diferentes
- Puede ser diferentes colores las letras (es aleatorio)
- Si falla vuelva a intentarlo y corrobore que cumpla con lo antes mencionado
° ඬ⃟🖍️ nulis texto
- Crea una tipo de lista con el texto que le pongas

<AVISOS/>

°ඬ⃟📢 __

<PROPIETARIO Y MODERADORES/>

° ඬ⃟🤖 #banuser @tag
° ඬ⃟🤖 #banchat
° ඬ⃟🤖 #setmenu
° ඬ⃟🤖 #enable restrict
° ඬ⃟🤖 #enable autoread*
° ඬ⃟🤖 #disable autoread
° ඬ⃟🤖 #enable autoread
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
`.trim(), m)
}
handler.help = ['menu5']
handler.tags = ['about']
handler.command = /^(menu5?)$/i

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
