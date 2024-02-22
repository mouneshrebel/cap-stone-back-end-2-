const express = require('express');
const router =express.Router();

router.get('/',(req,res)=>{
    res.send ({data: "welcome to Mounesh ARKM Dairy Manger!!!!"});
})

router.post('/',(req,res) =>{
    res.send({data: 'hi this post method!!!!!!'});
})

router.delete('/',(req,res) =>{
    res.send({data: 'hi this delete method !!!!!!'});
})

router.patch('/',(req,res) =>{
    res.send({data: 'hi this patch method !!!!!!'});
})



module.exports = router;