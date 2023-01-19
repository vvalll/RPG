//HERENCIA:

// Clase madre: Animal - clase hijo: Conejo ----> la clase hija se extiende de la clase madre 
class Animal {
    constructor(habitat){
      this.habitat = habitat
    }
    comer = () => console.log("Nom nom nom")
  }

  class Conejo extends Animal { }
  
  const conejo = new Conejo("pradera")
  conejo.comer() // "Nom nom nom"
  console.log(conejo.habitat) // "pradera"

  //En caso de que la clase hija contenga mas atributos que la madre, se agrega "super" especificando cuales son los heredados

  class Animal {
    constructor(habitat){
      this.habitat = habitat
    }
    comer = () => console.log("Nom nom nom")
  }
  class Conejo extends Animal { 
    constructor(habitat, color){
      super(habitat)
      this.color = color
    }
  }


// ABSTRACCION: 

//Clase abstracta ---> no se le permite instanciar objetos, a partir de la siguiente manera: 

class Abstracta {
    constructor() {
      if (this.constructor === Abstracta) {
        throw new ClaseNoInstanciableError(this)
      }
    }
  }


//Metodos abstractos ---> no se puede implementar el metodo en la clase, sino en la clase heredada, con la implementacion siguiente: 

  class Animal1 {
    constructor() {
        if (this.constructor === Animal1) {
          throw new ClaseNoInstanciableError(this)
        }
      }
      comer () {
        throw new MetodoNoImplentadoError()
    } 
  }

  class Conejo extends Animal1 {
    comer = () => console.log("Nom nom nom")
  }
  
  const animal = new Animal1() // OJO! Animal debería ser una clase abstracta, el ejemplo es solo a modo de ilustración
  animal.comer() // Error
  
  const conejo1 = new Conejo()
  conejo.comer() // "Nom nom nom"

// No comprendi bien como implementar el error en las clases y metodos abstractos. 

// Propiedad de clase --> Las propiedades/atributos de la clase tambien se pueden dejar por fuera de un constructor. 
class Ejemplo {
    constructor() {
      this.propiedadA = "a"
      this.propiedadB = "b"
      this.propiedadC = "c"
    }
  }

  class Ejemplo {
    propiedadA = "a"
    propiedadB = "b"
    propiedadC = "c"
  }

// No entendi bien acerca de los errores personalizados y las Propiedades y métodos estáticos
