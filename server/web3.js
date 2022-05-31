const socketNode = 'ws://some.local-or-remote.node:8546'
var Personal = require('web3-eth-personal');
var personal = new Personal(Personal.givenProvider || socketNode);
var Accounts = require('web3-eth-accounts');
var accounts = new Accounts(socketNode)

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

var net = require("net");
web3.setProvider(new Web3.providers.IpcProvider("../contract/ethereum/data/geth.ipc", net))


module.exports = web3;