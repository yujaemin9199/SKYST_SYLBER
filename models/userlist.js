let userlist = [
  { 
    id: 'sjb', 
    pw: 'first note',
  }
];

exports.list = () => {
  return userlist.map(({ id, pw }) => ({
    id,
    pw,
  }));
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
  };
  userlist.push(usr);
  return usr;
};