let o = { '1': 1, 'a': 2, 'b': 3 }
   for(let k in o) {
    console.log(k);
   } 

   //A) El bucle retorna = 1, a, b

   /* El código proporcionado es un bucle for-in que recorre las propiedades de un objeto llamado "o".  
 
    El objeto "o" tiene tres propiedades: '1' con valor 1, 'a' con valor 2 y 'b' con valor 3.  
    
    El bucle for-in recorre cada propiedad del objeto "o" y en cada iteración imprime el nombre de la propiedad en la consola.  
    
    En este caso, el bucle imprimirá en la consola: 1, a, b. */

    let arr=[1,2,3,4];

    for(let i=0; i < arr.length; i++) { //Primer bucle
        console.log(arr[i]);
    }

    for(let i=0, len=arr.length; i < len; ++i) { //Segundo bucle
        console.log(arr[i]);
    } 

    //b) ¿Muestran la misma información el primer y el segundo bucle?
        //Sí. la muestran

    //c) ¿Cuál es la diferencia entre los mismos?
        //El de abajo declara una variable con la longitud y el de arriva la consigue con una funcion

    //d) ¿Existe diferencia entre ++i e i++?
        // Si, uno lo suma antes y otro despues.

    //e) Y qué ocurre en el siguiente código

    let x = 0;
    let y = x++;
    let z = 0;
    let p = ++x;
    console.log("El valor de Y es "+ y +" el valor de p es "+ p); 

        //En primer lugar, x = 0, luego y = 0; luego x = 0 y finalmente p = 2.
        // El valor de K es 0 y el valor de p es = 2.

    // f) ¿Qué muestra el siguiente código?
    arr.forEach(function(i){console.log(i)});
        //Recorre el array mediante el uso de una funcion recien creada.
        // 1, 2, 3, 4.

    // g) Y el siguiente
    for (i of arr) { 
        console.log(i);
    }

        // Lo mismo. 1,2,3,4.
