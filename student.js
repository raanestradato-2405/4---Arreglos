function create(student, students){
    students.push(student);
    return students;

}

function read(students){
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumer);
    });

}

//Consulta a travez de No. Control
function readNC(noControl,students){
    students.forEach(s =>{
        if(noControl==s.controlNumer){
            console.log("Nombre: "+s.name);
            console.log("No de control: "+s.controlNumer);
        }  
    });


}

//Borrar A travez de No. Control

function erase (pos, students){
    students.splice(pos,1);
    return students;

}

function update(pos, newlement, students){
    students[0] = newlement;
    return students;


}

//Actualizar a travez de No. Control Ciertos elementos.

module.exports.create = create;
module.exports.read = read;
module.exports.readNC = readNC;
module.exports.erase = erase;
module.exports.update = update;