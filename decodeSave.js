const fs = require('fs')
const Crypto = require('./crypto.js')
let crypto = new Crypto()

let gdSave = process.env.HOME || process.env.USERPROFILE + "/frenzjay/GD-Save-Decoder/blob/master/CCLocalLevels.dat"

fs.readFile(gdSave, 'utf8', function (err, saveData) {
    if (err) return console.log("Error! Could not open or find GD save file")
    let decoded = crypto.decode(saveData)
    if (!decoded) return
    fs.writeFileSync('CCGameManager.xml', decoded, 'utf8')
    console.log(`Saved!`);
})
