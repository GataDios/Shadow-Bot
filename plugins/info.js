let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('Espere.. esto puede demorar un poco!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*_LISTA DE COMANDOS CON SU EXPLICACION:_*

*<JUEGOS/>*

° ඬ⃟🕹 _#howgay *@tag / nombre*_
- *Calcula el porcentaje de gay que es la persona o nombre puesto*
° ඬ⃟🕹 _#howlesbi *@tag / nombre*_
- *Calcula es porcentaje de lesbiana que es esa persona o nombre puesto*
° ඬ⃟🕹 _#Jadian_
- *Forma una pareja al azar en el grupo* 
° ඬ⃟🕹 _#slots *cantidad*_
- *Simula el clásico juego de tragamonedas* 

*<ECONOMIA/>* 

° ඬ⃟💵 _#monthly_
- *Reclama dinero para apostar en el juego de slots*
° ඬ⃟💵 _#Claim_
- *Reclama dinero para apostar en el juego de slots*
° ඬ⃟💵 _#weekly_
- *Reclama dinero para apostar en el juego de slots*
° ඬ⃟💵 _#Inv_
- *Checa cuanto dinero tienes*

   *<DESCARGAS/>*

° ඬ⃟📥 _#google  *texto*_
- *hace búsquedas en google y manda los enlaces con información y la imagen del screenshot*
° ඬ⃟📥 _#googlef *texto*_
- *hace búsquedas en google y manda los enlaces con información y la imagen del screenshot*
° ඬ⃟📥 _#image  *texto*_
- *Envía una imagen sobre el texto que pusiste* 
° ඬ⃟📥 _#gimage  *texto*_
- *Envía una imagen sobre el texto que pusiste* 
° ඬ⃟📥 _#ytsearch  *texto*_
- *Hace búsquedas de videos en YouTube y manda varios links de los resultados con información del video* 
° ඬ⃟📥 _#ytmp4  *link yt*_
- *Descarga el video del enlace puesto y lo manda en formato mp4*
° ඬ⃟📥 _#ytmp3  *link yt*_
- *Descarga el video del enlace puesto y lo manda en formato mp3*
° ඬ⃟📥 _#play  *titulo*_
- *Descarga música con solo el nombre de la música - Nota: Puede que tarde unos minutos en enviar el archivo mp3* 
° ඬ⃟📥 _#play2  *titulo del video*_
- *Descarga música con solo el nombre de la música - Nota: Puede que tarde unos minutos en enviar el archivo mp4* 
° ඬ⃟📥 _#lirik  *nombredelacanción*_
- *Busca la letra de la canción y lo manda*
Nota: Escribe el nombre de la cancion junto o sea sin espacios - Ejemplo: #lirik badbunnydakity 

*<GESTION DE GRUPOS/>* 

° ඬ⃟💎 _#admin *@tag*_
- *Le asigna cargo de administrador en el grupo*
° ඬ⃟💎 _#kick *@tag*_
- *Lo elimina del grupo - Nota: Puede ocasionar que el numero del bot se vaya a soporte, o sea quede inservible* 
° ඬ⃟💎 _#add  *número*_
- (Ejemplo de numero: +1 (952) 213-7825) *Añade al grupo el numero puesto*
° ඬ⃟💎 _#group *open/close*_
*Abre o cierra el grupo, solo permite enviar mensajes a Administradores*
° ඬ⃟💎 _#Enable welcome_
- *Activa la bienvenida y la despedida en el grupo*
° ඬ⃟💎 _#Disable welcome_
- *Desactiva la bienvenida y la despedida el grupo*
° ඬ⃟💎 _#listonline_
- *Envía una lista con los usuarios del grupo que están en linea*
° ඬ⃟💎 #enable antilink
- *Expulsa a la persona que mande el enlace de algun grupo de WhatsApp*
° ඬ⃟💎 #disable antilink 
- *Desactiva la funcion de expulsar a la persona que mande el enlace de algun grupo de WhatsApp*
° ඬ⃟💎 _#link_
- *Envía el enlace del grupo*
° ඬ⃟💎 _#linkgroup_
- *Envía el enlace del grupo*
° ඬ⃟💎 _#hidetag *texto*_
- *Envía el mensaje desde el numero del Bot y le llega a todos la notificación aunque tenga silenciado el grupo*

*<CREADORES/>*

° ඬ⃟🧧 _#Style *texto*_
- *Envía en diferentes tipos de fuente de texto el texto puesto*
° ඬ⃟🧧 _#ytcomment *texto*_
- *Crea una imagen en que aparece tu foto con el texto que pusiste en un tipo de comentario de YouTube*
° ඬ⃟🧧 _#hornycard *texto*_
- *Crea una tarjeta con tu foto de perfil*
° ඬ⃟🧧 _#S_
- (Responde a una imagen o envía la imagen con la leyenda "#S") *Crea stickers partiendo de una imagen. Nota: NO crea sticker de videos o gifs* 
° ඬ⃟🧧 _#sticker*_
(Responde a una imagen o envía la imagen con la leyenda "#Sticker") *Crea stickers partiendo de una imagen. Nota: NO crea sticker de videos o gifs* 
° ඬ⃟🧧 _#swm *Link de la imagen*_ 
- (Envía el código con el enlace) *Crea stickers partiendo de un enlace de imagen de google* 
° ඬ⃟🧧 _#ttp *texto*_
- *Crea stickers con el texto estilo 1*
° ඬ⃟🧧 _#attp *texto*_
- *Crea stickers con el texto estilo 2*
° ඬ⃟🧧 _#attp2 *texto*_
- *Crea stickers con el texto estilo 3*
° ඬ⃟🧧 _#wasted_
- (Responde a una imagen) *Lo convierte en un sticker tipo GTA de cuando mueres*
° ඬ⃟🧧 _#rainbow_
- (Responde a una imagen) *Lo convierte a un sticker con efecto de arcoíris*
° ඬ⃟🧧 _#circle_
- (Responde a una imagen) *Lo convierte en un sticker en circulo*
° ඬ⃟🧧 _#tomp3_
- (Responde a una nota de voz) *Convierte una nota de voz a archivo mp3*
° ඬ⃟🧧 _#toimg_
- (Responde a un sticker) *Convierte a imagen*

*<RANDOM/>*

° ඬ⃟👾 _#meme_
- *Envía un meme mexicano totalmente random*
° ඬ⃟👾 _#cat_
- *Envía una imagen o video de un gato*
° ඬ⃟👾 _#dog_
- *Envía una imagen o video de un perro*
° ඬ⃟👾 _#pikachu_
- *Envía una imagen, vídeo o gif random sobre el Pokémon Pikachu*
° ඬ⃟👾 _#waifu_
- *Envía una imagen de un personaje animado de la comunidad del anime*
° ඬ⃟👾 #apakah pregunta
- *Te responde a la pregunta con alguna de las siguientes respuestas: 'Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible'*

*<COMANDOS +18/>*
- Usar bajo su respondabilidad

° ඬ⃟🔞 #Image Hentai sin censura
° ඬ⃟🔞 #Image Hentai
° ඬ⃟🔞 #gimage Hentai
° ඬ⃟🔞 #image yaoi
° ඬ⃟🔞 #Image loli
° ඬ⃟🔞 #Image Porno
° ඬ⃟🔞 #Image Tetas
° ඬ⃟🔞 #Image chico desnudo
° ඬ⃟🔞 #Image Pene
° ඬ⃟🔞 #Image XXX
° ඬ⃟🔞 #Image Teen desnuda
- Si la imagen se envía en formato de archivo reintentar nuevamente

*<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
- Responde a una nota de voz o audio

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

*<EXTRAS/>*

° ඬ⃟🐺 _#Join *link del grupo*_
- *Ejemplo: #Join https://chat.whatsapp.com/JvizcYOkZOMCyyzeBIzne0*
° ඬ⃟🐺 _#daftar *nombre.edad*_
- *Regístrate, así el bot te reconocerá /// NO ES OBLIGATORIO* 
° ඬ⃟🐺 _#profile_
- *Obtén información sobre tu perfil en el bot* 
° ඬ⃟🐺 _#Simih *texto*_
- *Habla con la inteligencia artificial simsimi - Nota: Responde únicamente en indonesio e ingles*
° ඬ⃟🐺 _#afk *motivo*_
- *Hace que cuando te etiqueten envié un mensaje diciendo que no te etiqueten porque estás ausente por el motivo que pusiste*
° ඬ⃟🐺 _#readmore *texto1| texto2*_
- *El bot envía el texto 1 y el efecto de leer mas para mostrar el texto 2*
° ඬ⃟🐺 _#qr *texto*_
- *Convierte en un código qr el texto que quieras _ Para ver que el contenido escrito es lo que pusiste en el código qr puedes usar esta pagina muy sencilla en la cual solo debes subir la imagen: https://www.codigos-qr.com/lector-qr-online/*
° ඬ⃟🐺 _#Calc *expresión matemática*_ 
- *Realiza la operación y te da el resultado* 
° ඬ⃟🐺 _#Zodiac *AAAA MM DD*_
- *Te manda información sobre tu zodiaco* 
° ඬ⃟🐺 _#Scan *numero con prefijo del pais*_
- *Te proporciona datos generales sobre el numero*

*<CHAT ANONIMO/>*
- Únicamente funciona en privado al numero del Bot

° ඬ⃟📳 _#start_
- *Inicia a hablar con alguien sin saber quien es*
° ඬ⃟📳 _#next_
- *Pasa a la siguiente persona para hablar con ella*
° ඬ⃟📳 _#leave_
- *Finaliza y sales del chat anónimo* 

*<CONVIERTETE EN BOT/>*

° ඬ⃟🏷 _#jadibot_
- *Te envía un código qr que solo tienes que escanear desde tu móvil en la app de WhatsApp móvil en la opción de WhatsApp web*
° ඬ⃟🏷 _#stop_
- *Deja de ser bot*
*_Nota: Si yo desactivo mi bot los bots creados desde este apartado se desactivan también, para volver a activarlo repetir el proceso.. Si el bot sigue activo pero el tuyo no responde enviar el comando con muchas letras que te llego al privado al escanear el código QR /// Nota2: El menu que el bot trae por defectos es el original, solo que algunos de los comandos de ahí están en otro idioma se aconseja usar el comando #setmenu y copiar y pegar el menu del Bot principal_*

*<NOTA/>*

° Manda mensaje al propietario del Bot para solicitar que te agreguen a usuarios premium y poder usar el Bot sin limites 
- *El mensaje debe incluir el nombre del grupo en el que estas con el Bot*

█║▌║ 𝕿𝖍𝖊 𝕾𝖍𝖆𝖉𝖔𝖜 𝕭𝖗𝖔𝖐𝖊𝖗𝖘 - 𝕭𝖔𝖙 ║▌║█
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

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
