//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rehmanrajpoot644@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Bootu-786/PRINCEMD";
global.gurl = process.env.GURL || "https://api.whatsapp.com/send?phone=+923145269482";
global.website = process.env.GURL || "https://api.whatsapp.com/send?phone=+923145269482";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null";
global.devs = "923145269482";
global.sudo = process.env.SUDO || "923145269482";
global.owner = process.env.OWNER_NUMBER || "923145269482";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZORWFVOHh6R21IV2FiUnN0UEpMUFBla3pPaW9CUVNZT2s3Ym1McVFXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUo3dUYyeGpJV3Y1UTBCZGhObDdCY2Qxd01veWZvS3lvWjJucitNNFpYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSWxidm1oV2ZNUzhZemFZMFpNMlRoUGtzUFFOOVNRWS9NL3duYXcwbW1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwZ2NrMGhuazBsMzNOSW1sU3E0VFY4eWxzYlJJNWxCWWpnVmRXNkdLOFZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHWFJnSnVIRXhya0NDSlRGYVhWWG5vT282S3FEbkNReEZDV0c1a3cyMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJuSFZmZEM4ckNONTg0ZTZCTWZ3VEUxbFpFTTBEdEpjUkRNRUF3Y0cwRXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtHU2hSVXg1cWwxVE5qRUl0WUFtMjlxaVN6YjJUSDJteDZaZ0hDM0RWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMngxVk16OUVPUks5alNISW1oL0NkbWJHSHUxZjRiNUYxTGU5blB6TDNRYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRNSWpRTEZ4dnE1dGRsQkhIZlN5Rjc2OW0rdDRyQkZqUHlzTVE0Z0cvTlhUTWpRd3BhY0gvRnFGRGV0bnZLMFAxcWR4UURwUHluNyt1eFd0cjQxSmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiIzdzgwR1ZDQVVQaUhDNkpoajJwZjJKSmxWa1YySTNGaDFBa3hGK0RBZE9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1OFBRLXBPSVJaT0xZbHRjY3VQcWFRIiwicGhvbmVJZCI6ImQzOGUwYTQxLTAwMjQtNGUyYi1hZjMyLWUyZDEyNTdhMmUyNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVFRPcmEwSDQwa1ZpZzZWTlNxbW1kM3EvRjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWVjc2xUdDFPb0pwWS9mTzZ2L2xZenhaN21vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVNUVRZNzlNIiwibWUiOnsiaWQiOiI5MjMwNDkxMDg0MDg6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG38J2RufCdkbDwnZG18J2RqvCdkawgMi4wIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOR3FxSlFIRVAzajVMUUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqVGM0Y2ZoT1FkR0wyZndKQk52OGRnYnZ6TnQ2bVdoSG5wM2lNbG1HcG5JPSIsImFjY291bnRTaWduYXR1cmUiOiJmWkRJaUQyM1pOcTUwYWZCSFJiUXpjT3BWZWx5K1hVTW01U3I3Kzd4cnU2YVZaQ0pEWm5YejAyaU5XQVgvME8vTExrdHZJYkoxY3dMN0Y0dERrcFJBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2RXS2hPdWxRektPT2hsWFJGQlBZUG5ON1VtOWFPdDZaVFFaYVNUVHU5T21xMXNFUzdXVm5UeTc3YnFRV3VkT0RlVm5RN29iV1ppVng1NmNuNjBSaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNDkxMDg0MDg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZMDNPSEg0VGtIUmk5bjhDUVRiL0hZRzc4emJlcGxvUjU2ZDRqSlpocVp5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzE1ODUwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU00TSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "POWERED BY PRINCE",
  author: process.env.PACK_AUTHER || "PRINCE",
  packname: process.env.PACK_NAME || "♥PRINCE",
  botname: process.env.BOT_NAME || "PRINCE",
  ownername: process.env.OWNER_NAME || "PRINCE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PRINCE").toUpperCase(),
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
