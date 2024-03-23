const Flower = require('../class/flowerclass');
const Seed = require('../class/seedclass');

let userlist = [
  { 
    id: 'sjb', 
    pw: 'first note',
    flowers: [],
    seeds: [],
    flrmaxindex: -1,
    seedmaxindex: -1,
  }
];

exports.list = () => {
  return userlist.map(({ id }) => ({ id }));
};

exports.addFlower = (id) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add flower : User Not Found');
  }
  userlist[pos].flrmaxindex += 1;
  userlist[pos].flowers.push(new Flower(userlist[pos].flrmaxindex, 1, 0));

  console.log("Flower adding SUCCESS");
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

  console.log("Flower Remove SUCCESS");
  return flower;
};

exports.addSeed = (id) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add seed : User Not Found');
  }
  userlist[pos].seedmaxindex += 1;
  userlist[pos].seeds.push(new Seed(userlist[pos].seedmaxindex, 1));

  console.log("Seed adding SUCCESS");
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
  };
  userlist.push(usr);
  return usr;
};