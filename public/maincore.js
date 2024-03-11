console.log("ASDASDASD");

function load_panel(idnode,panel){
	$.get('/panels/'+panel+'.html',{'_':$.now()})
	.done(function(data){
	    $("#"+idnode).html(data)
	}).fail(function(jqXHR, textStatus){
		$("#"+idnode).html("fail load..")
	});
}