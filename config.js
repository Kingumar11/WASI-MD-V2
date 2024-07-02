//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2349129502738@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "2349129502738,2349129502738";
global.owner = process.env.OWNER_NUMBER || "2349120502738";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFXNkJWenQ0YTNKUnZyWUJZS2JFT3VJUFQ1YmVuSTlDc0h6bUFJMVVsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3plMmIyNjRmRjJtWGZLQkdrMjR0aUoyRGw5SHhoSWRxQmNmN05aTW1SWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTVpCR1lkTHhuNlZrdUZRNlZYbVpxMXdMWjQzdEZNUjBCc1Y0QklucTBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQV2x6Y2RucU5haU9QaHBIVXdmcjVSNHBLZG9MTWMyOFYzZUg4UTFCRkhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPd0FoK2k0Tzd4K0pEYnNOanc3cngvdUYwRzVHTFVXY0RwblR3YVNma289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN5QUVUMlhLaFYraEJuZ3hUbG05NW41OU11Q29rWE4zamZhRkdnT1RlbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUQ4dms0V2lYdlZuRGJCejB1dU5RQ2RCTWxWREhpQlhPZDFLa2pINkdHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2xpTWZVeUJFcnZ3YS92S2llUFlVYkRZUXAxOUNOYWFrdTM5dUhQY2drcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRXY1BFbmdIcGhScjZnWDJ6N2NIZ2ZNVkxQRTN0QzNoR2R5UW1xMU80NDc1UGpUQnpDQ2RIZEJrRmpxYWxHM094cVF0TE04RnhxQjRwcmFCMEpzbkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJvcEhaY3J1NEdaczN5YlNHSWNWNml5ZjFsU2s4bUlCelFmaEx5OUI3dTFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXQVNHSGZHX1FxNjR0ZmpPSkJmR2hnIiwicGhvbmVJZCI6IjQxZjVlMGI4LWFlOTctNDU5NC1hNmFiLWI4MGJiNDI3M2FmOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFb0toODJ0bjVUekRwR3lYNUpPVjBJc3BTRmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGdBaHBycEwrbFJXdkwrM2RrMklPNW03c2pZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNMR1ZaNjk0IiwibWUiOnsiaWQiOiIyMzQ4MTQyNjY2NTYyOjE4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOM2JqN3dDRU15eGpyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsUnNPZ3BsZjE5eHpiUHN3THZ5R2c5aDY1RG5tb25QQmlNQ0JEQnllTFVFPSIsImFjY291bnRTaWduYXR1cmUiOiJ3NjBKdGlWdko2Z0FUdDNIeXI5R1NWQVIwSnZjZlBMa1Izb3VSWFV1c25XVWJ3Z1NFNEFKL01vYTE2VGJ2RTNpWWhXQkI5UjF2bEJVOVJxTmZ6SWRDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVnhMYkRhL1VuQmYyeUxldjh4MFQ5OGN6OEFXVEp1akNoNVFCN3BQUEdaeGRjYkl4NjBYMVRCTnVyK3hpRVpNYndpcEZzdy95ZE52T0l2bkxiTjVsQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQyNjY2NTYyOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpVYkRvS1pYOWZjYzJ6N01DNzhob1BZZXVRNTVxSnp3WWpBZ1F3Y25pMUIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5MDAzNzd9|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0F6dHJxQ2xENUdCRjhrR0g5UnJsS2UyU3IzbllCZFhsZW5PRjc5VDBGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9pQVQrdkpqUTNvaS9DZWZyb1d0cHhxcE9WZjhCWFRlVUV3ZHRPSjNHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRHFlOXRXZTgwWkZtSnVUQ1hQU2paTG44MjNhM2lVSzJVQWU5WEh0blhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNM2pPdmVqdWhaamNqTkcrSVBmR09IbEpwN3c2UG5JTkk3UXFiWEY0Y0RnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKaFZrZXlvUGxyQUxxWisyemJSdFBHcFpRZitkQXF2VTBYSVdSNm5Wbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE3cUx1TUlnT2ozT2Y3d2FUVmplQXJBRzFQZjVrMmlwSEZ4SG95U1FWRTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05JMGJ0dXRwZXdJNm5LWllqUk1wY2dLQUxsSnZBWkNyc2tlaUZ2enpFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGJJUE9yNmRFeWxQVStLY0d4MTNxUzg0Szk2R3BUMlRNSFRpOVhwdW0xdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZnekhhN21yUXBxOCs3MVhMTHprRGdSbldvR2o5bkh1bW5hUFZkMm9WTnlKUTB4enlKc0JlM29oSnlHbGtzMVZiNjFsVjc0YzJheDZhcFBMeGtEaGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiIxcVdqeWFuRTB0N1pzL2hzWXlzYnlnMXdER2lvNmNRY2VsUFVwZlBOb3o4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJMko3QWNqaVExR2VaSFFpaUxOcXFRIiwicGhvbmVJZCI6ImVmNDhhNjQxLTNlNDEtNGQ0Zi1hYTMyLTg4MzY4OTMxMDMwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTFltT05Db1VHQUlGajVMUExHTFJEVldWLzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlZodnNUMHRmclF5UE5URlowcXdzZDkvRExJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFFWkNIWDI2IiwibWUiOnsiaWQiOiIyMzQ4MTQyNjY2NTYyOjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcmJqN3dDRU0yTmg3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsUnNPZ3BsZjE5eHpiUHN3THZ5R2c5aDY1RG5tb25QQmlNQ0JEQnllTFVFPSIsImFjY291bnRTaWduYXR1cmUiOiJJN29PYmxIWUNvck81RTY5L3pzeW4rRkVCRFdFdVVmQmFGUTQyV2xQaDhYWVZDK1c0ZmRqNk4wcmI1WTJUeXk4azg1U3FkQ09nUjNyVm1oampCUWFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVFVuYTlrVzJNN2FRRDdNc05QMWpwM0dpaTV3ZlBtek92M1V0UFVpdzM5eVR3WHVrQzVCVHFVdVd2cEltYjZNc0xpR09wUmlkemt4VGd2T3pnQ2R6aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQyNjY2NTYyOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpVYkRvS1pYOWZjYzJ6N01DNzhob1BZZXVRNTVxSnp3WWpBZ1F3Y25pMUIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3ODEwODV9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
