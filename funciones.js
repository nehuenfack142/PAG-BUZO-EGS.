function colocar_img(){
	var can = document.getElementById("micanvas");
	var ctx = can.getContext("2d");
	var img = document.getElementById("imagen");
	ctx.font = "30px Arial";
	ctx.fillStyle ="red";
	ctx.fillText("Hola",15,15);
	
	ctx.drawImage(img,5,5);
	
}
function guardar_canvas_local(){
	var can = document.getElementById("micanvas");
	var ctx = can.getContext("2d");
	var imagen = can.toDataURL();
	var link = document.createElement("a");
	link.href = imagen;
	link.download = "saveimgcanvas";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}