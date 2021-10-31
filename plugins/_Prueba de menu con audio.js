let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
      conn.sendFile(m.chat, 'media/Menu audio.mp3', '', 'xd', m)
      conn.sendFile(m.chat, 'src/menu.jpg', '', '', m)
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*_「 THE SHADOW BROKERS - BOT 」_*

*INFORMACIÓN DEL BOT*
*_⚠️-EL DESCONOCIMIENTO DE LO MENCIONADO EN EL SIGUIENTE ARTICULO NO EXIME A LA PERSONA DE LAS REGLAS Y SANCIONES QUE DE ELLA EMANAN-⚠️_*
*_Reglas e información sobre el Bot: https://n9.cl/the-shadow-brokers-bot-html_*

_Grupo oficial del Bot: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ_
_- Regalos de numero virtuales, pruebas de comandos nuevos, ayuda casi inmediata, etc._

*<OTROS MENUS>*

° ඬ⃟ℹ️ _#Infodecadacomando_
° ඬ⃟ℹ️ _#reglasdelbot_
° ඬ⃟ℹ️ _#creditosyagradecimientos_
° ඬ⃟ℹ️ _#codigoparaaudios_

*<NUMERO DEL CREADOR Y DE MODERADORES>*
- Únicamente contactar números +1 

° ඬ⃟👻 _#owner_
° ඬ⃟👻 _#creator_
° ඬ⃟👻 _#moderadores_

*<REPORTA FALLOS EN ALGÚN COMANDO/>*
- Reportes falsos serán baneados del uso del Bot 

° ඬ⃟🔰 _#bug *texto*_
° ඬ⃟🔰 _#report *texto*_

*<JUEGOS/>*

° ඬ⃟🕹 _#gay *@tag / nombre*_
° ඬ⃟🕹 _#lesbi *@tag / nombre*_
° ඬ⃟🕹 _#puta *@tag / nombre*_
° ඬ⃟🕹 _#formarpareja_
° ඬ⃟🕹 _#slots *cantidad*_

*<ECONOMIA/>* 

° ඬ⃟💵 _#monthly_
° ඬ⃟💵 _#claim_
° ඬ⃟💵 _#weekly_
° ඬ⃟💵 _#billetera_

*<DESCARGAS/>*

° ඬ⃟📥 _#image *texto*_
° ඬ⃟📥 _#gimage *texto*_
° ඬ⃟📥 _#ytsearch *texto*_
° ඬ⃟📥 _#ytmp4 *link yt*_
° ඬ⃟📥 _#ytmp3 *link yt*_
° ඬ⃟📥 _#play *titulo*_
° ඬ⃟📥 _#play2 *titulo del video*_
° ඬ⃟📥 _#lirik *nombredelacanción*_
° ඬ⃟📥 _#google *texto*_
° ඬ⃟📥 _#googlef *texto*_
 
*<GESTION DE GRUPOS/>* 

° ඬ⃟💎 _#admin *@tag*_
° ඬ⃟💎 _#kick *@tag*_
° ඬ⃟💎 _#add  *número*_
° ඬ⃟💎 _#group *open/close*_
° ඬ⃟💎 _#enable welcome_
° ඬ⃟💎 _#disable welcome_
° ඬ⃟💎 _#group *open/close*_
° ඬ⃟💎 _#listonline_
° ඬ⃟💎 _#enable antilink_
° ඬ⃟💎 _#disable antilink_ 
° ඬ⃟💎 _#link_
° ඬ⃟💎 _#linkgroup_
° ඬ⃟💎 _#hidetag *texto*_
° ඬ⃟💎 _#setname *Nuevo nombre del grupo*_
° ඬ⃟💎 _#invocar_

*<CREADORES/>*

° ඬ⃟🧧 _#style *texto*_
° ඬ⃟🧧 _#ytcomment *texto*_
° ඬ⃟🧧 _#hornycard *texto*_
° ඬ⃟🧧 _#s_
° ඬ⃟🧧 _#sticker*_
° ඬ⃟🧧 _#swm *Link d imagen d google*_
° ඬ⃟🧧 _#ttp *texto*_
° ඬ⃟🧧 _#attp *texto*_
° ඬ⃟🧧 _#attp2 *texto*_
° ඬ⃟🧧 _#wasted_
° ඬ⃟🧧 _#trash_
° ඬ⃟🧧 _#rainbow_
° ඬ⃟🧧 _#circle_
° ඬ⃟🧧 _#tomp3_
° ඬ⃟🧧 _#toimg_

*<RANDOM/>*

° ඬ⃟👾 _#meme_
° ඬ⃟👾 _#meme2_
° ඬ⃟👾 _#meme3_
° ඬ⃟👾 _#cat_
° ඬ⃟👾 _#dog_
° ඬ⃟👾 _#pikachu_
° ඬ⃟👾 _#waifu_
° ඬ⃟👾 _#apakah *pregunta*_
° ඬ⃟👾 _#blackpink_
° ඬ⃟👾 _#reto_
° ඬ⃟👾 _#verdad_
° ඬ⃟👾 _#imagenrandom_
° ඬ⃟👾 _#randomkpop_
° ඬ⃟👾 _#neko_
° ඬ⃟👾 _#iqtest_
° ඬ⃟👾 _#nyan_


*<COMANDOS +18/>*
​​​
° ඬ⃟🔞 _#Image Hentai sin censura_
° ඬ⃟🔞 _#Image Hentai_
° ඬ⃟🔞 _#image yaoi_
° ඬ⃟🔞 _#Image loli_
° ඬ⃟🔞 _#Image Porno_
° ඬ⃟🔞 _#Image Tetas_
° ඬ⃟🔞 _#Image chico desnudo_
° ඬ⃟🔞 _#Image Pene_
° ඬ⃟🔞 _#Image XXX_
° ඬ⃟🔞 _#Image Teen desnuda_
*- Si la imagen se envía en formato de archivo reintentar nuevamente*

