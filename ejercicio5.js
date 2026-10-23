class Empleado{
    #nombre;
    constructor(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    calcularPago(){
        return 0;
    }
}

class EmpleadoPlanta  extends Empleado{
    constructor(nombre,salario){
        super(nombre);
        this.salario=salario
    }
    calcularPago(){
        return this.salario
    }
}

class Contratista extends Empleado{
    constructor(nombre, tarifa,horas){
        super(nombre);
        this.tarifa=tarifa;
        this.horas=horas;
    }
    calcularPago(){
        return this.tarifa*this.horas;
    }
}
 
const empleados=[
    new EmpleadoPlanta("camila",2500000),
    new Contratista("pedro",30000,80),
];

empleados.forEach(function(empleados){
    console.log(
        empleados.getNombre(),
        "cobra:",
        empleados.calcularPago()
    );

});

try{
    const salario= -500000;
    if(salario<0){
        throw new Error("el salario no puede ser negativo"); 
    }
}catch(Error){
   console.log("error:", Error.message)
}
