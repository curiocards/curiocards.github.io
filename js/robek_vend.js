
// <div id="myval"></div>
  $( document ).ready(function() {
    let Web3 = require('web3');
    let web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    let vendingJson = '[{"constant":true,"inputs":[],"name":"available","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"CloseVending","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimFunding","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"holdingAddress","type":"address"},{"name":"token","type":"address"},{"name":"budget","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]';
    let contractABI = JSON.parse(vendingJson);
    console.log(contractABI);

    let MyContract = web3.eth.contract(contractABI);

    // input values here
    let card21addr   = "0xB7A5a84Ff90e8Ef91250fB56c50a7bB92a6306EE";
    let card21vend1addr = "0xf3Dfa32B947Bc250FB8cD946e1d6ACA8a3921237";
    let card22addr   = "0x148fF761D16632da89F3D30eF3dFE34bc50CA765";
    let card22vend1addr = "0x103865d9E8532bC26F9E6E881a586BAcfBaeE36D";
    let card23addr   = "0xCDE7185B5C3Ed9eA68605a960F6653AA1a5b5C6C";
    let card23vend1addr = "0x18407adFf40bEb8D8609E1ec7dF9D07bE5e1c446";

    //outputs
    //vending machine quantity values output
    $('#output21vend1supply').html(MyContract.at(card21vend1addr).available().toString());
    $('#output22vend1supply').html(MyContract.at(card22vend1addr).available().toString());
    $('#output23vend1supply').html(MyContract.at(card23vend1addr).available().toString());

    //card address output for site
    $('#outputcard21addr').html(card21addr);
    $('#outputcard21vend1addr').html(card21vend1addr);

    $('#outputcard22addr').html(card22addr);
    $('#outputcard22vend1addr').html(card22vend1addr);

    $('#outputcard23addr').html(card23addr);
    $('#outputcard23vend1addr').html(card23vend1addr);

  });
