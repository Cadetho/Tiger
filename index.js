var donutlist = [
	{donutid: "CI", file:"food1.jpg"},
	{donutid: "SCC", file:"food2.jpeg"},
	{donutid: "SP", file:"food3.jpeg"},
	{donutid: "HVG", file:"food4.jpeg"},
	{donutid: "CTC", file:"food1.jpg"},
	{donutid: "KLP", file:"food2.jpeg"},
	{donutid: "PC", file:"food3.jpeg"},
	{donutid: "TM", file:"food4.jpeg"},
	{donutid: "TD", file:"food1.jpg"},
	{donutid: "MB", file:"food2.jpeg"},
]
var img = document.getElementById("donut_pic");
function donutselect(id){
	var result = donutlist.filter(x => x.donutid === id);
	img.src=result[0].file;
}
/* donutgroup.addEventListener("click", function(event){
	
	var id = event.target.id;
	
	console.log(id);
}); */


var donutgroup = document.getElementsByClassName("button_row");
var container_bbox= document.getElementById("option_buttons").getBoundingClientRect();
var container_top = container_bbox.top;
var height = container_bbox.height;

for(i=0;i<donutgroup.length;i++){
	var bbox=donutgroup[i].getBoundingClientRect();
	var middle = (bbox.top+bbox.bottom)/2 - container_top;

	var ratio = middle/height*100;
	var new_width = 100-ratio/2;
	donutgroup[i].style.width = new_width + "%";

}