class People {
    constructor(name) {
          this.name = name;
        }
        get Name() {
          return this.name;
        }
        set Name(name) {
          this.name = name;
        }
    }
    let person = new People("Jon Snow");
    console.log(person.Name);
    person.Name = "Dany";
    console.log(person.Name);