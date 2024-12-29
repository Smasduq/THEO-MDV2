const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_00_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZeSs3WXVuVlRmcWg3d3N1L0IraEtjMEdIZ1J5NGV3TXgvNmdCUnNjTVRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDE1NDM5NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE5NkRGRTAxMUVDN0NEMTdFMTBFN0ZBMDZGNTYwRTVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQ4NDQwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDE1NDM5NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCNEFCRTU4MUYzMkMxQTcxQzMwQjJCNjc3QjFGNDY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQ4NDQwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDE1NDM5NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5MjM1ODlFNkNCOTZBMkYxMkJBQzcyQzczOEYyOTI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQ4NDQwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHdDQ1NTdBUFRUNmJCVGQ0WXJrME9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3OTA2ZTY4LTU4ZGUtNDU5Ni1iMGI3LTQ1N2NkNjhmYThjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDI0NSxcbiAgICAgIDgyLFxuICAgICAgNDYsXG4gICAgICAxNTgsXG4gICAgICA3LFxuICAgICAgMTU0LFxuICAgICAgMTA0LFxuICAgICAgMTkwLFxuICAgICAgMTUzLFxuICAgICAgODIsXG4gICAgICA3NCxcbiAgICAgIDIwOSxcbiAgICAgIDYwLFxuICAgICAgMjEzLFxuICAgICAgMjUwLFxuICAgICAgMjAsXG4gICAgICAxMTAsXG4gICAgICAxNDAsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAyMTUsXG4gICAgICA5OSxcbiAgICAgIDQ0LFxuICAgICAgMjEyLFxuICAgICAgMjAzLFxuICAgICAgNyxcbiAgICAgIDU4LFxuICAgICAgMTI4LFxuICAgICAgMjMzLFxuICAgICAgMTIyLFxuICAgICAgMTEwLFxuICAgICAgOTMsXG4gICAgICAyMDUsXG4gICAgICA4LFxuICAgICAgMTMxLFxuICAgICAgNTgsXG4gICAgICAxODksXG4gICAgICAyMDQsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFdYRVRQSEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDE1NDM5NjU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg2NjIyNTM2OTA5NjM6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTbWFzZHVxXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhWbGM4RUVPdkh4YnNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDUUtwR2haaVROWFpISzJxc3Zoa3RGWW5nTThvdVUveEdkWTkrRUpPd0JZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNwZFIyZEpITzNHa0xIUll3M20yKzdaSFZ1aENUTzZSWC9YeE5GYU9POFlma3ZFa2NDMUtLZUZLdDdFMWFaTkJ6THdkdEQyM0pnTHR1M2VaZDF1SkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk05b2VqeWN0VDQvQ3g4WHJRc0ZvNW9vVSt4OHAxalJubjNSckVzVGNRZWxSL05ZRlZyYllLOTMzSkNuUklGNUsxOU5oTTFhSlUxS2ZEalFlWFRscURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDE1NDM5NjU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ4NDM5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1Ed1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUR3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVWRpQ3ZEUHBNMUZVbHFwMEJaNTFLTTd0QXpxd2ZnUmx1V01YQW04KzFVaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM5NzcxODQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU0ODE5NzY3NDVcIn0iCn0=" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "Smasduq",


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
