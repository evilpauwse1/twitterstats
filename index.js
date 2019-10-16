exports.testPage = function(authToken,twitterSes,link) {
    let pup = require("pupeteer");
    let aT = authToken;
    let tS = twitterSes;
    (async () => {
        const browser = await pup.launch({headless: true, args:['--no-sandbox']});
        const page = await browser.newPage();
        await page.setCookie({name:"auth_token",value:aT,domain:".twitter.com"},{name:"_twitter_sess",value:tS,domain:".twitter.com"});
        await page.goto(link);
        return page.response;
    })
}