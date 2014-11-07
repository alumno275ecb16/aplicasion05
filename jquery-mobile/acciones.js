// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#disp table td').eg(3).text(device.model);
		$('#disp table td').eg(5).text(device.cordova);
		$('#disp table td').eg(7).text(device.platform);
		$('#disp table td').eg(9).text(device.version);
		$('#disp table td').eg(11).text(device.uuid);
	document.addEventListener("pause",function(){
		esccribehistoria('la app se pauso');
	},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria('la app se reinicio');
	},false);//resume
	document.addEventListener("online",function(){
		esccribehistoria('la app esta en linea');
	},false);//se conecto
	document.addEventListener("offline",function(){
		esccribehistoria('la app se desconecto de la red ');
	},false);//se desconecto
	},false);//ready device
});//document
function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}