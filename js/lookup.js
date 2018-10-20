let web3 = null;

function getWeb3() {
  let Web3 = require('web3');
    web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherwallet.com/eth'));
    return web3;
}

let vendInfoABIraw = '[{"constant":true,"inputs":[],"name":"available","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"CloseVending","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimFunding","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"holdingAddress","type":"address"},{"name":"token","type":"address"},{"name":"budget","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]';
let vendInfoABI = JSON.parse(vendInfoABIraw);

let cardInfoABIraw = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ipfs_hash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"desc","type":"string"}],"name":"setDescription","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isLocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lock","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenDescription","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]';
let cardInfoABI = JSON.parse(cardInfoABIraw);

let cardInfoArray = [ // cardInfoArray[0].card
  { id: '1.1', card: '0x6Aa2044C7A0f9e2758EdAE97247B03a0D7e73d6c', vend: '0x1792b673de93af7050114b021a706b2eabe595e2' },
  { id: '1.2', card: '0x6Aa2044C7A0f9e2758EdAE97247B03a0D7e73d6c', vend: '0x1d3c5728b682a82132b59c18e56eb4170c4d543b' },
  { id: '1.3', card: '0x6Aa2044C7A0f9e2758EdAE97247B03a0D7e73d6c', vend: '0x964b016c9549d0b8f1991d0ec6d6d822099ea95f' },
  { id: '2.1', card: '0xE9A6A26598B05dB855483fF5eCc5f1d0C81140c8', vend: '0xc3f35591cb6a8f56c581bc9396c190719973cce7' },
  { id: '2.2', card: '0xE9A6A26598B05dB855483fF5eCc5f1d0C81140c8', vend: '0xefe7b3f041c563e90870af5bb74ae3a2afc217c5' },
  { id: '2.3', card: '0xE9A6A26598B05dB855483fF5eCc5f1d0C81140c8', vend: '0x76b517f253f8a8bac8c36e365b02a2ff6e2a0d96' },
  { id: '3.1', card: '0x3f8131B6E62472CEea9cb8Aa67d87425248a3702', vend: '0x8e1399b884f8202eb4e7e7861878f2de4c1f529e' },
  { id: '3.2', card: '0x3f8131B6E62472CEea9cb8Aa67d87425248a3702', vend: '0x7f3d8086bcf7c94476bb794875c349f3b4b1a108' },
  { id: '3.3', card: '0x3f8131B6E62472CEea9cb8Aa67d87425248a3702', vend: '0x427660b9d5f56a067915f38be3080ddc668276d9' },
  { id: '4', card: '0x4F1694be039e447B729ab11653304232Ae143C69', vend: '0xb439fa46F991908396fDF9D8911C91C3125E42D7' },
  { id: '5', card: '0x5a3D4A8575a688b53E8b270b5C1f26fd63065219', vend: '0xB885B6F499694c912aBA2cd9A8D524b1d8cEceE8' },
  { id: '6', card: '0x1Ca6AC0Ce771094F0F8a383D46BF3acC9a5BF27f', vend: '0xE060618270ff55F74a313c1D5Aa616757d21E1c6' },
  { id: '7', card: '0x2647bd8777e0C66819D74aB3479372eA690912c3', vend: '0x3C06B757E24815F2dcD71BAA9516BCa2D691F8Fc' },
  { id: '8', card: '0x2FCE2713a561bB019BC5A110BE0A19d10581ee9e', vend: '0x136876A8BA859A6Be77BDE8deB1d044bc50ED2e4' },
  { id: '9', card: '0xbf4Cc966F1e726087c5C55aac374E687000d4d45', vend: '0x635CcA1Be68DaD2c741211b8b50d2FfF83165827' },
  { id: '10', card: '0x72b34d637C0d14acE58359Ef1bF472E4b4c57125', vend: '0x46C4723111e2bAFeF7d5d0664B3F7BC68D875DeA' },
  { id: '11', card: '0xb36c87F1f1539c5FC6f6e7b1C632e1840C9B66b4', vend: '0xb45e6719FDAa8f25D883bf042c4fE07b14aC8146' },
  { id: '12', card: '0xD15af10A258432e7227367499E785C3532b50271', vend: '0x105485CFBcB8acDEC209bbe1896390Be4F7c6603' },
  { id: '13', card: '0x2d922712f5e99428c65b44f09Ea389373d185bB3', vend: '0x3cF5c70AAA219031AE21dCF8618588a1BBCB058a' },
  { id: '14', card: '0x0565ac44e5119a3224b897De761a46A92aA28ae8', vend: '0xa27c29ce0c7096cc27f1f165dc265daf152b0f45' },
  { id: '15', card: '0xdb7F262237Ad8acca8922aA2c693a34D0d13e8fe', vend: '0xc2b2cd010812df044363687a0287efe84cfee1f1' },
  { id: '16', card: '0x1b63532CcB1FeE0595c7fe2Cb35cFD70ddF862Cd', vend: '0x558cefca4779f3c3d9203b3fb0f3b5bc54e681e9' },
  { id: '17', card: '0xF59536290906F204C3c7918D40C1Cc5f99643d0B', vend: '0xFc370fDD6a5441A7B367099645E4393c904F7c94' },
  { id: '18', card: '0xA507D9d28bbca54cBCfFad4BB770C2EA0519F4F0', vend: '0x52D38D9D852db7D072b4F32768037771B97EC367' },
  { id: '19', card: '0xf26BC97Aa8AFE176e275Cf3b08c363f09De371fA', vend: '0x0E7C091138A9abF27927326bE457B3F57Db5184D' },
  { id: '20', card: '0xD0ec99E99cE22f2487283A087614AEe37F6B1283', vend: '0x6E561B66f393166d611f40A1e82E373f00270393' },
  { id: '21', card: '0xB7A5a84Ff90e8Ef91250fB56c50a7bB92a6306EE', vend: '0xf3Dfa32B947Bc250FB8cD946e1d6ACA8a3921237' },
  { id: '22', card: '0x148fF761D16632da89F3D30eF3dFE34bc50CA765', vend: '0x103865d9E8532bC26F9E6E881a586BAcfBaeE36D' },
  { id: '23', card: '0xCDE7185B5C3Ed9eA68605a960F6653AA1a5b5C6C', vend: '0x18407adFf40bEb8D8609E1ec7dF9D07bE5e1c446' },
  { id: '24', card: '0xE67dad99c44547B54367E3e60fc251fC45a145C6', vend: '0xa58ae2DF9c899156B29dBDf8aAE640C0Aef1e999' },
  { id: '25', card: '0xC7f60C2b1DBDfd511685501EDEb05C4194D67018', vend: '0x90AFF3cBF501DDC53DD3aE68c810E88923bA5aE5' },
  { id: '26', card: '0x1cB5BF4Be53eb141B56f7E4Bb36345a353B5488c', vend: '0x927DcF52A932d6640bA09a8B5e32C204225024E8' },
  { id: '27', card: '0xfb9f3fa2502d01d43167a0a6e80be03171df407e', vend: '0x87767E3aa2479b3faF5FbbB7C7C6874E9e3aB14e' },
  { id: '28', card: '0x59D190e8A2583C67E62eEc8dA5EA7f050d8BF27e', vend: '0x3273eF350E9ffC8f33eA80971650c7c627B43120' },
  { id: '29', card: '0xD3540bCD9c2819771F9D765Edc189cBD915FEAbd', vend: '0x39B058eC8B2fa19Cec655A87EaC127Ba434111b1' },
  { id: '30', card: '0x7f5b230dc580d1e67df6ed30dee82684dd113d1f', vend: '0x338C6fbcEff5433412382590a7de6da03Bb57389' },
];

