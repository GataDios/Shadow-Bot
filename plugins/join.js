let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
    conn.req = conn.req ? conn.req : {}
    let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
    let [_, code] = link.match(linkRegex) || []
    if (!code) throw 'Link invalido'
    if (isMods || isOwner || m.fromMe) {
        let res = await conn.acceptInvite(code)
        m.reply(`*Se unió con éxito al grupo ${res.gid}*`)
    } else {
    
        let name = conn.getName(m.sender)
        conn.req[m.sender] = {
            name,
            text: 'Kak join group ku donk, ini linknya \n```https://chat.whatsapp.com/' + code + '```',
            date: new Date * 1
        }
        for (let jid of Object.entries(global.Owner).filter(v => v[1].isReport).map(v => v[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply('*dari:* ' + m.sender.split('@')[0] + '\n*Link:* ' + link, jid)
        m.reply('*_En proceso.. le llego notificacion a todos mis moderadores, tan pronto puedan me agregaran al grupo_*\n\n*_No hacer spam del comando con el mismo enlace o seran bloqueados del uso del Bot_*\n\n*_El Bot no se agrega a grupos con menos de 15 participantes_*')
    }
}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']

handler.command = /^join$/i

module.exports = handler

