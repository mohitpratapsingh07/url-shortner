const express = require('express')
const urlModel = require('../model/urlModel')
const {handleGenerateShortUrl,} = require('../controller/url')
const route = express.Router()
route.post('/',handleGenerateShortUrl)

route.get('/:shortId', async (req, res) => {
    try {
        const shortUrl = req.params.shortId;
        console.log(shortUrl);

        const entry = await urlModel.findOneAndUpdate(
            { shortUrl },
            {
                $push: {
                    visitedHistory: { timestamp: Date.now() }
                }
            },
            { new: true } // ✅ return updated document
        );

        // ✅ handle invalid shortId
        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(entry.redirectedUrl);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

route.get('/analatics/:shorturl',async(req,res)=>{
    const shortUrl = req.params.shorturl
    const entry = await urlModel.findOne({shortUrl});
    if(entry)
    {
        res.json({
            "total clicks": entry.visitedHistory.length,
        })
    }
    else{
        res.json({
            "message":"Not Found"
        })
    }

})

module.exports = route