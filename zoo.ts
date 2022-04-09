class Zoo {
    isOpen: boolean = false;
    animales: Animale[];
    name: string = '';
    location: string = '';
    static Zoo:Zoo //static member with the same type.
    constructor(name: string,location: string,isOpen: boolean){
        this.name = name;
        this.location = location;
        this.isOpen = isOpen;
        this.animales = []
        this.setLocation(location)
    }
  
    setName(name : string) {
        if(name.length > 1){
            this.name = name
        }
    }
    setLocation(location : string) {
        if(location.length > 1){
            this.location = location
        }
    }
  
    addAnimale(animale: Animale){
        this.animales.push(animale)
    }

    getNameAnimale(animale: Animale){
        this.animales.join(animale.name)
    }

   static getShredInstance(): Zoo{
        if(!Zoo.Zoo){
            Zoo.Zoo = new Zoo('The Biblical Zoo','some location',true);
        }
        return Zoo.Zoo;
    }
}

// abstract - cant do new class.
abstract class Animale{
    canEscape: boolean = false;
    name: string = '';
    constructor(name: string, canEscape: boolean){
        this.name = name;
        this.canEscape = canEscape;
    }
    
    setName(name : string) {
        if(name.length > 1 ){
          this.name = name;
        }
    }
}

abstract class Bird extends Animale {
 
    canFly: boolean = false
    beakSize: number = 0;
}

abstract class Pet {
    constructor(nickname: string,owner: string,isPurebred: boolean,legs: number){
        this.nickname = nickname;
        this.owner = owner;
        this.isPurebred = isPurebred;
        this.legs = legs;
    }
    nickname: string = '';
    owner: string = '';
    isPurebred: boolean = false;
    legs: number = 0;
}


abstract class SeaAnimale  extends Animale {
   isSaltWater: boolean = false;
   canSwim: boolean= false;
   isDoLife: boolean = false;

}

class Pinguin{
    constructor(haveMate:boolean, haveStone: boolean){
        this.haveMate = haveMate;
        this.haveStone = haveStone;
    }
    haveMate: boolean= false;
    haveStone: boolean= false;

}

class Eagle extends Bird{
    isInDengour: boolean = false;
    isBold: boolean = false;
}

class Shark extends SeaAnimale{
    finLength: number= 0;
    teethNumber: number= 0;
}
class Fish extends SeaAnimale{
    canBeEaten: boolean= false;
    constructor(name: string, canEscape: boolean,canBeEaten: boolean){
        super(name, canEscape)
        canBeEaten = canBeEaten;
    }
}

class Dog extends Pet { 
   makeNoise(){
    console.log("Wooffff");
   }
}
class Cat extends Pet{
   makeNoise(){
    console.log("Mioooooooooww")
    
   }
}


let myDog = new Dog('chapi',"matan",false,4);
let myCat = new Cat('metzi',"matan",true,4);
let myPinguin = new Pinguin(true,true);
let myFish = new Fish('nemo',false,true);

let zoo = Zoo.getShredInstance()
zoo.addAnimale(myFish)
// console.log(myDog.nickname,myCat.legs,myPinguin.haveStone,myFish.canEscape);
