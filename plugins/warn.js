let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'Quien quiere ser advertido?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Etiqueta uno'
    if (!(mention in global.DATABASE._data.users)) throw 'El usuario no está registrado en la BASE DE DATOS!!'
    let user = global.DATABASE._data.users[mention]
    if (user.Banneduser) throw 'El usuario ha sido baneado!!'
    if ((user.warn * 1) < 3) {
        user.warn += 1
        m.reply('berhasil Warn')
        m.reply('Está advertido por el PROPIETARIO o MODERADOR!!, y ahora tienes *' + (user.warn + 1) + '* WARN. Recuerde que si recibe una advertencia 4 veces, se le prohibirá baneara', mention)
    } else if ((user.warn * 1) > 2) {
        let reason = (args.length > 0 || args[1] ? args.slice(1).join(' ') : '4 kali WARN') || '4 kali WARN'
        user.Banneduser = true
        user.BannedReason = reason
        user.warn = 0
        m.reply('*Ha sido baneado por recibir 4 advertencias*')
        m.reply('*Estás prohibido por recibir 4 advertencias*\n *HUBUNGI* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
    }
}

handler.help = ['warn @mention']
handler.tags = ['owner']
handler.command = /^warn(user)?$/i
handler.mods = true

module.exports = handler
