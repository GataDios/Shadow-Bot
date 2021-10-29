/*

   [] INGIN BERTANYA TANYA???
HUBUNGI => 19527773705
[] ATAU SILAHKAN JOIN
=> https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ

[] SC ORI : NURUTOMO
[] RECODE : RAKU

❏ : "KOK SIMPLE BANGET MENU NYA"
❏ : "YAA KAN SAYA NOOB 
❏ : "KESIAN BADUT YANG SATU INI "
❏ : "N4P4 G45EN4N6?? PUKUL1N 4J4 4N4K P4NT1, M4U N64DU 4M4 S14P4?? 0R4N6 7UA NY4?? CUPU LU"
❏ : ".............."

❏ : DARIPADA RIBUT BANTU ADMIN 
YOK DENGAN CARA SUBSCRIBE
YT ZEROBOT
 
*/
let fs = require ('fs')
const { createHash } = require('crypto') 
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
const os = require('os')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')

//========== BATASSS NGABBB ==========//

let handler  = async (m, { conn, usedPrefix: _p, command, args }) => {
let neww = performance.now()
let teks = `${args[0]}`.toLowerCase()
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const petik = '```'
const img = './src/logo.jpg'
const groupsIn = groups.filter(v => !v.read_only)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
  	const job = global.DATABASE.data.users[m.sender].level
  var zerojob = 'Pengangguran'
  
  	      if (job >= '0' && job <= '5') {
  		      zerojob = 'Pengangguran'
 } else if (job >= '5' && job <= '10') {
 			   zerojob = 'Pemulung'
 } else if (job >= '10' && job <= '20') {
 			   zerojob = 'Miner/Penambang'
 } else if (job >= '20' && job <= '30') {
 			   zerojob = 'Penebang Pohon'
 } else if (job >= '30' && job <= '40') {
 			   zerojob = 'Pangkalan Ojek'
 } else if (job >= '40' && job <= '50') {
 			   zerojob = 'Driver Online'
 } else if (job >= '50' && job <= '60') {
 			   zerojob = 'Satpam'
 } else if (job >= '60' && job <= '70') {
 			   zerojob = 'Polisi'
 } else if (job >= '70' && job <= '80') {
 			   zerojob = 'Tentara'
 } else if (job >= '80' && job <= '90') {
 			   zerojob = 'Pekerja Kantoran'
 } else if (job >= '90' && job <= '100') {
 			   zerojob = 'Prostitusi Online'
 } else {
 			   zerojob = 'Prostitusi Online'
 }
 
  	const lbars = global.DATABASE.data.users[m.sender].level
  var zerobars = '[▒▒▒▒▒▒▒▒▒]'

         if (lbars >= '0' && lbars <= '5') {
                zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
         } else if (lbars >= '5' && lbars <= '10') {
				zerobars = '[█▒▒▒▒▒▒▒▒▒]'
		 } else if (lbars >= '10' && lbars <= '20') {
				zerobars = '[██▒▒▒▒▒▒▒▒]'
		} else if (lbars >= '20' && lbars <= '30') {
				zerobars = '[███▒▒▒▒▒▒▒]'
		} else if (lbars >= '30' && lbars <= '40') {
				zerobars = '[████▒▒▒▒▒▒]'
		} else if (lbars >= '40' && lbars <= '50') {
				zerobars = '[█████▒▒▒▒▒]'
		} else if (lbars >= '50' && lbars <= '60') {
				zerobars = '[██████▒▒▒▒]' 
		} else if (lbars >= '60' && lbars <= '70') {
				zerobars = '[███████▒▒▒]'
		} else if (lbars >= '70' && lbars <= '80') {
				zerobars = '[████████▒▒]'
		} else if (lbars >= '80' && lbars <= '90') {
				zerobars = '[█████████▒]'
		} else if (lbars >= '90' && lbars <= '100') {
				zerobars = '[██████████]'
		} else { 
				zerobars = '[██████████]'
		} 

const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
				//ini ada 4 fake, jadi bisa dipilih
const fgif = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...{from: { remoteJid: "19527773705-1621306547@g.us" }},
  },
  message: {
    videoMessage: {
      title: `ZEROBOT`,
      h: `Hmm`,
      seconds: "99999",
      gifPlayback: "true",
      caption: `ZEROBOT`,
      jpegThumbnail: fs.readFileSync('./src/logo.jpg')
    }
  }
}
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: 'Subscribe', //Kasih namalu
                            orderTitle: 'YT ZEROBOT',
                            thumbnail: fs.readFileSync('./src/logo.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"RakuGans","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "19527773705-1621306547@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
                        }
	                  } 
                     }
