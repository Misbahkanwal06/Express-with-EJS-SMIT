const express = require('express');
// MIDDLEWARE FUNCTION

function apiKey(req,res,next) {
    const api_key = "12345"
    const userApiKey = res.query.api_key;

    if(userApiKey && (userApiKey === api_key)){
        next();
    }
    else{
         res.json({
            message: 'Error 404'
         });
    }
}

module.exports = apiKey;