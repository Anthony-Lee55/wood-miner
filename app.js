//#region State 

let wood = 0

let clickBoosts = [
  {
    name: 'axe',
    price: 10,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'chainsaw',
    price: 100,
    quantity: 0,
    bonus: 10
  }
];

let autoBoosts = [
  {
    name: 'lumberjack',
    price: 1000,
    quantity: 0,
    bonus: 100
  },
  {
    name: 'woodChipper',
    price: 10000,
    quantity: 0,
    bonus: 1000
  }
];

//#endregion

//#region Logic

function farm() {
  // console.log('farm away');
  update()
}

function update() {
  const woodCount = document.getElementById('woodCount')
  woodCount.innerText = wood.toString()
  wood += 1
  // const woodCountParagraphElem = woodCountElem.querySelector('p')
  // const woodCount = 
  // farm()
}

function axeUpgrade() {
  // console.log('axe away')
  if (wood < 10) {
    let axeUpgrade = clickBoosts[0]
    axeUpgrade.quantity == 0
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    wood -= 10
    // console.log('axe upgrade')
  }
  const axeUpgrade = clickBoosts[0]
  axeUpgrade.quantity++
  // console.log('axe', axeUpgrade);
  drawAxeAmount()
}

function chainsawUpgrade() {
  // console.log('chainsaw away')
  if (wood < 100) {
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    // console.log('chainsaw upgrade')
  }
  const chainsawUpgrade = clickBoosts[1]
  chainsawUpgrade.quantity++
  // console.log('axe', axeUpgrade);
  drawChainsawAmount()
}

function lumberjackUpgrade() {
  // console.log('lumberjack away')
  if (wood < 1000) {
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    // console.log('lumberjack upgrade')
  }
  const lumberjackUpgrade = autoBoosts[0]
  lumberjackUpgrade.quantity++
  // console.log('axe', axeUpgrade);
  drawLumberjackAmount()
}

function woodChipperUpgrade() {
  // console.log('chip away')
  if (wood < 10000) {
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    // console.log('wood chipper upgrade')
  }
  const woodChipperUpgrade = autoBoosts[1]
  woodChipperUpgrade.quantity++
  // console.log('axe', axeUpgrade);
  drawWoodChipperAmount()
}

//#endregion

//#region Graphics

function drawAxeAmount() {
  const axeElem = document.getElementById('axeCounter')
  // console.log('axe', axeElem);
  const axeParagraphElem = axeElem.querySelector('p')
  // console.log('got axe upgrade elem', axeParagraphElem);
  const axe = clickBoosts[0]
  axeParagraphElem.innerText = `Axes: ${axe.quantity}`
}

function drawChainsawAmount() {
  const chainsawElem = document.getElementById('chainsawCounter')
  // console.log('chainsaw', chainsawElem);
  const chainsawParagraphElem = chainsawElem.querySelector('p')
  // console.log('got chainsaw upgrade elem', chainsawParagraphElem);
  const chainsaw = clickBoosts[1]
  chainsawParagraphElem.innerText = `Chainsaw: ${chainsaw.quantity}`
}

function drawClickBoosts() {
}

function drawLumberjackAmount() {
  const lumberjackElem = document.getElementById('lumberjackCounter')
  // console.log('lumberjack', lumberjackElem);
  const lumberjackParagraphElem = lumberjackElem.querySelector('p')
  // console.log('got lumberjack upgrade elem', lumberjackParagraphElem);
  const lumberjack = autoBoosts[0]
  lumberjackParagraphElem.innerText = `Lumberjacks: ${lumberjack.quantity}`
}

function drawWoodChipperAmount() {
  const woodChipperElem = document.getElementById('woodChipperCounter')
  // console.log('wood chipper', woodChipperElem);
  const woodChipperParagraphElem = woodChipperElem.querySelector('p')
  // console.log('got wood chipper upgrade elem', woodChipperParagraphElem);
  const woodChipper = autoBoosts[1]
  woodChipperParagraphElem.innerText = `Wood Chippers: ${woodChipper.quantity}`
}

function drawAutoBoosts() {

}

function drawWood() {
  const woodElem = document.getElementById('woodCount')
}

//#endregion