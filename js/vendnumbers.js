
// <div id="myval"></div>
  $( document ).ready(function() {
    let Web3 = require('web3');
    let web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    let vendingJson = '[{"constant":true,"inputs":[],"name":"available","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"CloseVending","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimFunding","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"holdingAddress","type":"address"},{"name":"token","type":"address"},{"name":"budget","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]';
    let contractABI = JSON.parse(vendingJson);
    console.log(contractABI);

    let MyContract = web3.eth.contract(contractABI);

    // input values here
    let card1   = "0x2647bd8777e0C66819D74aB3479372eA690912c3";
    let vend1_1 = "0x3C06B757E24815F2dcD71BAA9516BCa2D691F8Fc";
    //let vend1_2 = "0x2C2a40fe840dD123200e7B22E0872A3F4aA6a2ea";

    let card2   = "0x2FCE2713a561bB019BC5A110BE0A19d10581ee9e";
    let vend2_1 = "0x136876A8BA859A6Be77BDE8deB1d044bc50ED2e4";
    //let vend2_2 = "0x5DED9Cf460Bdc8FC5E6cB58dC5682e891a6BF3af";

    let card3   = "0xbf4Cc966F1e726087c5C55aac374E687000d4d45";
    let vend3_1 = "0x635CcA1Be68DaD2c741211b8b50d2FfF83165827";
    //let vend3_2 = "0x279021c06C9a8361D28C966dC6b08cD56c2766d0";

    let myContractInstance1_1 = MyContract.at(vend1_1);
    //let myContractInstance1_2 = MyContract.at(vend1_2);
    let myContractInstance2_1 = MyContract.at(vend2_1);
    //let myContractInstance2_2 = MyContract.at(vend2_2);
    let myContractInstance3_1 = MyContract.at(vend3_1);
    //let myContractInstance3_2 = MyContract.at(vend3_2);

    let val1_1 = myContractInstance1_1.available().toString();
    //let val1_2 = myContractInstance1_2.available().toString();
    let val2_1 = myContractInstance2_1.available().toString();
    //let val2_2 = myContractInstance2_2.available().toString();
    let val3_1 = myContractInstance3_1.available().toString();
    //let val3_2 = myContractInstance3_2.available().toString();

    //vending machine quantity values output
    $('#myval1_1').html(val1_1);
    //$('#myval1_2').html(val1_2);
    $('#myval2_1').html(val2_1);
    //$('#myval2_2').html(val2_2);
    $('#myval3_1').html(val3_1);
    //$('#myval3_2').html(val3_2);

    //card address output for site
    $('#mycard1').html(card1);
    $('#myvend1_1').html(vend1_1);
    //$('#myvend1_2').html(vend1_2);
    $('#mycard2').html(card2);
    $('#myvend2_1').html(vend2_1);
    //$('#myvend2_2').html(vend2_2);
    $('#mycard3').html(card3);
    $('#myvend3_1').html(vend3_1);
    //$('#myvend3_2').html(vend3_2);
  });
