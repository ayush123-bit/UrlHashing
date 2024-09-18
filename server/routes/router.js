const express = require('express');
const router = express.Router();
const Url = require('../models/url'); 
const crypto=require('crypto');
router.post('/hash-url', async (req, res) => {
    const { url } = req.body;
  
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
  
    const hashedUrl = crypto.createHash('sha256').update(url).digest('hex').slice(0, 8); // Shorten hash if needed
  
    try {
      // Save to database
      const urlRecord = new Url({ originalUrl: url, hashedUrl, clicks: 0 });
      await urlRecord.save();
      
      res.json({ hashedUrl });
    } catch (err) {
      res.status(500).json({ error: 'Error saving URL to database' });
    }
  });
  
  // Redirect using hashed URL and track clicks
  router.get('/:hashedUrl', async (req, res) => {
    const { hashedUrl } = req.params;
  
    try {
      const urlRecord = await Url.findOne({ hashedUrl });
  
      if (!urlRecord) {
        return res.status(404).json({ error: 'URL not found' });
      }
  
      // Track click (You can also implement single-use or limited-use logic here)
      if(urlRecord.clicks <6){
        urlRecord.clicks += 1;
      await urlRecord.save();
  console.log("h")
      res.redirect(urlRecord.originalUrl);
      }else{
  res.send("Your hashed url is expired.")
      }
    } catch (err) {
      res.status(500).json({ error: 'Error fetching URL from database' });
    }
  });
module.exports = router;