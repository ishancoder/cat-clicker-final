var allImg = document.getElementById("catlist").getElementsByTagName("img");
var selected = null;

var nameAndCount = function(cat) {
	var y = document.getElementById("cat0123456");
	if(y){y.remove();}

	var catName = document.createElement("h3");
	catName.setAttribute("id","cat0123456");
	catName.innerHTML = cat.getAttribute("alt") +" Has Clicked For: " + cat.clicks + " Times";
	return catName;
}

for (var i=0; i < allImg.length ; i++) {

	allImg[i].clicks = 0;

	allImg[i].addEventListener("click",function(evt){
		var x = document.getElementById("9876543210");
		
		if(x){x.remove();}
		

		selected = this;

		var catImg = document.createElement("img");
		catImg.setAttribute("src",this.getAttribute("src"));
		catImg.setAttribute("id","9876543210")
		var parent = document.getElementById("catarea");
		parent.appendChild(catImg);
		parent.appendChild(nameAndCount(this));
	});
}

var catArea = document.getElementById("catarea");
catArea.addEventListener("click",function(){
	if(selected) {
		selected.clicks += 1;
		var parent = document.getElementById("catarea");
		parent.appendChild(nameAndCount(selected));
	}
});