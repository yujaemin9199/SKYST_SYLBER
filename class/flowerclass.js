class flower {
    constructor({index, name, growth}) {
        this.index = index;
        this.name = name;
        this.growth = growth;
    }
    growth() {
        return `${this.name}이 ${this.growth}% 자라났습니다!`
    }
    set index(newIndex) {
        this.index = newIndex;
    }
    set name(newName) {
        this.name = newName;
    }
    set growth(newGrowth) {
        this.growth = newGrowth;
    }
}