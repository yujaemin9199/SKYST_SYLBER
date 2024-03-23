const Flower = require('../class/flowerclass');
const Seed = require('../class/seedclass');

let userlist = [
  { 
    id: 'sjb', 
    pw: 'first note',
    flowers: [],
    seeds: [],
    maxindex: -1
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
  userlist[pos].maxindex += 1;
  userlist[pos].flowers.push(new Flower(userlist[pos].maxindex, 1, 0));

  console.log("Flower adding SUCCESS");
};

exports.removeFlower = (id, index) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to remove flower : User Not Found');
  }
  const flowerPos = userlist[pos].flowers.findIndex((flr) => flr.index === index);
  if(flowerPos<0){
    throw new Error('Failed to remove flower : Flower Index Not Found');
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
  userlist[pos].seeds.push(new Seed(1, 0));
  console.log("Seed adding SUCCESS");
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