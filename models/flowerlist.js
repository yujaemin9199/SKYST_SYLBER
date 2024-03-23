let flowerlist = [
    { 
      index: '1', 
      name: 'sunflower', 
      growth: '90'
    }
  ];
  
  exports.list = () => {
    return userlist.map(({ index, name, growth }) => ({
      index,
      name,
      growth,
    }));
  }
  
  exports.getname = (index) => {
    const Name = flowerlist.find(
      (Name) => Name.index === index
    );
  
    if (!Name) {
      throw new Error('Flower not found');
    }
    return Name.name;
  };

  exports.getgrowth = (index) => {
    const Name = flowerlist.find(
      (Name) => Name.index === index
    );
  
    if (!Name) {
      throw new Error('Flower not found');
    }
    return Name.growth;
  };
