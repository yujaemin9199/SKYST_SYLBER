const Flower = require('../class/flowerclass');

let userlist = [
  { 
    id: 'sjb', 
    pw: 'first note',
    flowers: []
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
  return userlist[id];
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