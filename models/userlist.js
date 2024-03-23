const Flower = require('../class/flowerclass');
const Seed = require('../class/seedclass');
const fs = require('fs');

let userlist = JSON.parse(fs.readFileSync('userlist.json', 'utf8'));
exports.list = () => {
  return userlist.map(({ id }) => ({ id }));
};

exports.addFlower = (id, type) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add flower : User Not Found');
  }
  userlist[pos].flrmaxindex += 1;
  userlist[pos].flowers.push(new Flower(userlist[pos].flrmaxindex, type, 0));

  console.log("Flower adding SUCCESS");
  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));
};

exports.removeFlower = (id, index) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to remove flower : User Not Found');
  }
  const flowerPos = userlist[pos].flowers.findIndex((flr) => flr.index === index);
  if(flowerPos<0){
    throw new Error(`Failed to remove flower : Flower Index Not Found ${index}`);
  }
  let flower = userlist[pos].flowers[flowerPos];
  
  userlist[pos].flowers = userlist[pos].flowers.filter((flr) => flr.index != index);
m
  console.log("Flower Remove SUCCESS");

  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));
  return flower;
  
};

exports.FlowerGrow = (id, index, val) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to Grow flower : User Not Found');
  }

  const flowerPos = userlist[pos].flowers.findIndex((flr) => flr.index === index);
  if(flowerPos<0){
    throw new Error(`Failed to Grow flower : Flower Index Not Found ${index}`);
  }
  userlist[pos].flowers[flowerPos].growth += val;
  
  console.log("Flower Grow SUCCESS");
  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));

}

exports.addSeed = (id, type) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add seed : User Not Found');
  }
  userlist[pos].seedmaxindex += 1;
  userlist[pos].seeds.push(new Seed(userlist[pos].seedmaxindex, type));

  console.log("Seed adding SUCCESS");
  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));
  
};

exports.removeSeed = (id, index) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to remove flower : User Not Found');
  }
  const seedPos = userlist[pos].seeds.findIndex((seed) => seed.index === index);
  if(seedPos<0){
    throw new Error(`Failed to remove Seed : Seed Index Not Found ${index}`);
  }
  let seed = userlist[pos].seeds[seedPos];
  
  userlist[pos].seeds = userlist[pos].seeds.filter((seed) => seed.index != index);

  console.log("Seed Remove SUCCESS");
  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));
  
  return seed;
};

exports.getinfo = (id) => {
  const usr = userlist.find(
    (usr) => usr.id === id
  );

  if (!usr) {
    throw new Error('User not found');
  }
  return usr;
};

exports.register = (id, pw) => {
  const usr = {
    id,
    pw,
    flowers:[],
    seeds:[],
    flrmaxindex:-1,
    seedmaxindex:1
  };
  userlist.push(usr);
  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));

  return usr;
};