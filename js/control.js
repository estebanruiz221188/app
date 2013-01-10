/*function cargar_expositor(i)
{
	_.pjp(ROOT+"?c=webmaster&m=load_data_expositor",{"id":i},"verexpositor");
	$("#datos_expositor").html("Cargando datos...");
}

function verexpositor(data){
	$("#datos_expositor").html(data.result);
	runjs(data.js);
}

function change_status()
{
	data.id=$("#datos_expositor [name=id]").val();
	data.estatus=$("#datos_expositor [name='estatus']").val();
	_.pjp(ROOT+"?c=webmaster&m=change_status",data,"check_response");
}

function send_mail()
{
	data.id=$("#datos_expositor [name=id]").val();
	data.mensaje=$("#datos_expositor [name='mensaje']").val();
	_.pjp(ROOT+"?c=webmaster&m=send_mail",data,"check_response");
}

function search_expositores()
{
	data.search=$("#page2 [name=search]").val();
	data.page=$("#page2 [name=page]").val();
	if(data.search != $("#page2 .busqueda_actual").html())
	{
		if(data.search!="")
		{
			$("#page2 [name=page]").val(1);
			data.page=1;
			$('#page2 [name=page]').selectmenu('refresh');
		}	
	}
	_.pjp(ROOT+"?c=webmaster&m=search",data,"check_response");
}

function add_saldo(id_form)
{
	data=_.gf(id_form);
	_.pjp(ROOT+"?c=webmaster&m=add_saldo",data,"check_response");
}

function mostrar_estadistica(id,tipo,obj)
{
	$("#"+obj).html("");
	data={};
	data.id_exp=id;
	data.tipo=tipo;
	data.obj=obj;
	_.pjp(ROOT+"?c=webmaster&m=mostrar_estadistica",data,"check_response");
}*/