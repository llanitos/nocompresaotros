// Constructos¡r Comprador. Pasamos los datos del comprador construye objeto y lo pasa a toString
function Comprador(nombre, apellido1, apellido2, direccion, nif) {

    // Paramaetros
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.direccion = direccion;
	this.nif = nif;
   

	this.toString = function () {
  		//var retorno = "Comprador: " + this.getNombre() + ", " + this.getApellido1() + " " + this.getApellido2() + ", " + this.getDireccion() + ", " + this.getNif();
        var retorno = "Comprador: " + this.nombre + ", " + this.apellido1 + " " + this.apellido2 + ", " + this.direccion + ", " + this.nif;
  		return retorno;
	}

    // Setters
	this.setNombre = function (nombre) {
  		this.nombre = nombre;
	}

    this.setApellido1 = function (apellido1) {
        this.apellido1 = apellido1;
    }

    this.setApellido2 = function (apellido2) {
        this.apellido2 = apellido2;
    }

    this.setDireccion = function (direccion) {
        this.direccion = direccion;
    }

    this.setNif = function (nif) {
        this.nif = nif;
    }

    // Getters
    this.getNombre = function () {
        return this.nombre;
    }

    this.getApellido1 = function () {
        return this.apellido1;
    }

    this.getApellido2 = function () {
        return this.apellido2;
    }

    this.getDireccion = function () {
        return this.direccion;
    }

    this.getNif = function () {
        return this.nif;
    }


}


// Constructor Categorias. Se le pasa el array con los datos, añade elimina y 
function Categorias(arrayListado) {

    this.arrayListado=arrayListado;

    // Eliminar categoria
    this.delCat = function (posicion) {
        arrayListado.splice(posicion, 1);
    }

     // Añadir categoria
    this.addCat = function (newCat) {
        arrayListado.push(newCat); 
    }

    this.toString = function () {
        var retorno = "";
        for (var i=0; i< arrayListado.length; i++) {
            var retorno = retorno + "</br>" + this.arrayListado[i];
        }
        return retorno;
    }

    // Pasamos valor para comprobar si el valor esta contenido entre el listado de categorias
    this.checkCat = function (cat) {
        
        var valor = Boolean(false);
        for (var i=0; i< arrayListado.length; i++) {
            if (cat == this.arrayListado[i]) {
                valor = true;
            }
        }
        return valor;
    }

}

// Constructor Item
function Item(nombreItem, descripcion, categoria, precio, nuevo) {

    // Parámetros
    this.nombreItem = nombreItem;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.nuevo = nuevo;
   

    this.toString = function () {
        var retorno = "Item: " + this.getNombreItem() + ", " + this.getDescripcion() + ", " + this.getCategoria() + ", " + this.getPrecio() + ", " + this.getNuevo();
        return retorno;
    }

    // Setters
    this.setNombreItem = function (nombreItem) {
        this.nombre = nombre;
    }

    this.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    }

    this.setCategoria = function (categoria) {
        this.categoria = categoria;
    }

    this.setPrecio = function (precio) {
        this.precio = precio;
    }

    this.setNuevo = function (nuevo) {
        this.nuevo = nuevo;
    }

    // Getters
    this.getNombreItem = function () {
        return this.nombreItem;
    }

    this.getDescripcion = function () {
        return this.descripcion;
    }

    this.getCategoria = function () {
        return this.categoria;
    }

    this.getPrecio = function () {
        return this.precio;
    }

    this.getNuevo = function () {
        var valor;
        if (this.nuevo == true) {
            valor = "Nuevo a estrenar";
        } else {
            valor = "Segunda mano";
        }
        return valor;
    }


}
