import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🌴HOLA YA TE ENCUENTRAS🍃 REGISTRADO EN MI BASE DE DATOS SI DESEAS ELIMINAR☘️ TU REGISTRO PARA REGISTRARTE OTRA VEZ COMANDO🌱\n/unreg <NUMERO DE SERIE>`
  if (!Reg.test(text)) throw `🌹HOLA TE INFORMO QUE HAS ❌ FALLADO CON EL REGISTRO YA TE LO HAS HECHO CORRECTAMENTE✨TE DOY UN ☘️ 𝙴JEMPLO\n/Reg Yovani .21`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🍃HOLA TE INFORMO QUE EL NOMBRE NO PUEDE ESTAR VACIO EN EL REGISTRO TIENES QUE PONER TU NOMBRE 🍃'
  if (!age) throw '☘️HOLA TE INFORMO NO PUEDE ESTAR VACIO TU EDAD EN EL REGISTRO TIENES QUE PONER TU EDAD🌱'
  if (name.length >= 30) throw '☘️HOLA 😊 OYE PUEDES PONERUN NOMBRE MAS CORTO🌴YA QUE EL QUE ESTAS DEMASIADO LARGO POR FAVOR ESCRIBA UNO MAS CORTO🌹️' 
  age = parseInt(age)
  if (age > 100) throw '✨HOLA 😅 OYE POR FAVOR ☘️ PUEDES PONER TU EDAD MAS BAJA O  ACADO ERES ANCIANO🤭?'
  if (age < 5) throw '😒PORFAVOR VAMOS NO ESTEN JUGANDO🤨 COMO UNO NIÑO DE CINCO AÑOS VA A PONER ESCRIBIR😅'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`╭「*BOO BOT*」
│➯⛥❏[🌴] *HOLA YA ESTAS REGISTRADO*
│➯⛥❏[🤴] *NOMBRE* ${name}
│➯⛥❏[🏧] *EDAD* ${age} AÑOS 
│➯⛥❏[™️] *NUMERO DE SERIE*
│➯⛥❏[✔️]${sn}
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(Reg|reg|registrar|reg(ister)?)$/i

export default handler
