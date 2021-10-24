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
ㅤㅤㅤLISTA DE COMANDOS CON SU EXPLICACION:

• #daftar Nombre.edad Regístrate, así el bot te reconocerá /// OPCIONAL 

• #profile Obtén información sobre tu perfil en el bot 

• #play (nombre del audio a descargar) Descarga música con solo el nombre de la música - Nota: Puede que tarde unos minutos en enviar el archivo mp3 

• #play2 (nombre del video a descargar) Descarga videos con solo el nombre del video

• #attp (Texto) Crea stickers con el texto estilo 1

• #attp2 (Texto) Crea stickers con el texto estilo 2 

• #Simih (Texto) Habla con la inteligencia artificial simsimi - Nota: Responde únicamente en indonesio e ingles 

• #waifu Envía una imagen de un personaje animado de la comunidad del anime

• #google (Lo que quieras buscar) hace búsquedas en google y manda los enlaces con info e imagen de screenshots

• #googlef (Lo que quieras buscar) hace búsquedas en google y manda los enlaces con info e imagen de screenshots mas completo

• #S (Responde a una imagen o envía la imagen con la leyenda "#S") Crea stickers partiendo de una imagen. Nota: NO crea sticker de videos o gifs 

• #tts (Código) (Texto)
Ejemplo de uso: #tts es Hola mundo  
*Envía una nota de voz con el texto - Lista de códigos disponibles: https://the-shadow-brokers-bot-info.blogspot.com/2021/10/the-shadow-brokers-bot.html

• #image (Texto) Envía una imagen sobre el texto que pusiste 

• #gimage (Texto) Envía una imagen mas completa sobre el texto que pusiste 
ㅤ
- El usuario y el bot deben ser admins
• #add número (Ejemplo de numero: +1 (952) 213-7825) Añade al grupo el numero puesto
• #kick @user Lo elimina del grupo - Nota: Puede ocasionar que el numero del bot se vaya a soporte, o sea quede inservible 
• #admin @user Le asigna cargo de administrador en el grupo
• #enable welcome Activa la bienvenida y la despedida en el grupo
• #disable welcome Desactiva la bienvenida y la despedida el grupo
• #group open / close Abre o cierra el grupo, solo permite enviar mensajes a Administradores
• #linkgroup Envía el enlace del grupo
• #listonline Envía una lista con los usuarios del grupo que están en linea
• #hidetag (Texto) Envía el mensaje desde el numero del Bot y le llega a todos la notificación aunque tenga silenciado el grupo

• #howlesbi (@ o nombre) Calcula es porcentaje de lesbiana que es esa persona o nombre puesto en el texto

• #howgay (@ o nombre) Calcula el porcentaje de gay que es la persona o nombre puesto en el texto

• #readmore (texto1| Texto2) El bot envía el texto 1 y el efecto de leer mas para mostrar el texto 2

• #wasted (Responde a una imagen) Lo convierte en un sticker tipo GTA de cuando mueres

• #wanted (Responde a una imagen) Crea un sticker en la que la imagen que seleccionaste lo buscan y ofrecen recompensa

• #rainbow (Responde a una imagen) Lo convierte a un sticker con efecto de arcoíris

• #toimg (Responde a un sticker) Convierte a imagen 

• #afk (Motivo) Hace que cuando te etiqueten envié un mensaje diciendo que no te etiqueten porque estás ausente por el motivo que pusiste

• #jadian Forma una pareja tu más alguien en el grupo 

• #circle (Responde a una imagen) Lo convierte en un sticker en circulo

• #dog Envía una imagen o video de un perro

• #cat Envía una imagen o video de un gato

• #pikachu Envía una imagen, vídeo o gif random sobre el Pokémon Pikachu

• #tagme Menciona tu propio @ 

• #meme Envía un meme mexicano totalmente random

• #qr (texto) Convierte en un código qr el texto que quieras _ Para ver que el contenido escrito es lo que pusiste en el código qr puedes usar esta pagina muy sencilla en la cual solo debes subir la imagen: https://www.codigos-qr.com/lector-qr-online/

• #Style (Texto) Envía en diferentes tipos de fuente de texto el texto puesto

• #tomp3 (Responde a una nota de voz) Convierte una nota de voz a archivo mp3

- Usa el comando respondiendo a una nota de voz o audio
• #bass
• #blown
• #deep
• #earrape
• #fast
• #fat
• #nightcore
• #reverse
• #robot
• #slow
• #smooth

• #Image Hentai sin censura 
• #Image Hentai
• #gimage Hentai
• #image yaoi
• #Image loli
• #Image Porno 
• #Image Tetas 
• #Image chico desnudo   
• #Image Pene 
• #Image XXX
• #Image Teen desnuda  
- Demás comandos con #image 

• #hornycard Crea una tarjeta con tu foto de perfil 
• #ytcomment (texto) Crea una imagen en que aparece tu foto con el texto que pusiste en un tipo de comentario de YouTube

• #Join (enlace) 
- Ejemplo: #Join https://chat.whatsapp.com/JvizcYOkZOMCyyzeBIzne0

• #jadibot Te envía un código qr que solo tienes que escanear desde tu móvil en la app de WhatsApp móvil en la opción de WhatsApp web
• #stop Deja de ser bot
Nota: Si yo desactivo mi bot los bots creados desde este apartado se desactivan también, para volver a activarlo repetir el proceso.. Si el bot sigue activo pero el tuyo no responde enviar el comando con muchas letras que te llego al privado al escanear el código QR /// Nota2: El menu que el bot trae por defectos es el original, solo que algunos de los comandos de ahí están en otro idioma se aconseja usar el comando #setmenu y copiar y pegar el menu del Bot principal

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
