import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `     ┣ *𝑴𝑬𝑵𝑼 𝑯𝒀𝑷𝑬𝑹𝑿* ┫
┏━━━━━━━━━━━┓
┣ *🧸❤️‍🩹𝑯𝒚𝒑𝒆𝒓𝑿 𝒕𝒆 𝒔𝒂𝒍𝒖𝒅𝒂* @${m.sender.split`@`[0]}
┣ 
┣ 🚀𝑷𝒐𝒓𝒇𝒂𝒗𝒐𝒓 𝒖𝒔𝒂 𝒍𝒐𝒔 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆𝒔 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒎𝒆𝒏𝒖𝒔 𝒅𝒆 𝑯𝒚𝒑𝒆𝒓𝑿:
┣ ✅.𝒎𝒆𝒏𝒖𝒈𝒓𝒖𝒑𝒐𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒇𝒇
┣ ✅.𝒎𝒆𝒏𝒖𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒍𝒊𝒔𝒕𝒂𝒔𝒇𝒆𝒎
┣ ✅.𝒎𝒆𝒏𝒖𝒍𝒊𝒔𝒕𝒂𝒔𝒎𝒂𝒔𝒄
┣ ✅.𝒎𝒆𝒏𝒖𝒂𝒑𝒌𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒋𝒖𝒆𝒈𝒐𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒊𝒎𝒂𝒈𝒆𝒏𝒆𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒅𝒐𝒓𝒆𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒆𝒇𝒆𝒄𝒕𝒐𝒔𝒍𝒐𝒈𝒐𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒇𝒓𝒂𝒔𝒆𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒃𝒖𝒔𝒄𝒂𝒅𝒐𝒓𝒆𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒉𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒆𝒄𝒐𝒏𝒐𝒎𝒊𝒂𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒐𝒘𝒏𝒆𝒓𝒔
┣ ✅.𝒎𝒆𝒏𝒖𝒍𝒂𝒃𝒊𝒃𝒍𝒊𝒂𝒙
┗━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🚀𝑬𝒍 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆𝒏 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓𝒇𝒂𝒗𝒐𝒓 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 .𝒐𝒘𝒏𝒆𝒓 𝒚 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menux|menúx|memux)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
