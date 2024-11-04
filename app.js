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
  clickUpdate()
  // autoUpdate()
}

function clickUpdate() {
  const woodCount = document.getElementById('woodCount')
  woodCount.innerText = wood.toString()
  wood += calculateClickTotal()
  // const woodCountParagraphElem = woodCountElem.querySelector('p')
  // const woodCount = 
  // farm()
  // calculateClickTotal()
}

function autoUpdate() {
  const woodCount = document.getElementById('woodCount')
  woodCount.innerText = wood.toString()
  wood += calculateAutoTotal()
}

function axeUpgrade() {
  // console.log('axe away')
  if (wood < 10) {
    let axeUpgrade = clickBoosts[0]
    axeUpgrade.quantity == 0
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    const axeUpgrade = clickBoosts[0]
    wood -= 10
    axeUpgrade.quantity++
    // TODO: Prices change visually not mathematically
    // const axePriceElem = document.getElementById('axePrice')
    // const axePriceParagraphElem = axePriceElem.querySelector('p')
    // // const axePrice = clickBoosts[0]
    // axePriceParagraphElem.innerText = `${axeUpgrade.price = Math.floor(Math.random() * 100)}`
    // axeUpgrade.price = Math.floor(axeUpgrade.price * Math.random())
    // console.log('axe upgrade')
  }
  drawWood()
  // console.log('axe', axeUpgrade);
  drawAxeAmount()
  // drawClickBoosts()
  drawClickTotal()
}

function chainsawUpgrade() {
  // console.log('chainsaw away')
  if (wood < 100) {
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    // console.log('chainsaw upgrade')
    const chainsawUpgrade = clickBoosts[1]
    wood -= 100
    chainsawUpgrade.quantity++
  }
  drawWood()
  // console.log('axe', axeUpgrade);
  drawChainsawAmount()
  // drawClickBoosts()
  drawClickTotal()
}

function calculateClickTotal() {
  let clickTotal = 1
  for (let i = 0; i < clickBoosts.length; i++) {
    const clickBoost = clickBoosts[i];
    clickTotal += clickBoost.bonus * clickBoost.quantity
  }
  // console.log('clickTotal');

  return clickTotal
}

function lumberjackUpgrade() {
  // console.log('lumberjack away')
  if (wood < 1000) {
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    // console.log('lumberjack upgrade')
    const lumberjackUpgrade = autoBoosts[0]
    wood -= 1000
    lumberjackUpgrade.quantity++
  }
  drawWood()
  // console.log('axe', axeUpgrade);
  drawLumberjackAmount()
  drawAutoTotal()
}

function woodChipperUpgrade() {
  // console.log('chip away')
  if (wood < 10000) {
    window.alert("You don't have enough wood, keep chopping!")
  }
  else {
    // console.log('wood chipper upgrade')
    const woodChipperUpgrade = autoBoosts[1]
    wood -= 10000
    woodChipperUpgrade.quantity++
  }
  drawWood()
  // console.log('axe', axeUpgrade);
  drawWoodChipperAmount()
  drawAutoTotal()
}

function calculateAutoTotal() {
  let autoTotal = 0
  for (let i = 0; i < autoBoosts.length; i++) {
    const autoBoost = autoBoosts[i];
    autoTotal += autoBoost.bonus * autoBoost.quantity
  }
  // console.log('autoTotal');

  return autoTotal
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

function drawClickTotal() {
  let clickTotal = calculateClickTotal()
  const clickTotalElem = document.getElementById('clickCounter')
  clickTotalElem.innerText = clickTotal.toString()
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

function drawAutoTotal() {
  let autoTotal = calculateAutoTotal()
  const autoTotalElem = document.getElementById('autoCounter')
  autoTotalElem.innerText = autoTotal.toString()
}

function drawWood() {
  const woodElem = document.getElementById('woodCount')
  woodElem.innerText = wood.toString()
}

drawWood()
// drawClickBoosts()
setInterval(autoUpdate, 3000)


//#endregion