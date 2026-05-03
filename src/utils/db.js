const fs = require('fs');
const p = require('path').join(__dirname, '../data/warnings.json');
function getW() { try { if(!fs.existsSync(p)) fs.writeFileSync(p,'{}'); return JSON.parse(fs.readFileSync(p)); } catch(e) { return {}; } }
function saveW(d) { fs.writeFileSync(p, JSON.stringify(d, null, 4)); }
module.exports = {
    addWarn: (uId, gId, r, m) => { let d = getW(); if(!d[gId]) d[gId]={}; if(!d[gId][uId]) d[gId][uId]=[]; d[gId][uId].push({r,m,d:new Date()}); saveW(d); return d[gId][uId].length; },
    getWarns: (uId, gId) => { let d = getW(); return (d[gId]&&d[gId][uId]) ? d[gId][uId] : []; },
    clearWarns: (uId, gId) => { let d = getW(); if(d[gId]&&d[gId][uId]) { delete d[gId][uId]; saveW(d); return true; } return false; }
};