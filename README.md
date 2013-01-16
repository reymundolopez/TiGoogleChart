# Ejemplo de uso de las Google Chart API con Titanium/Alloy

Este es un ejemplo básico de como se utilizarían las gráficas, como pasarle parametros desde Titanium y que haga una representación gráfica de las mismas dentro del dispositivo móvil.

Ejemplo de uso:

Dentro del archivo chart.html en la carpeta assets, se modifica los titulos que se desean poner, o se pueden enviar como parametros desde el controlador (index.js).

Dentro del controlador solo se necesita enviar la información que se desea gráficar:
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


----------------------------------
Stuff our legal folk make us say:

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.

