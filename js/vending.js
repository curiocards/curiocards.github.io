
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

    let card24addr   = "0xE67dad99c44547B54367E3e60fc251fC45a145C6";
    let card24vend1addr = "0xa58ae2DF9c899156B29dBDf8aAE640C0Aef1e999";
    let card25addr   = "0xC7f60C2b1DBDfd511685501EDEb05C4194D67018";
    let card25vend1addr = "0x90AFF3cBF501DDC53DD3aE68c810E88923bA5aE5";
    let card26addr   = "0x1cB5BF4Be53eb141B56f7E4Bb36345a353B5488c";
    let card26vend1addr = "0x927DcF52A932d6640bA09a8B5e32C204225024E8";

    //outputs
    //vending machine quantity values output
    $('#output10vend1supply').html(MyContract.at(card10vend1addr).available().toString());

    $('#output24vend1supply').html(MyContract.at(card24vend1addr).available().toString());
    $('#output25vend1supply').html(MyContract.at(card25vend1addr).available().toString());
    $('#output26vend1supply').html(MyContract.at(card26vend1addr).available().toString());

    //card address output for site
    $('#outputcard10addr').html(card10addr);
    $('#outputcard10vend1addr').html(card10vend1addr);

    $('#outputcard24addr').html(card24addr);
    $('#outputcard24vend1addr').html(card24vend1addr);

    $('#outputcard25addr').html(card25addr);
    $('#outputcard25vend1addr').html(card25vend1addr);

    $('#outputcard26addr').html(card26addr);
    $('#outputcard26vend1addr').html(card26vend1addr);

  });
