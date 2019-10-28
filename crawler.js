const Crawler = require("crawler");
const fs = require('fs')
let set = new Set; // Array of what was crawled already
var arr = []
let c = new Crawler();

function crawlAllUrls(url) {
    //console.log(`Crawling ${url}`);
    c.queue({
        uri: url,
        callback: function (err, res, done) {
            if (err) throw err;
            let $ = res.$;
            try {
                let urls = $("a");
                Object.keys(urls).forEach((item) => {
                    if (urls[item].type === 'tag') {
                        let attribs = urls[item].attribs;
                        if (attribs.href && !set.has(attribs.href)) {
                            href = attribs.href.trim();
                            set.add(href);
                            
                            if(attribs.href.startsWith('http')) {
                                arr.push(JSON.stringify({
                                    "href": href,
                                    "title": attribs.title
                                }))
                                console.log("Crawling " + href)
                                crawlAllUrls(attribs.href)

                            }

                                
                            

                        }
                    }
                });
                var link = arr.shift()
                fs.appendFile('data.json', link, function(err) {
                    if(err)
                        console.log(err)
                } )
                
            } catch (e) {
                console.error(`Encountered an error crawling ${url}. Aborting crawl.`);
                done()

            }
            done();
        }
    })

}

crawlAllUrls('https://www.google.com/')
