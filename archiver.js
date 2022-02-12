const archiver = require("archiver");
const fs = require("fs");

module.exports = class Archiver {
    constructor(distFolder, archiveFilepath) {
        this.distFolder = distFolder;
        this.archiveFilepath = archiveFilepath;
    }
    archiveFile() {
        // const targetFolder = path.dirname(this.archiveFilepath);
        // const filename = this.archiveFilepath.replace(/^.*[\\\/]/, '');
        return new Promise((resolve, reject) => {
            const output = fs.createWriteStream(this.archiveFilepath);
            const archive = archiver('zip', { zlib: { level: 9 }});
            archive.pipe(output).on('error', err => reject(err));
            output.on('close', () => resolve());
            archive.glob([`**/!(*.zip)`,'**/.*'], {cwd: this.distFolder});
            archive.finalize();
        });
    }

}