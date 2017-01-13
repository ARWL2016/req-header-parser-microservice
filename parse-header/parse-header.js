
function parseUserAgent(header) {
    let parsed = header.split(' ').slice(1, 4).join(' ');
    return parsed.slice(1, parsed.length -1);
};

function parseAcceptLanguage(header) {
    return header.split(",")[0];
}

module.exports = {
    parseUserAgent, 
    parseAcceptLanguage
}
