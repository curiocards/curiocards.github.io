
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

    let card11addr   = "0xb36c87F1f1539c5FC6f6e7b1C632e1840C9B66b4";
    let card11vend1addr = "0xb45e6719FDAa8f25D883bf042c4fE07b14aC8146";

    let card12addr   = "0xD15af10A258432e7227367499E785C3532b50271";
    let card12vend1addr = "0x105485CFBcB8acDEC209bbe1896390Be4F7c6603";

    let card13addr   = "0x2d922712f5e99428c65b44f09Ea389373d185bB3";
    let card13vend1addr = "0x3cF5c70AAA219031AE21dCF8618588a1BBCB058a";

    let card14addr   = "0x0565ac44e5119a3224b897De761a46A92aA28ae8";
    let card14vend1addr = "0xa27c29ce0c7096cc27f1f165dc265daf152b0f45";

    let card15addr   = "0xdb7F262237Ad8acca8922aA2c693a34D0d13e8fe";
    let card15vend1addr = "0xc2b2cd010812df044363687a0287efe84cfee1f1";

    let card16addr   = "0x1b63532CcB1FeE0595c7fe2Cb35cFD70ddF862Cd";
    let card16vend1addr = "0x558cefca4779f3c3d9203b3fb0f3b5bc54e681e9";



    //outputs
    //vending machine quantity values output
    $('#output10vend1supply').html(MyContract.at(card10vend1addr).available().toString());
    $('#output11vend1supply').html(MyContract.at(card11vend1addr).available().toString());
    $('#output12vend1supply').html(MyContract.at(card12vend1addr).available().toString());
    $('#output13vend1supply').html(MyContract.at(card13vend1addr).available().toString());
    $('#output14vend1supply').html(MyContract.at(card14vend1addr).available().toString());
    $('#output15vend1supply').html(MyContract.at(card15vend1addr).available().toString());
    $('#output16vend1supply').html(MyContract.at(card16vend1addr).available().toString());

    //card address output for site
    $('#outputcard10addr').html(card10addr);
    $('#outputcard10vend1addr').html(card10vend1addr);

    $('#outputcard11addr').html(card11addr);
    $('#outputcard11vend1addr').html(card11vend1addr);

    $('#outputcard12addr').html(card12addr);
    $('#outputcard12vend1addr').html(card12vend1addr);

    $('#outputcard13addr').html(card13addr);
    $('#outputcard13vend1addr').html(card13vend1addr);

    $('#outputcard14addr').html(card14addr);
    $('#outputcard14vend1addr').html(card14vend1addr);

    $('#outputcard15addr').html(card15addr);
    $('#outputcard15vend1addr').html(card15vend1addr);

    $('#outputcard16addr').html(card16addr);
    $('#outputcard16vend1addr').html(card16vend1addr);

  });
