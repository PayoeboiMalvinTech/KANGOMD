const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "⏳",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =` *⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*, am alive
*╭─────────────···▸*
*│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*│▸* *ʜᴏsᴛɴᴀᴍᴇ* : *[${os.hostname()}]*
*│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖𝙺𝙰𝙽𝙶𝙾 𝙼𝙳❖*

*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

> ©ρσωєяє∂ ву нє¢тσя мαηυєℓ
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
