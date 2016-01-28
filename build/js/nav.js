/* nav */
$(document).ready(function(){
	$("#op_captura").click(function(event) {
	        $("#contenido").load('../secciones/captura_cedula.html');
	});

	$("#op_equipos").click(function(event) {
	        $("#contenido").load('../secciones/equipos.html');
	});

	





	(function (){
		var btnMenu = document.getElementById('btnMenu');
		var navBarMenu = document.getElementById('navBarMenu');
		btnMenu.addEventListener('click',onClickMenu);

		function onClickMenu() {
			navBarMenu.classList.toggle('header-menu-list--show');
		}

	}())





});