const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"Indonesia","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
const fvideo = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...{from: { remoteJid: "19527773705-1621306547@g.us" }},
  },
  message: {
    videoMessage: {
      title: `ZEROBOT`,
      h: `Hmm`,
      seconds: "99999",
      caption: `ZEROBOT`,
      jpegThumbnail: fs.readFileSync('./src/logo.jpg')}}}
 const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `${ucapanWaktu}`,thumbnail: fs.readFileSync("./src/logo.jpg")}}}
const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {



					"productMessage": {

						"product": {

							"productImage": {

								"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",

								"mimetype": "image/jpeg",

								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",

								"fileLength": "43344",

								"height": 1080,

								"width": 1080,

								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",

								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",

								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",

								"mediaKeyTimestamp": "1612168223",

								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)

		},

							"productId": "3872465552870232",

							"title": `RP 50.000`,

							"description" : `${ucapanWaktu}`,

	"productImageCount": 1

						},

						"businessOwnerJid": "19527773705@s.whatsapp.net"}}}    
						
let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let sn = createHash('md5').update(m.sender).digest('hex')
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
        const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('December 31, 2021 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const ultah = new Date('January 3, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let rtotalreg = 0
    rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
  'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'xp': 'Exp & Limit',
      'rpg': 'Adventure Menu (NEW)', 
      'tutor': 'Tutorial ZEROBOT',
      'hadiah': 'Hadiah',
     ' apk': 'Apk Downloader', 
      'dewasa': '18+ Menu',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Gtwlah',
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'game': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'Video Menu',
      'anony': 'Anonymous Chat',
      'input': 'Virus Tapi Bukan Virus', 
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'tools': 'Tools Menu',
      'jadibot': 'Bot Numpang',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'info': 'Information',
      'thnks': 'Thanks To', 
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
${petik}Hello %name${petik} 
${petik}Im ${conn.getName(conn.user.jid)} And You Use Prefix %p${petik} 

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

`
    let header = conn.menu.header || '༺ %category ༻'

    let body   = conn.menu.body   || '│ 𖣵 %cmd%islimit' 

    let footer = conn.menu.footer || '╰────\n'
	    
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``

    let _text  = before + '\n'

    for (let tag in groups) {

      _text += header.replace(/%category/g, tags[tag]) + '\n'

      for (let menu of groups[tag]) {

        for (let help of menu.help)

          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'

      }

      _text += footer + '\n'

    }

    _text += after

    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: _p, uptime, muptime,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      exp: exp - min,

      maxexp: xp,

      totalexp: exp,

      xp4levelup: max - exp <= 0 ? `Siap Untuk *${_p}levelup*` : `${max - exp} XP Lagi Untuk Levelup`,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, coin, tigame, sn, 

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])

   ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)

   conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: true, thumbnail: ppnya, quoted: floc, contextInfo : { mentionedJid: conn.parseMention(text),

    externalAdReply: {

                    title: `Halo ${conn.getName(m.sender)}`,

                    body: `${ucapanWaktu} ${name}`,

                    mediaType: 2,

                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),

                    mediaUrl: 'https://youtube.com/c/ZEROBOT7'

                }

}})


  } catch (e) {

    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)

    throw e

  }

}
handler.help = ['menusecundario']
handler.tags = ['info']
handler.command = ['menusecundario']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = false

module.exports = handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}
