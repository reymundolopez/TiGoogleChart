
$.index.open();

setTimeout(function(e){
	Ti.App.fireEvent("drawTheChart", { data : [
		["Weeks", "Rey" , "Caro", "Pablo"],
		["1" , 4, 6, 2],
		["2" , 6, 4, 4],
		["3" , 3, 3, 4],
		["4" , 6, 8, 10],
		]}
	);
}, 2000);