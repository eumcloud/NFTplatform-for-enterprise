const express = require("express");
const router = express.Router();

const web3 = require("../web3");
const kcontract = require("../contract/getcontract");

router.get("/", (req, res)=>{
    res.render("index");
})


let wallets = web3.eth.personal.getAccounts().then(console.log);

router.get("/", (req, res)=>{
    
    res.render("index", { wallets: wallets }) 
});

router.get("/newaccount", (req, res)=>{
    
    let address = web3.eth.personal.newAccount('1').then(console.log);
    res.render("index", {wallets: wallets, address: address})
})


module.exports = router;