const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️ KANGO MD Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: 𝙺𝙰𝙽𝙶𝙾 𝙼𝙳
*| ɴᴜᴍʙᴇʀ*: 233509977126
*| ʏᴏᴜᴛᴜʙᴇ*: https://youtube.com/@official_manuel 
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029Va8YUl50bIdtVMYnYd0E

> © ρσωєяє∂ ву нє¢тσя мαηυєℓ
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/Dn7wP0C.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
