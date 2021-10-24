let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*PRIMER PASO CREAR UN NUMERO VIRTUAL*

👑💎Como hacer números virtuales💎👑

Los números virtuales son ideal para ocultar tu identidad... también son prácticos para usos de Bots ya que si te desactivan ese numero no perderás tu número oficial....

+1
TextNow(Canada🇨🇦 y Eeuu🇺🇸)

Hay varias para sacar +1 pero esta es sin duda la vieja confiable...
Create varias cuentas gmail (puedes usar temp mail) y abre la app da clic en "sign up" con email...
Códigos 
Eeuu: 420,303,580
Canada : 450
-Dale en todos los permisos... menos en el de ubicación...
 -Copia el numero obtenido y verifica si sirve para whatsapp...
La posibilidad es de un 50% 

Si no sirve le das en mi cuenta y luego en liberar número y elige otro....
-Si tampoco ese número nuevo funciona deberás cerrar sesión y crearte otra cuenta y así sucesivamente hasta que te salga uno que sirva para whatsapp

-En texnow se puede liberar el número sólo una vez cada 15 días..

-registra el numero y dale en llamada.. contesta la llamada y anota el codigo...

Link de descarga TextNow: https://play.google.com/store/apps/details?id=com.enflick.android.TextNow&hl=es_MX&gl=US
Link de descarga de temp mail: https://tempmail-email-temporal.uptodown.com/android/descargar
Link de un WhatsApp secundario (no es necesario desinstalar el WhatsApp de playstore: https://www.mediafire.com/file/uqua0uhfq6xrvqk/1%C3%84%C2%90%C3%8F%C2%B4%C3%8F%C2%B4%C3%A2%C2%B1%C2%AE_%C3%A2%C2%A9%C2%945_TERCIARIO.apk/file
- Si no esta disponible en tu pais contáctame y a la brevedad posible te proporciono un numero virtual 

*PRIMER PASO LISTO.. AHORA SIGUE INSTALACION DE APPS PARA PODER EJECUTAR EL BOT*



`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

