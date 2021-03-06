function check_response(data)
{
	memory=data;
	if(data.result)
	{
		if(data.js)
			runjs(data.js);
	}
	else
	{
		if(data.js)
			runjs(data.js);
	}
	if(data.msg)
	{
		//console.log(data.msg);
	}
}

function runjs(js)
{
	$(js).each(function(){eval(eval(JSON.stringify(this)));})
}

$(document).ready(function(event){$.mobile.changePage('#page');});

function load_pages()
{
	_.pjp(ROOT+"?c=central&m=load_pages",{"id":EXP},"check_response");
}

function load_minimos_y_multiplos()
{
	_.pjp(ROOT+"?c=central&m=load_minimos_y_multiplos",{"id":EXP},"check_response");
}

function load_singular_page(id)
{
	_.pjp(ROOT+"?c=central&m=load_singular_page",{"id":id},"check_response");
}

function load_products()
{
	_.pjp(ROOT+"?c=central&m=load_products",{"id":EXP},"check_response");
}

function load_singular_product(id)
{
	_.pjp(ROOT+"?c=central&m=load_singular_product",{"id":id},"check_response");
}

function load_categories()
{
	_.pjp(ROOT+"?c=central&m=load_categories",{"id":EXP},"check_response");
}

function search_products(formid)
{
	data=_.gf(formid);
	data.expositor_id=EXP;
	_.pjp(ROOT+"?c=central&m=search_products",data,"check_response");
}

function lista_precios()
{
	data={};
	data.expositor_id=EXP;
	data.search="";
	data.tipo="lista_precios";
	_.pjp(ROOT+"?c=central&m=search_products",data,"check_response");
}

function agregar_al_carrito(id)
{
	if(typeof carrito==='undefined')
	{
		carrito={};
		carrito[id]=traer_minima_cantidad(id);
	}
	else
	{
		if(id in carrito)
		{
			carrito[id]=carrito[id]+traer_multiplos(id);
		}
		else
		{
			carrito[id]=traer_minima_cantidad(id);
		}
	}
	mostrar_carrito_de_compras();
}

function disminuir_del_carrito(id)
{
	if(typeof carrito==='undefined')
	{
		
	}
	else
	{
		if(id in carrito)
		{
			if(carrito[id]==traer_minima_cantidad(id))
			{
				carrito[id]=0;
			}
			else
			{
				carrito[id]=carrito[id]-traer_multiplos(id);
			}
			if(carrito[id]>0 && carrito[id]<traer_minima_cantidad(id))
			{
				carrito[id]=traer_minima_cantidad(id);
			}
			if(carrito[id]<=0)
			{
				delete carrito[id];
			}
			var cont = 0;
			for(var e in carrito)
			    if(carrito.hasOwnProperty(e))
			        cont++;
			if(cont==0)
			{
				delete carrito;
			}
			else
			{
			}
		}
	}
	mostrar_carrito_de_compras();
}

function remover_del_carrito(id)
{
	if(typeof carrito==='undefined')
	{
		
	}
	else
	{
		if(id in carrito)
		{
			delete carrito[id];
			var cont = 0;
			for(var e in carrito)
			    if(carrito.hasOwnProperty(e))
			        cont++;
			if(cont==0)
			{
				delete carrito;
			}
			else
			{

			}
		}
	}
	mostrar_carrito_de_compras();
}

function traer_minima_cantidad(id)
{
	/*if(typeof min_mul[id]==='undefined')
	{
		return 1;
	}
	else
	{
		return parseInt(min_mul[id]["min"]);
	}*/
	return 1;
}

function traer_multiplos(id)
{
	/*if(typeof min_mul[id]==='undefined')
	{
		return 1;
	}
	else
	{
		return parseInt(min_mul[id]["mul"]);
	}*/
	return 1;
}

function mostrar_carrito_de_compras()
{
	$.mobile.changePage("#page7");
	products="";
	if(typeof carrito==='undefined')
	{
		products+="<h3>No hay productos en su carrito de compras.</h3>";
		$("#lista_carrito").html(products);
	}
	else
	{
		$('#lista_carrito').html("");
		_.pjp(ROOT+"?c=central&m=load_carrito",{"carrito":carrito,"expositor_id":EXP},"check_response");
	}
}

function crear_pedido()
{
	$.mobile.changePage("#page8");
	if($("#seleccionar_destino").html()=="")
	{
		_.pjp(ROOT+"?c=central&m=load_destinos",{"id":EXP},"check_response");
	}
	else
	{
		load_costos_envio();
	}
}

function load_costos_envio()
{
	dest=$("#sel_dest").val();
	_.pjp(ROOT+"?c=central&m=load_costos_envio",{"carrito":carrito,"destino":dest},"check_response");
}

function enviar_pedido()
{
	p=_.gf("pedido");
	_.pjp(ROOT+"?c=central&m=enviar_pedido",{"carrito":carrito,"expositor_id":EXP,pedido_info:p},"check_response");
	$("#resultado_pedido").html("Procesando su pedido...");
	$.mobile.changePage('#page9');

}

function load_formas_de_pago()
{
	_.pjp(ROOT+"?c=central&m=load_formas_de_pago",{"expositor_id":EXP},"check_response");
}

function seguircomprando()
{
	$.mobile.changePage('#page6');
}

function solicita_info(prod)
{
	$("#solicitar_informacion [name=producto]").val(prod);
	$.mobile.changePage('#page10');
}

function enviar_solicitar_info()
{
	data=_.gf("solicitar_informacion");
	_.pjp(ROOT+"?c=central&m=enviar_solicitar_info",{"expositor_id":EXP,"info":data},"check_response");
}

//load_minimos_y_multiplos();

//load_formas_de_pago();