class Reader {

    static readJsonFile(filePath){
        const rawdata = fs.readJsonFile(filePath)
        return JSON.parse(rawdata)
    }

}

module.exports = Reader