/* nav */
$(document).ready(function(){
	$("#op_captura").click(function(event) {
	        $("#contenido").load('../secciones/captura_cedula.html');
	});

	$("#op_equipos").click(function(event) {
	        $("#contenido").load('../secciones/equipos.html');
	});

	$("#op_posiciones").click(function(event) {
	        $("#contenido").load('../secciones/est_equipos.html');
	});

	$("#op_mix").click(function(event) {
	        $("#contenido").load('../secciones/skel.html');
	});



	(function (){
		var btnMenu = document.getElementById('btnMenu');
		var navBarMenu = document.getElementById('navBarMenu');
		btnMenu.addEventListener('click',onClickMenu);
		navBarMenu.addEventListener('click',onClickOption);

		function onClickMenu() {
			navBarMenu.classList.toggle('header-menu-list--show');
		}
		function onClickOption() {
			navBarMenu.classList.toggle('header-menu-list--show');
		}
	}())


});

