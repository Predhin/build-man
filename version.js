const fs = require('fs');
module.exports = class Version {
    constructor(appVersion, distFolder, buildNo) {
        this.versionNo = buildNo ? `${appVersion}.${buildNo}` : `${appVersion}.${this.generateUniqueIdentifier()}`;
        this.createVersionFile(distFolder);
    }
    generateUniqueIdentifier() {
        var today = new Date();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        month = this.padValue (month);
        date = this.padValue(date);
        hour = this.padValue(hour);
        minute = this.padValue(minute);
        second = this.padValue(second);
        var monthAndDay= `${month}${date}`
        var time = `${hour}${minute}${second}`;
        var hash = `${monthAndDay}${time}`;
        return hash;
    }
    createVersionFile(distFolder) {
        fs.writeFileSync(`./${distFolder}/.version`, this.versionNo);
    }
    padValue(value) {
        return value <=9 ? `0${value}`: value;
    }
}
