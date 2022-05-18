function colocar_img(){
	var can = document.getElementById("micanvas");
	var ctx = can.getContext("2d");
	var img = document.getElementById("imagen");
	
	ctx.drawImage(img,50,50);
	
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