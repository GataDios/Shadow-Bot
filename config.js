global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '14509001764': { // put your number here
    name: 'The Shadow Brokers - Bot - Creador',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '14502326088': { // put your number here
    name: 'The Shadow Brokers - Bot',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
    '5219996125657': {
    name: '.',
    isDev: true,
    isReport: true,
    isCreator: true,
    isUpdate: true,
    isOwner: true,
    isowner: true
  },
  '14507004640': {
    name: 'Moderadora Estefania',
    isReport: true, // if true this number will send if user use command /report or /join
    isMods: true, // if true this number will send if user use command /moderadores or /creator
  },
  '14509900687': {
    name: 'Moderador Maximiliano',
    isReport: true,
    isMods: true, // if true this number will send if user use command /moderadores or /creator
  },
  '14504': {} // ignore if you don't want anything, like name dll
}
global.mods = ['1450'] // Want some help?
global.prems = [''] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'https://api.simsimi.net/v1/?text=" + encodeURIComponent(text) + "&lang=es',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'wa.me/19527773705'
global.author = 'The Shadow Bot is cool'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