// Get card contract 
let cardContract = null;
function getCardContract() {
  if (cardContract === null) {
    getWeb3(); // Do i need to call this every time?
    cardContract = web3.eth.contract(cardInfoABI);
  }
  return cardContract;
}

let cardContractInsts = {}
function getCardContractInst(id) {
  if (id in cardContractInsts) { return cardContractInsts[id]; }
  else {
    cardContractInsts[id] = getCardContract().at(id);
    return cardContractInsts[id];
  }
}

// Get vending contract
let vendContract = null;
function getVendContract() {
    if (vendContract === null) {
    getWeb3(); // Do i need to call this every time?
    vendContract = web3.eth.contract(vendInfoABI);
    }
    return vendContract;
}

let vendContractInsts = {}
function getVendContractInst(id) {
    if (id in vendContractInsts) { return vendContractInsts[id]; }
    else {
    vendContractInsts[id] = getVendContract().at(id);
    return vendContractInsts[id];
    }
}

// Create card html and fill it with images and data 
function populateCardHtml() {
  function cardTpl(id) {
    let cardHtml_ =  '<div id="cardInfo'+id+'" class="col-sm-3">' + // ToDo: swap out with flex boxs
                      '<img id="cardImage'+id+'" width="100">' +
                      '<div id="cardAddr'+id+'"></div>' +
                      '<div id="vendingAddr'+id+'"></div>' +
                      '<div id="vendingSupply'+id+'"></div>' +
                      //'<div id="totalSupply'+id+'"></div>' +
                      '<div id="ipfsURL'+id+'"></div>' +
                    '</div>';
    let cardHtml = '<div class="flex-card_details">' +
                      '<div class="flex-card_holder">' +
                        '<img id="cardImage'+id+'">' + //width="100"
                      '</div>' +
                      '<div class="flex-details_holder">' +
                        '<h3>Card Info</h3>' +
                        '<div id="cardAddr'+id+'"></div>' +
                        '<div id="ipfsURL'+id+'"></div>' +
                        '<br>' +
                        '<h3>Vending Info</h3>' +
                        '<div id="vendingAddr'+id+'"></div>' +
                        '<div id="vendingSupply'+id+'"></div>' +
                        '<br>' +
                      '</div>' +
                    '</div>';
    return cardHtml;
  }
  let cardHtmlBuffer =  '<div class="flex-dummy"></div>' +
                        '<div class="flex-dummy"></div>' +
                        '<div class="flex-dummy"></div>' +
                        '<div class="flex-dummy"></div>';
  let cardContainer = $("#info-container");
  for (let i=0; i<cardInfoArray.length;++i) {
    cardContainer.append( cardTpl(i) );
  }
  cardContainer.append(cardHtmlBuffer);
}

