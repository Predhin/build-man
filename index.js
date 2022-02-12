const Version = require('./version.js');
const Setter = require("./setter.js");
const Archiver = require("./archiver.js");
module.exports = (build) => {
    const appVersion = process.env.npm_package_version;
    const archiveFilepath = build.archiveFilepath;
    // if buildno is provided have that else generate one based on app version provided in package.json
    const version = new Version(appVersion, build.dist, build.build_no);
    new Setter(version.versionNo, build.dist, build.main);
    console.log(`Version number: ${version.versionNo} pasted to the build artifact file - ${build.dist}/${build.main}`);
    if(archiveFilepath) {
        const archiver = new Archiver(build.dist, archiveFilepath);
        archiver.archiveFile().then(()=>{
            console.log(`The artifact created successfully!`)
        });
    }
}