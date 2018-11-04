NB_IMAGES = 12
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function image_url(i){
	return "/img/china_"+i+".jpg"
}

//https://source.unsplash.com/1600x900/?china

function wonderful(){
	var image = document.images[0];
	var downloadingImage = new Image();
	downloadingImage.onload = function(){
		word_spot = document.getElementById("word");
		word_spot.style.background ="url("this.src+")"
    	 
	};
	i = getRandomInt(NB_IMAGES)+1;
	downloadingImage.src = image_url(i);


} 



