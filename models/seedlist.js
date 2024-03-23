let seedlist = [
    { 
      index: '1', 
      name: 'sunflower seed', 
    }
  ];
  
  exports.list = () => {
    return userlist.map(({ index, name}) => ({
      index,
      name,
    }));
  }
  
  exports.getname = (index) => {
    const Name = seedlist.find(
      (Name) => Name.index === index
    );
  
    if (!Name) {
      throw new Error('Flower not found');
    }
    return Name.name;
  };