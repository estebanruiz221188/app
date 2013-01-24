// JavaScript Document

$(document).bind("mobileinit", function(){

	// Animación que se presentará por defecto en la aplicación.
	$.mobile.defaultPageTransition = 'fade';

	// Ruta a utilizar para la aplicación.
	window.load_default_route = 1;

	// Expositor ID
	window.EXP = 1667;

	// Rutas a las que se enviará la petición, en general: 0=> Debug, 1=> Producción.
	window.routes={
					0:"http://localhost/app/",
					1:"http://app.exposicionesvirtuales.com/"
				  };

	window.ROOT=routes[load_default_route];
});

