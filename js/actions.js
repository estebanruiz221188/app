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
	if(typeof min_mul[id]==='undefined')
	{
		return 1;
	}
	else
	{
		return parseInt(min_mul[id]["min"]);
	}
}

function traer_multiplos(id)
{
	if(typeof min_mul[id]==='undefined')
	{
		return 1;
	}
	else
	{
		return parseInt(min_mul[id]["mul"]);
	}
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
	
}

load_minimos_y_multiplos();