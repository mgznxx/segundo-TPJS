
// :::::::::: TP Segundo Instituto Alfa Cursos ::::::::


class Curso {

    constructor(tCurso, nombre, duracion, valor, id) {
        this.tCurso = tCurso;
        this.nombre = nombre;
        this.duracion = duracion;
        this.valor = parseInt(valor);
        this.id = id;


    }
    asignarId(array) {
        this.id = array.length;
    }

}



const auxEnf = [
    new Curso("Salud", "Auxiliar de Enfermeria", "6 meses", 3000, 1),
]

const auxFar = [
    new Curso("Salud", "Auxiliar de Farmacia", "6 meses", 3000, 2),

]

const at = [
    new Curso("Salud", "Acompañante Terapeutico", "6 meses", 3000, 3),

]

const ingles = [
    new Curso("Idioma", "Ingles", "4 años", 3000, 4),

]

const portugues = [
    new Curso("Idioma", "Portugues", "4 años", 3000, 5),
]

const compu = [
    new Curso("computacion", "Operador de Pc", "6 meses", 3000, 6),
]

const dGrafico = [
    new Curso("computacion", "Diseño Grafico", "6 meses", 3000, 7),
]

let opcion = prompt(":::: ¿QUE CURSO ESTAS BUSCANDO? ::::\n Elegí una opción: \n1- Auxiliar de Enfermeria. \n2- Auxiliar de Farmacia. \n3- Acompañante Terapeutico. \n4- Ingles. \n5- Portugues. \n6- Computacion. \n7- Diseño Grafico. \n Presioná X para salir.");

while (opcion != 'X' && opcion != 'x') {

    switch (opcion) {

        case '1':


            let enfermeria = auxEnf.map((auxEnf) => "Tipo de Curso: " + auxEnf.tCurso + "\n" + "Curso: " + auxEnf.nombre + "\n" + "Duracion: " + auxEnf.duracion + "\n" + "Precio:  " + "$" + auxEnf.valor + "\n" + "ID: " + auxEnf.id + "\n" + "................................" + "\n");

            alert(enfermeria.join());
            break;



        case '2':



            let farmacia = auxFar.map((auxFar) => "Tipo de Curso: " + auxFar.tCurso + "\n" + "Curso: " + auxFar.nombre + "\n" + "Duracion: " + auxFar.duracion + "\n" + "Precio:  " + "$" + auxFar.valor + "\n" + "ID: " + auxFar.id + "\n" + "................................" + "\n");

            alert(farmacia.join());
            break;


        case '3':



            let acompTerap = at.map((at) => "Tipo de Curso: " + at.tCurso + "\n" + "Curso: " + at.nombre + "\n" + "Duracion: " + at.duracion + "\n" + "Precio:  " + "$" + at.valor + "\n" + "ID: " + at.id + "\n" + "................................" + "\n");

            alert(acompTerap.join());
            break;


        case '4':



            let cIngles = ingles.map((ingles) => "Tipo de Curso: " + ingles.tCurso + "\n" + "Curso: " + ingles.nombre + "\n" + "Duracion: " + ingles.duracion + "\n" + "Precio:  " + "$" + ingles.valor + "\n" + "ID :" + ingles.id + "\n" + "................................" + "\n");

            alert(cIngles.join());
            break;


        case '5':



            let portu = portugues.map((portugues) => "Tipo de Curso: " + portugues.tCurso + "\n" + "Curso: " + portugues.nombre + "\n" + "Duracion: " + portugues.duracion + "\n" + "Precio:  " + "$" + portugues.valor + "\n" + "ID :" + portugues.id + "\n" + "................................" + "\n");

            alert(portu.join());
            break;


        case '6':



            let pc = compu.map((compu) => "Tipo de Curso: " + compu.tCurso + "\n" + "Curso: " + compu.nombre + "\n" + "Duracion: " + compu.duracion + "\n" + "Precio:  " + "$" + compu.valor + "\n" + "ID :" + compu.id + "\n" + "................................" + "\n");

            alert(pc.join());
            break;


        case '7':



            let dg = dGrafico.map((dGrafico) => "Tipo de Curso: " + dGrafico.tCurso + "\n" + "Curso: " + dGrafico.nombre + "\n" + "Duracion: " + dGrafico.duracion + "\n" + "Precio:  " + "$" + dGrafico.valor + "\n" + "ID :" + dGrafico.id + "\n" + "................................" + "\n");

            alert(dg.join());
            break;

    }break;

} 
