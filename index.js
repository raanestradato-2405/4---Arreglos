let model = require("./student");

let students = [];

let student = {
    name: 'Ramon Estrada Torres',
    controlNumer: '17400971',
    email: "raanestradato@ittepic.edu.mx",
    grade: 90
};


let student2 = {
    name: 'Antonio Estrada Torres',
    controlNumer: '17400972',
    email: "raanestradato@ittepic.edu.mx",
    grade: 60
};

let student3 = {
    name: 'Juan Estrada Torres',
    controlNumer: '17400973',
    email: "raanestradato@ittepic.edu.mx",
    grade: 90
};


//Insertar datos al arreglo

console.log("-------------Despues de insertar------------");
students = model.create(student, students);
students = model.create(student2,students);
model.read(students);
console.log("-------------Leer por parametros------------");
model.readNC('17400971',students);
students=model.eraseNC("17400972",students);
console.log("-------------Despues de Eliminar por parametros------------");
model.read(students);
students = model.erase(0,students);
console.log("-------------Despues de borrar por posicion------------");
model.read(students);
console.log("-------------Despues de insertar Nuevo------------");
students = model.create(student3,students);
model.read(students);
students=model.update(0,{name:"Juan Perez", controlNumer:"16400974",email:"juan@ittepic.edu.mx",grade:80},students);
console.log("-------------Despues de Actualizar------------");
model.read(students);
console.log("-------------Lista de Aprobados----------------");
model.listaAprobados(students);
model.updateNC(students,"16400974",'grade',70);
console.log("-------------Despues de Actualizar por Parametros------------");
model.read(students);