*<COMANDOS +18/>*
- Usuarios registrados 
​​​
° ඬ⃟🔞 _#lesbian_
° ඬ⃟🔞 _#porno_
° ඬ⃟🔞 _#randomnsfw_
° ඬ⃟🔞 _#pornogif_
° ඬ⃟🔞 _#hentai_
° ඬ⃟🔞 _#indohot_
° ඬ⃟🔞 _#panties_

*<REGISTRO/>*

° ඬ⃟📓 _#daftar nombre.edad_

*<UNE EL BOT A TU GRUPO>*

° ඬ⃟👽 _#join *link del grupo*_

*<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
​​​
° ඬ⃟🎤 _#bass_
° ඬ⃟🎤 _#deep_
° ඬ⃟🎤 _#earrape_
° ඬ⃟🎤 _#fast_
° ඬ⃟🎤 _#fat_
° ඬ⃟🎤 _#nightcore_
° ඬ⃟🎤 _#reverse_
° ඬ⃟🎤 _#robot_
° ඬ⃟🎤 _#slow_
° ඬ⃟🎤 _#smooth_

*<EXTRAS/>*

° ඬ⃟🐺 _#profile_
° ඬ⃟🐺 _#simih *texto*_
° ඬ⃟🐺 _#afk *motivo*_
° ඬ⃟🐺 _#readmore *texto1| texto2*_
° ඬ⃟🐺 _#qr *texto*_
° ඬ⃟🐺 _#calc *expresión matemática*_ 
° ඬ⃟🐺 _#zodiac *AAAA MM DD*_
° ඬ⃟🐺 _#scan *numero con prefijo del pais*_
° ඬ⃟🐺 _#kpop_
° ඬ⃟🐺 _#spamchat *texto*_

*<AUDIOS/>* 

° ඬ⃟🎧 _#buenosdias_
° ඬ⃟🎧 _#buenosdias2_
° ඬ⃟🎧 _#fiestadeladmin_
° ඬ⃟🎧 _#fiestadeladmin2_
° ඬ⃟🎧 _#viernes_
° ඬ⃟🎧 _#chicalgante_
° ඬ⃟🎧 _#baneado_
° ඬ⃟🎧 _#anadieleimporta_
° ඬ⃟🎧 _#horadesexo_
° ඬ⃟🎧 _#vetealavrg_
° ඬ⃟🎧 _#hola_
° ඬ⃟🎧 _#teamo_
° ඬ⃟🎧 _#Yamete_
° ඬ⃟🎧 _#diagnosticadocongay_
° ඬ⃟🎧 _#bañate_
° ඬ⃟🎧 _#felizjueves_

*<CHAT ANONIMO/>*

° ඬ⃟📳 _#start_
° ඬ⃟📳 _#next_
° ඬ⃟📳 _#leave_

*<MUSICA CORTESIA DEL ADMIN/>*
- Puede demorar 2 minuto aproximadamente en enviar el archivo mp3

° ඬ⃟🎵 _#cortesiadeladmin1_

*<VIDEOS DE MUSICAS SAD/>*
- Puede demorar 1 minuto en enviar el archivo mp4

° ඬ⃟⏯️ _#edmaverickdondeestas_
° ඬ⃟⏯️ _#devuelvemeamichicahombresg_
° ඬ⃟⏯️ _#beretlosiento_

*<CONVIERTETE EN BOT/>*

° ඬ⃟🏷 _#stop_
° ඬ⃟🏷 _#jadibot_

*<CREA TU NUMERO VIRTUAL E INSTALA UN BOT EN EL/>*

° ඬ⃟🔥 _#tutorial_

*<CREA LOGOS>*

° ඬ⃟🖍️ _#tahta *texto*_
~- El texto debe ser menor a 11 letras~
~- Crea una imagen con el texto~
~- El texto lo escribe 3 veces en 3 filas diferentes~
~- Puede ser diferentes colores las letras (es aleatorio)~
~- Si falla vuelva a intentarlo y corrobore que cumpla con lo antes mencionado~
° ඬ⃟🖍️ _nulis *texto*_
~- Crea una tipo de lista con el texto que le pongas~
° ඬ⃟🖍️ _nulis2 *texto*_
~- Crea una tipo de lista con el texto que le pongas~


*<AVISOS/>*

°ඬ⃟📢 __

*<PROPIETARIO Y MODERADORES/>*

° ඬ⃟🤖 _#banuser *@tag*_
° ඬ⃟🤖 _#banchat_
° ඬ⃟🤖 _#setmenu_
° ඬ⃟🤖 _#enable restrict_
° ඬ⃟🤖 _#enable autoread*_
° ඬ⃟🤖 _#disable autoread_
° ඬ⃟🤖 _#enable autoread_
° ඬ⃟🤖 _#resetlimit_
° ඬ⃟🤖 _#banlist_
° ඬ⃟🤖 _#bcgc *texto*_
° ඬ⃟🤖 _#bc *texto*_
° ඬ⃟🤖 _#update_
° ඬ⃟🤖 _#restart_
° ඬ⃟🤖 _#backup_
° ඬ⃟🤖 _#unbanchat_
° ඬ⃟🤖 _#unban *@tag*_
° ඬ⃟🤖 _#del_

*_「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」_*
`.trim(), m)
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

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
