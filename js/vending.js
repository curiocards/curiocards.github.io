
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

    let card17addr   = "0xF59536290906F204C3c7918D40C1Cc5f99643d0B";
    let card17vend1addr = "0xFc370fDD6a5441A7B367099645E4393c904F7c94";

    let card18addr   = "0xA507D9d28bbca54cBCfFad4BB770C2EA0519F4F0";
    let card18vend1addr = "0x52D38D9D852db7D072b4F32768037771B97EC367";

    let card19addr   = "0xf26BC97Aa8AFE176e275Cf3b08c363f09De371fA";
    let card19vend1addr = "0x0E7C091138A9abF27927326bE457B3F57Db5184D";

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
