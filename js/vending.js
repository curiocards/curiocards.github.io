
// <div id="myval"></div>
  $( document ).ready(function() {
    let Web3 = require('web3');
    let web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    let vendingJson = '[{"constant":true,"inputs":[],"name":"available","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"CloseVending","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimFunding","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"holdingAddress","type":"address"},{"name":"token","type":"address"},{"name":"budget","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]';
    let contractABI = JSON.parse(vendingJson);
    console.log(contractABI);

    let MyContract = web3.eth.contract(contractABI);

    // input values here
    let card10addr   = "0x72b34d637C0d14acE58359Ef1bF472E4b4c57125";
    let card10vend1addr = "0x46C4723111e2bAFeF7d5d0664B3F7BC68D875DeA";

    let card17addr   = "0xE0B5E6F32d657e0e18d4B3E801EBC76a5959e123";
    let card17vend1addr = "0xA314D1C078239D4571d564a9e0ba6E2B4C32FBF2";

    let card18addr   = "0x8ccf904E75bC592DF3dB236cD171D0CAF0B2bbCB";
    let card18vend1addr = "0x9Bd4F745e5052058718803D07380aa8c87AEBD2a";

    let card19addr   = "0x6b3485C6Eb9027F4f02e495f42708b5896E2579B";
    let card19vend1addr = "0x8Bc133A6026522E79f78c897893911BBe755Bb4d";

    //outputs
    //vending machine quantity values output
    $('#output10vend1supply').html(MyContract.at(card10vend1addr).available().toString());
    $('#output17vend1supply').html(MyContract.at(card17vend1addr).available().toString());
    $('#output17vend1supply').html(MyContract.at(card17vend1addr).available().toString());
    $('#output18vend1supply').html(MyContract.at(card18vend1addr).available().toString());
    $('#output18vend1supply').html(MyContract.at(card18vend1addr).available().toString());
    $('#output19vend1supply').html(MyContract.at(card19vend1addr).available().toString());
    $('#output19vend1supply').html(MyContract.at(card19vend1addr).available().toString());

    //card address output for site
    $('#outputcard10addr').html(card10addr);
    $('#outputcard10vend1addr').html(card10vend1addr);

    $('#outputcard17addr').html(card17addr);
    $('#outputcard17vend1addr').html(card17vend1addr);

    $('#outputcard18addr').html(card18addr);
    $('#outputcard18vend1addr').html(card18vend1addr);

    $('#outputcard19addr').html(card19addr);
    $('#outputcard19vend1addr').html(card19vend1addr);
  });
