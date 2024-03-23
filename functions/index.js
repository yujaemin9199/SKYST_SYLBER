const flowergrow = require('./flowergrow');
const flowerList = require('../models/flowerlist');

flowergrow(flower.name, flower.index*5, flower.growth, () => {
    console.log(`${flower.name} is grown ${flower.growth}!`)
})