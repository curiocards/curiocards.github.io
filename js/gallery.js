let web3 = null;
let cardContract = null;

let contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ipfs_hash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"desc","type":"string"}],"name":"setDescription","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isLocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lock","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenDescription","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

function getWeb3() {
  let Web3 = require('web3');
    web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    return web3;
}

function getCardContract() {
  if (cardContract === null) {
    getWeb3();
    cardContract = web3.eth.contract(contractABI);
  }

  return cardContract;
}

let cardContractIds = [
  "0x6Aa2044C7A0f9e2758EdAE97247B03a0D7e73d6c",
  "0xE9A6A26598B05dB855483fF5eCc5f1d0C81140c8",
  "0x3f8131B6E62472CEea9cb8Aa67d87425248a3702",
  "0x4F1694be039e447B729ab11653304232Ae143C69",
  "0x5a3D4A8575a688b53E8b270b5C1f26fd63065219",
  "0x1Ca6AC0Ce771094F0F8a383D46BF3acC9a5BF27f",
  "0x2647bd8777e0C66819D74aB3479372eA690912c3",
  "0x2FCE2713a561bB019BC5A110BE0A19d10581ee9e",
  "0xbf4Cc966F1e726087c5C55aac374E687000d4d45",
  "0x72b34d637C0d14acE58359Ef1bF472E4b4c57125",
  "0xb36c87F1f1539c5FC6f6e7b1C632e1840C9B66b4",
  "0xD15af10A258432e7227367499E785C3532b50271",
  "0x2d922712f5e99428c65b44f09Ea389373d185bB3",
  "0x0565ac44e5119a3224b897De761a46A92aA28ae8",
  "0xdb7F262237Ad8acca8922aA2c693a34D0d13e8fe",
  "0x1b63532CcB1FeE0595c7fe2Cb35cFD70ddF862Cd",
  "0xF59536290906F204C3c7918D40C1Cc5f99643d0B",
  "0xA507D9d28bbca54cBCfFad4BB770C2EA0519F4F0",
  "0xf26BC97Aa8AFE176e275Cf3b08c363f09De371fA"
]

let cardContractInsts = {}

function getCardContractInst(id) {
  if (id in cardContractInsts) { return cardContractInsts[id]; }
  else {
    cardContractInsts[id] = getCardContract().at(id);
    return cardContractInsts[id];
  }
}

function populateCardHtml() {
  function cardTpl(id) {
    return '<div id="cardImage'+id+'" class="col-sm-3"><img class="cardImage" id="card'+id+'" width="200"><div id="cardBalance'+id+'"><br><p></p></div></div>';
  }

  let cardContainer = $("#card-container");

  for (let i=0; i<cardContractIds.length;++i) {
    cardContainer.append( cardTpl(i) );
  }
}

function populateCardImages() {
  for (let i=0; i<cardContractIds.length;++i) {
    let contractId = cardContractIds[i];

    localforage.getItem("ipfs-"+contractId, function(err, ipfsStr) {
      if (err) {
        console.err("failed to get ipfs id for contract "+contractId);
      }
      else if (ipfsStr === null) {
        let contractInst = getCardContractInst(contractId);
        let ipfsHash = contractInst.ipfs_hash().toString();
        let ipfsSrc = "https://ipfs.io/ipfs/"+ipfsHash;
        $("#card"+i).attr("src", ipfsSrc);
        localforage.setItem("ipfs-"+contractId, ipfsHash)
      }
      else {
        let ipfsSrc = "https://ipfs.io/ipfs/"+ipfsStr;
        $("#card"+i).attr("src", ipfsSrc);
      }
    });
  }
}

function populateCardBalances(ethAddress) {
  for (let i=0; i<cardContractIds.length;++i) {
    let contractId = cardContractIds[i];
    let contractInst = getCardContractInst(contractId);
    let balance = contractInst.balanceOf(ethAddress).toString();
    if (balance !== "0") {
      $('#card'+i).addClass('cardImageOwned').removeClass('cardImage');
    }
    else {
      $('#card'+i).removeClass('cardImageOwned').addClass('cardImage');
    }
    $('#cardBalance'+i).html('<br><p>' + balance+ '<p>');
  }
}

$( document ).ready(function() {
  populateCardHtml();
  populateCardImages();

  $('input[name=ethAddress]').on('change keyup paste', function() {
    let ethAddress = $("#ethAddress").val().trim();
    console.log(ethAddress);
    if(getWeb3().isAddress(ethAddress)) {
      populateCardBalances(ethAddress);
    } else {
      $('.cardImageOwned').removeClass('cardImageOwned').addClass('cardImage');
      for (let i=0; i<cardContractIds.length;++i) {
        $('#cardBalance'+i).html('<br><p></p>');
      }
    }
  });
});
