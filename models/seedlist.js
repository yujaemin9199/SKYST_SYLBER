let seedlist = [
    { 
      index: '1', 
      name: 'sunflower seed', 
    }
  ];
  
  exports.list = () => {
    return seedlist.map(({ index, name}) => ({
      index,
      name,
    }));
  }
  
  exports.getname = (index) => {
    const Name = seedlist.find(
      (Name) => Name.index === index
    );
  
    if (!Name) {
      throw new Error('seed not found');
    }
    return Name.name;
  };
