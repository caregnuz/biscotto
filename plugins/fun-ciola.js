let handler = async (m, { conn, command, text }) => {
let ciola = `* CALCOLATORE DI CIOLA *
*la ciola di  ${text}è lunga ${Math.floor(Math.random() * 1)}%* *di 100*
*?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['ciola ']
handler.tags = ['fun']
handler.command = 
export default handler
