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

exports.addSeed = (id) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add seed : User Not Found');
  }
  userlist[pos].seeds += 1;

  console.log("Seed adding SUCCESS");
};

exports.removeSeed = (id) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to remove flower : User Not Found');
  }
  userlistp[pos].seeds -= 1;
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
    seeds:0,
    flrmaxindex:-1,
  };
  userlist.push(usr);
  fs.writeFile( 'userlist.json', JSON.stringify(userlist), (err) => console.log(err));

  return usr;
};