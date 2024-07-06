Iconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254710424257";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_22_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZUZXdtQXAzaHJWUGlNUGR0M0JBRTk5djRXSUhjKysvWEN4SlVvWjM4Q2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzEwNDI0MjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MDQ3MDE5QTRGODU3OUU3RkE4NkE5MUEzQTg1QkE2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNTQxMzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTA0MjQyNTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYwQTc2MjNFQkE1ODJGM0MwQTQ0NkVEMEQ4QTcyRTdEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1NDEzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvRmp5Ml82MFJtS0FMT1gxeWJoVTVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIxZWRiMGY1LTE1YWItNDk0Mi1hNzAwLTEwZTIyYWFkNzVhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDEwLFxuICAgICAgMTAsXG4gICAgICAyMDMsXG4gICAgICAyOCxcbiAgICAgIDIyNyxcbiAgICAgIDIwNSxcbiAgICAgIDU5LFxuICAgICAgMTQwLFxuICAgICAgMjIwLFxuICAgICAgNTMsXG4gICAgICAyMjYsXG4gICAgICA3MCxcbiAgICAgIDc4LFxuICAgICAgNDcsXG4gICAgICA3NixcbiAgICAgIDg3LFxuICAgICAgMTM5LFxuICAgICAgMjA0LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgNTgsXG4gICAgICAxNzEsXG4gICAgICAyMDMsXG4gICAgICAxNDksXG4gICAgICAyLFxuICAgICAgMjQ4LFxuICAgICAgMTkxLFxuICAgICAgMjQzLFxuICAgICAgOTgsXG4gICAgICA3NSxcbiAgICAgIDAsXG4gICAgICAzNSxcbiAgICAgIDE2MCxcbiAgICAgIDYsXG4gICAgICAyMjcsXG4gICAgICAyMixcbiAgICAgIDcsXG4gICAgICAxNjMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlZLV01RS1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMDQyNDI1NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXJhc3NcIixcbiAgICBcImxpZFwiOiBcIjI3NTE4MzMzNjIyMjk2MDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TNjZ0a0dFTEw5bzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibFdZUUc0TmxueWhNZVhEK3N6MFZLVkRMZlVadUkvNUlyekNtTm9CWXZEST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5alYvenRwMi9zWERESE5ZaDJHOHY5NE5TMk5kSVhQU09rZG5LZ2laWnVSTE8zNkdGbjBhSG9iZ20rNkh3RUxXOGtiWWJSWXI4YjNjZUpIenRxREhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSa3VBMUJZREdRaCswVkV2S0l6SHgrY1JOaFlNNGx0YUk1R2RvSDRmdi9OaEtrb0o0a2ZPTkpCMUpMek9CSU9CMlRoY3J0OHpaY0VaWXc0SU5VUzFpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTA0MjQyNTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1NDEzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9tMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT20yLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3dQVnpaVk8vWVd5TVZra2dCZzVXaElxalVMamY2R0xyL04ydytzZFhXbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzk5MDAzNDYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNTQxMzUzNzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Mchelule",
  ownername:process.env.OWNER_NAME|| "Mrass",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
