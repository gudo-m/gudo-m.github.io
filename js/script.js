$("[class^=tovar]").show();
$("[id=sort]").css("background-color","transparent")
$("[id=sort]").css("color","black")
$("[class~=all1]").css("color","#EAEAEA");
$("[class~=all1]").css("background-color","#88738C");
$("[class~=pr").hide();
// РЕАКЦИИ НА КНОПКИ МЕНЮ
$(".all1").click(function() {
	$("[class~=tovar]").show();
	$("[class~=pr").hide();
	$("[class~=border_smena_v_js]").css("border-right", "none");
	$("[id=sort]").css("background-color","transparent")
	$("[id=sort]").css("color","black")
	$("[class=katalog]").css("height","2700px")
	$(this).css("color","#EAEAEA");
	$(this).css("background-color","#88738C");
	
});
$(".design1").click(function() {
	$("[class^=tovar]").hide();
	$("[class~=pr").hide();
	$("[class~=design]").show();
	$("[class~=border_smena_v_js]").css("border-right", "none");
	$("[id=sort]").css("background-color","transparent")
	$("[id=sort]").css("color","black");
	$(this).css("color","#EAEAEA");
	$("[class=katalog]").css("height","2250px")
	$(this).css("background-color","#88738C");
	
});
$(".montaj1").click(function() {
	$("[class^=tovar]").hide();
	$("[class~=montaj]").show();
	$("[class~=pr").hide();
	$("[class~=border_smena_v_js]").css("border-right", "none");
	$("[class=katalog]").css("height","450px")
	$("[id=sort]").css("background-color","transparent")
	$("[id=sort]").css("color","black");
	$(this).css("color","#EAEAEA");
	$(this).css("background-color","#88738C");
	
});
$(".program1").click(function() {
	$("[class^=tovar]").hide();
	$("[class~=pr").hide();
	$("[class~=program]").show();
	$("[class~=border_smena_v_js]").css("border-right", "none");
	$("[id=sort]").css("background-color","transparent")
	$("[class=katalog]").css("height","450px")
	$("[id=sort]").css("color","black");
	$(this).css("color","#EAEAEA");
	$(this).css("background-color","#88738C");
	
});
$(".obr1").click(function() {
	$("[class^=tovar]").hide();
	$("[class~=pr").hide();
	$("[class~=obr]").show();
	$("[class~=border_smena_v_js]").css("border-right", "1px dotted #88738C");
	$("[class=katalog]").css("height","450px")
	$("[id=sort]").css("background-color","transparent")
	$("[id=sort]").css("color","black");
	$(this).css("color","#EAEAEA");
	$(this).css("background-color","#88738C");
	
});
$(".pr1").click(function() {
	$("[class^=tovar]").hide();
	$("[class~=pr]").show();
	$("[class~=border_smena_v_js]").css("border-right", "none");
	$("[id=sort]").css("background-color","transparent")
	$("[class=katalog]").css("height","350px")
	$("[id=sort]").css("color","black");
	$(this).css("color","#EAEAEA");
	$(this).css("background-color","#88738C");

});