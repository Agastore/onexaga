require("./all/module.js")
//========== Setting Owner ==========
global.owner = "6287717682382"
global.namaowner = "Angga"
global.namabot = "Aga Oficial"
//======== Setting Bot ========
global.foother = "©AgaOficial"
global.packname = "Dibuat oleh Angga"
global.author = "Angga"
global.footer2 = '👾'
//========== Setting Event ==========
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false
//========= Setting Message =========
global.msg = {
"error": "\ Maaf ada yg salah\`","done": "\`Berhasil\`","wait": "\`Mohon tunggu\`", 
"group": "\`Group Only\`","private": "\`Private Only\`", 
"admin": "\`Admin Only\`","adminbot": "\`Dapat digunakan ketika bot menjadi admin\`", 
"owner": "\`Owner Only\`","developer": "\`Fitur Khusus Delta\`"
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})