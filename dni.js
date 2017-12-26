function validarDNI(nif) {

	var numero; // Parte numérica
	var letra; // La letra dada
	var resto; // resto que da al dividir el numero entre 23
	var regex = /^\d{8}[a-zA-Z]$/;  // Regex para comprobar que haya 8 numeros al principio y una letra al final
	var letrasNIF="TRWAGMYFPDXBNJZSQVHLCKET" // Las letras que se usan para el nif, cada una corresponde a un valor de los posibles restos del 0 al 22
	var letraExtraida; // La letra extraida según el resto

	if (regex.test(nif)) { // si el regex es valido
		// separamos numero,letra (pasandola a mayúsculas) y calculamos el resto
		numero=nif.substr(0, 8);
		letra=nif.substr(8, 1).toUpperCase();
		resto=numero%23;
		// Extraemos la letra de letrasNIF según el resto
		letraExtraida=letrasNIF.substr(resto, 1);
		if (letra == letraExtraida) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}