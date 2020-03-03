class Parent{
    constructor(){
        this.fatherName = "Ahmed";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("ruhi");
const baby1 = new Child("tom");
console.log(baby.getFullName());
console.log(baby1.getFullName());