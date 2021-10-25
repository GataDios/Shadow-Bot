let handler = async m => m.reply(`
「 THE SHADOW BROKERS - BOT 」

Información del Bot
- Propietario: Bruno sobrino 
- Numero del propietario: +1 (952) 522-0880
- Link directo: https://api.whatsapp.com/send?phone=19525220880
 
Créditos del diseño del menu: 💮Oreki-san💮
Numero: +51 936 366 761
Link directo: https://api.whatsapp.com/send?phone=51936366761_

Reglas e información sobre el Bot: https://the-shadow-brokers-bot-info.blogspot.com/2021/10/the-shadow-brokers-bot.html
⚠️-EL DESCONOCIMIENTO DE LO MENCIONADO EN ESE ARTICULO NO EXIME A LA PERSONA DE LAS REGLAS Y SANCIONES QUE DE ELLA EMANAN-⚠️

Grupo oficial del Bot: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ

Prefijo del Bot: MULTI-PREFIJO
(#, $, ?, !, /, .)

#OTROSMENUS
#MENUDEJUEGOS
#MENUDEECONOMIA
#MENUDEDESCARGAS
#MENUDEGESTIONDEGRUPOS
#MENUDECREADORES
#MENURANDOM
#MENUDECOMANDOS+18
#MENUCOMANDOSEXTRAS
#MENUCHATANONIMO
#MENUCONVIERTETEENBOT
#MENUVIRTUALNUMBERYBOT
#MENUPROPIETARIOYMODERADORES

<NOTA/>

° Manda mensaje al propietario del Bot para solicitar que te agreguen a usuarios premium y poder usar el Bot sin limites 
- El mensaje debe incluir el nombre del grupo en el que estas con el Bot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['menu2']
handler.tags = ['info']
handler.command = /^menu2$/i

module.exports = handler
