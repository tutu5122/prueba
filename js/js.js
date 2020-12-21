function CalcularIva() {
	var iva = 0.19;
	var valorSinIva = parseInt($("#total").val());
	var totaConIva = valorSinIva * 0.19;
	$("#totalIva").val(totaConIva + valorSinIva);
	if ($("#totalIva").val() > 0) {
		$('#btnEnviar').prop('disabled', false);
	}
}

function enviarInformacion() {
	blanquear();
	var usuario_nombre = $("#inputName").val();
	var usuario_apellido = $("#inputlastName").val();
	var usuario_rut = $("#rutnumber").val();
	var usuario_rutdv = $("#inputRutDV").val();
	var usuario_nacimiento = $("#inputnacimiento").val();
	var usuario_direcion = $("#inputAddress").val();
	var usuario_marca = $("#inputMarca").val();
	var usuario_modelo = $("#inputModelo").val();
	var usuario_año = $("#fechanumber").val();
	var usuario_select = $("#encargado").val();
	var usuario_fecha = $("#inputfecha").val();
	var usuario_hora = $("#inputhora").val();
	var totalIva = $("#totalIva").val();
	if (usuario_nombre == "") {
		$("#inputName").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar el usuario!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_apellido == "") {
		$("#inputRut").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar el apellido!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_rut == "") {
		$("#numbertRut").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar Rut!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_rutdv == "") {
		$("#inputRutDV").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar digito verificador!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_nacimiento == "") {
		$("#inputnacimiento").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar Fecha de Nacimiento!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_direcion == "") {
		$("#inputAddress").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar su Direción!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_marca == "") {
		$("#inputMarca").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar su Marca de Vehículo!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_modelo == "") {
		$("#inputModelo").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar su Modelo de  Vehículo!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_año == "") {
		$("#fechanumber").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar el Años de su Vehículo!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_select == "1") {
		swal("Atención!", "Debe ingresar un Encargado!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_fecha == "") {
		$("#inputfecha").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar una Fecha !", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else if (usuario_hora == "") {
		$("#inputhora").css("background-color", "#ffe2e2");
		swal("Atención!", "Debe ingresar una Hora!", "error");
		$("html,body").animate({
			scrollTop: 0
		}, "fast");
	} else {
		swal("Realizado", "Estimad@ " + usuario_nombre + " Su Total es $ " + totalIva + " Gracias ", "success");
	}
}

function blanquear() {
	$("#inputName").css("background-color", "white");
	$("#inputlastName").css("background-color", "white");
	$("#rutnumber").css("background-color", "white");
	$("#inputRutDV").css("background-color", "white");
	$("#inputnacimiento").css("background-color", "white");
	$("#inputAddress").css("background-color", "white");
	$("#inputMarca").css("background-color", "white");
	$("#inputModelo").css("background-color", "white");
	$("#fechanumber").css("background-color", "white");
	$("#inputfecha").css("background-color", "white");
	$("#inputhora").css("background-color", "white");
}

function sololetras(e) {
	key = e.keyCode || e.which;
	teclado = String.fromCharCode(key).toLowerCase();
	letras = "qwertyuiopasdfghjklñzxcvbnmáéíóú ";
	especiales = "8-37-38-46-164";
	teclado_especial = false;
	for (var i in especiales) {
		if (key == especiales[i]) {
			teclado_especial = true;
			break;
		}
	}
	if (letras.indexOf(teclado) == -1 && !teclado_especial) {
		return false;
	}
}

function soloNumeros(e) {
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

function direccion(e) {
	key = e.keyCode || e.which;
	teclado = String.fromCharCode(key).toLowerCase();
	letras = "qwertyuiopasdfghjklñzxcvbnmáéíóú0123456789 ";
	especiales = "8-37-38-46-164";
	teclado_especial = false;
	for (var i in especiales) {
		if (key == especiales[i]) {
			teclado_especial = true;
			break;
		}
	}
	if (letras.indexOf(teclado) == -1 && !teclado_especial) {
		return false;
	}
}

function verificador(e) {
	key = e.keyCode || e.which;
	teclado = String.fromCharCode(key).toLowerCase();
	letras = "k0123456789";
	especiales = "8-37-38-46-164";
	teclado_especial = false;
	for (var i in especiales) {
		if (key == especiales[i]) {
			teclado_especial = true;
			break;
		}
	}
	if (letras.indexOf(teclado) == -1 && !teclado_especial) {
		return false;
	}
}
$(document).ready(function () {
	$('#rutnumber')
		.keypress(function (event) {
			if (event.which < 48 || event.which > 57 || this.value.length === 8) {
				return false;
			}
		});
});
$(document).ready(function () {
	$('#fechanumber')
		.keypress(function (event) {
			if (event.which < 48 || event.which > 57 || this.value.length === 4) {
				return false;
			}
		});
});
$('input:checkbox').change(function () {
	var total = 0;
	$('input:checkbox:checked').each(function () {
		total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
	});
	$("#total").val(total);
	$("#totalIva").val(total);
	$('#btnEnviar').prop('disabled', true);
});