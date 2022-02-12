const fs = require('fs');
const replace = require('replace-in-file');
module.exports = class Setter {
    constructor(versionNo, distFolder, mainFile) {
        this.pasteBuildNo(versionNo, distFolder, mainFile);
    }
    pasteBuildNo(versionNo, distFolder, mainFile) {
        replace.sync({
            files: `${distFolder}/${mainFile}`,
            from: /$(?![\r\n])/gm,
            to:  `console.log('${versionNo}');`,
            countMatches: true
          });
        // fs.appendFileSync(`./${distFolder}/${mainFile}`, `console.log('${versionNo}');`);
    }
}