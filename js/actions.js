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

function agregar_al_carrito(id,cantidad)
{
	if(localStorage.getObject("carrito")==null)
	{
		console.log("null");
	}
	else
	{
		console.log(localStorage.getObject("carrito"));
	}
}


/*function verify_session()
{
	$.mobile.changePage('#page');
	if(localStorage.getItem("session")==null)
	{
		$("#init-div").hide();
		$("#login-div").show("Clip");
	}
	else
	{
		data={};
		data.session=localStorage.getItem("session");
		_.pjp(ROOT+"?c=webmaster&m=validatesession",data,"check_response");
	}
}

$(document).ready(function(event){verify_session();});*/



/*function test()
{
	data={};
	data.id="1";
	_.pjp(ROOT+"?c=appserver&m=load_data_expositor",data,"check_response");
}

function login()
{
	data=_.gf("login");
	_.pjp(ROOT+"?c=webmaster&m=loginmaster",data,"login_respuesta");
}

function login_respuesta(data)
{
	if(data.res)
	{
		$("#login-div").hide();
		$("#master-list").show("Clip");
		localStorage.setItem("session",data.last_session_id);
		_.reset("login");
	}
	else
	{
		_.msgl("Error ! Intente de nuevo.","login-msg",true);
	}
}*/

/*function unlogin()
{
	data=_.gf("login");
	_.pjp(ROOT+"?c=webmaster&m=unlogmaster",data,"unlogin_respuesta");
}

function unlogin_respuesta(data)
{
	if(data.unlog)
	{
		$("#login-div").show("Clip");
		$("#master-list").hide();
	}
}*/