function populateCardInfo() {
  for (let i=0; i<cardInfoArray.length;++i) {
    let contractId = cardInfoArray[i].card;
    let ipfsSrc = null;
    // Images
    localforage.getItem("ipfs-"+contractId, function(err, ipfsStr) {
      if (err) {
        console.err("failed to get ipfs id for contract "+contractId);
      }
      else if (ipfsStr === null) {
        let contractInst = getCardContractInst(contractId);
        let ipfsHash = contractInst.ipfs_hash().toString();
        let ipfsSrc = "https://ipfs.io/ipfs/"+ipfsHash;
        $("#cardImage"+i).attr("src", ipfsSrc);
        $('#ipfsURL'+i).html('<a href="'+ ipfsSrc +'">(IPFS Link)</a>');
        localforage.setItem("ipfs-"+contractId, ipfsHash)
      }
      else {
        let ipfsSrc = "https://ipfs.io/ipfs/"+ipfsStr;
        $("#cardImage"+i).attr("src", ipfsSrc);
        $('#ipfsURL'+i).html('<a href="'+ ipfsSrc +'" target="_blank">(IPFS Link)</a>');
      }
    });
    // Contract data
    let cardAddr = contractId.toString();
    $('#cardAddr'+i).html('<b>Card Address:</b> ' + cardAddr);

  }
}

function populateVendInfo() {
  for (let i=0; i<cardInfoArray.length;++i) {
    let contractId = cardInfoArray[i].vend;
    let contractInst = getVendContractInst(contractId);
    let supply = contractInst.available().toString();
    let vendAddr = contractId.toString();
    $('#vendingAddr'+i).html('<b>Vend Address:</b> ' + vendAddr);
    $('#vendingSupply'+i).html('<b>Vend Supply:</b> ' + supply);
  }
}

$( document ).ready(function() {
  populateCardHtml();
  populateCardInfo();
  populateVendInfo();
});