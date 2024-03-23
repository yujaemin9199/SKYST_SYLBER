const Flower = require('../class/flowerclass');
const Seed = require('../class/seedclass')

let userlist = [
  { 
    id: 'sjb', 
    pw: 'first note',
    flowers: [],
    seeds: []
  }
];

exports.list = () => {
  return userlist.map(({ id, pw }) => ({
    id,
    pw,
  }));
};

exports.addFlower = (id) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add flower : User Not Found');
  }
  userlist[pos].flowers.push(new Flower(1, 0));
  console.log("Flower adding SUCCESS");
};

exports.addSeed = (id) => {
  const pos = userlist.findIndex((usr) => usr.id === id );
  if(pos<0){
    throw new Error('Failed to add seed : User Not Found');
  }
  userlist[pos].seeds.push(new Seed(1));
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