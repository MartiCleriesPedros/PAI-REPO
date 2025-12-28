// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:



// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

/*function exercici01() {

}

function exercici02() {

}


function exercici03() {
 
}


function exercici04() {
    creaFormulari();
}*/

//--- Ex 1 Nombre total d'accidents ---

function exercici01() {
  // Cada element de la llista obj és un accident (propietats arrays)
  var accidents = obj.length;
  // getElementById apunta al contenidor div (metodes DOM)
  var divResultats = document.getElementById("resultats"); 
  // innerHTML modifica el contingut dins el contenidor div (propietats DOM)
  divResultats.innerHTML = "Total d'accidents: " + accidents; 
}

//--- Ex 2 Dia setmana amb més acccidents ---

function exercici02() {
  var dies = [
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte",
    "Diumenge"
  ];
  
  var comptadors = [0, 0, 0, 0, 0, 0, 0];
  // i és accidents, j és dies
  var i, j;
  var diaAccident;
  
  // for per recórrer la llista d'accidents
  for (i = 0; i < obj.length; i++) {
    diaAccident = obj[i].diaSet;

    // Busca a quin dia
    for (j = 0; j < dies.length; j++) {
      if (diaAccident === dies[j]) {
        comptadors[j] = comptadors[j] + 1;
      }
    }
  }
  // Dia amb amb el contador mes gran  
  var maxIndex = 0;
  var maxValor = comptadors[0];

  for (i = 1; i < comptadors.length; i++) {
    if (comptadors[i] > maxValor) {
      maxValor = comptadors[i];
      maxIndex = i;
    }
  }

  var diaMax = dies[maxIndex];

  var div = document.getElementById("resultats");
  div.innerHTML = "Dia amb més accidents: " + diaMax +" (" + maxValor + " accidents)";
}

//--- Ex 3 Accidents per districte ---

function exercici03() {

}

//--- Enllaç menu amb funcions ---

document.getElementById("exer01").onclick = function() {
  exercici01();
};

document.getElementById("exer02").onclick = function () {
  exercici02();
};

document.getElementById("exer03").onclick = function () {
  exercici03();
};


