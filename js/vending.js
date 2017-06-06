
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

    let card11addr   = "";
    let card11vend1addr = "";

    let card12addr   = "";
    let card12vend1addr = "";

    let card13addr   = "";
    let card13vend1addr = "";


    //outputs
    //vending machine quantity values output
    $('#output10vend1supply').html(MyContract.at(card10vend1addr).available().toString());
    //$('#output11vend1supply').html(MyContract.at(card11vend1addr).available().toString());
    //$('#output12vend1supply').html(MyContract.at(card12vend1addr).available().toString());
    //$('#output13vend1supply').html(MyContract.at(card13vend1addr).available().toString());

    //card address output for site
    $('#outputcard10addr').html(card10addr);
    $('#outputcard10vend1addr').html(card10vend1addr);

    $('#outputcard11addr').html(card11addr);
    $('#outputcard11vend1addr').html(card11vend1addr);

    $('#outputcard12addr').html(card12addr);
    $('#outputcard12vend1addr').html(card12vend1addr);

    $('#outputcard13addr').html(card13addr);
    $('#outputcard13vend1addr').html(card13vend1addr);

  });
