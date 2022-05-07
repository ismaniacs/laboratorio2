//Elian Francisco Treminio Parada TP20007 y Edwin Eismaeli Barrera Arce BA20010 Tarea 2
const tower = document.querySelectorAll('.torre')//Selecciona todas las torres que hay
const cajas = document.querySelectorAll('.box')//Selecciona las 
tower.forEach(torre => {//Para todas las torres
  let hijos = torre.children;
  for (let i = 0; i < hijos.length; i++) {//Recorre los hijos dando los valores de arrastrables 
    if (i === hijos.length - 1) {
      hijos.item(i).setAttribute("draggable", "true");//Setea como arrastrable el hijo de arriba
    } else {
      hijos.item(i).setAttribute("draggable", "false");//Pone los otros como no arrastrables
    }
  }
  torre.addEventListener("mousemove", e => {//Repite el ciclo para hacerlo dinamico a cambios
    for (let i = 0; i < hijos.length; i++) {
      if (i === hijos.length - 1) {
        hijos.item(i).setAttribute("draggable", "true");
      } else {
        hijos.item(i).setAttribute("draggable", "false");
      }
    }
  })
  torre.addEventListener("dragstart", (e) => {//Se activa un evento de la torre al arrastrar
    e.dataTransfer.setData('text/plain', e.target.id)//e
  });
  torre.addEventListener('dragover', (e) => {//Prevenir errores y bugs
    e.preventDefault()
  })
  torre.addEventListener("drop", (e) => {//
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'))//Obtenemos el Box a apendizar
    var numtxt = element.innerText//Numero de lo que movemos
    var idobjeto = e.target.id;//Obtiene Cual de las 3 torres es
    var numhijotorre = e.target.childElementCount//Numero de hijos de la torre
    var hijosTorres = e.target.children//Coleccion de hijos de la torre 
    var papa = element.parentNode//obtiene el padre del elemento
    var numero1disco
    if (numhijotorre !== 0) {
      numero1disco = hijosTorres.item(hijosTorres.length - 1).innerText//Obtiene el # del disco
    } else {
      if (idobjeto == 'disco5' || idobjeto == 'disco4' || idobjeto == 'disco3' || idobjeto == 'disco2' || idobjeto == 'disco1') {
        var b = new Boolean(true);//si se reconoce como disco
      } else {
        b = false;//Es una torre
      }
    }//Para validar if numtxt>numero1disco{error}else{append}
    switch (numhijotorre) {
      case 0://En Caso que la columna esta vacia
        if (b) { alert("Error eso no es una torre intente de nuevo"); }//Valida que lo meta en algo que no sea una torre
        else {
          if (e.target === papa) { console.log("No se apdendiza") }//valida que no se ingrese en la misma columna en diferente poscision
          else {
            element.style.marginTop = "200px";//Poscicion 1
            e.target.appendChild(element);//Apendiza el elemento
          }
        }
        break;
      case 1://En Caso que la columna tenga 1 elemento
        if (numtxt > numero1disco) { alert("Error, Disco mas grande que el se encuentra abajo") }
        else {
          if (e.target === papa) { console.log("No se apdendiza") }
          else {
            element.style.marginTop = "175px";//Poscicion 2
            e.target.appendChild(element);
          }
        }
        break;
      case 2://En Caso que la columna tenga 2 elementos
        if (numtxt > numero1disco) { alert("Error, Disco mas grande que el se encuentra abajo") }
        else {
          if (e.target === papa) { console.log("No se apdendiza") }
          else {
            element.style.marginTop = "150px";//Poscicion 3
            e.target.appendChild(element);
          }
        }
        break;
      case 3://En Caso que la columna tenga 3 elementos
        if (numtxt > numero1disco) { alert("Error, Disco mas grande que el se encuentra abajo") }
        else {
          if (e.target === papa) { console.log("No se apdendiza") }
          else {
            element.style.marginTop = "125px";//Poscicion 4
            e.target.appendChild(element);
          }
        }
        break;
      case 4://En Caso que la columna tenga 4 elementos
        if (numtxt > numero1disco) { alert("Error, Disco mas grande que el se encuentra abajo") }
        else {
          if (e.target === papa) { console.log("No se apdendiza") }
          else {
            element.style.marginTop = "100px";//Poscicion 5
            e.target.appendChild(element);
          }
        }
        break;
    }
  })
})
