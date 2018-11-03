function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function choose_character(hsk_json)
{
	i = getRandomInt(hsk_json.length);
	return hsk_json[i];
}

function choose_hsk(){
		var path = window.location.pathname;
		var path_list = path.split('/');
		console.log("path");
		console.log(path_list);
		var index = path_list.indexOf('hsk')+1;
		var value = parseInt(path_list[index]);
		var hsk = hsk_2;

		if(value == 1)
		{
			hsk = hsk_1;
		}
		if(value == 2)
		{
			hsk = hsk_2;
		}
		if(value == 3)
		{
			hsk = hsk_3;
		}
		if(value == 4)
		{
			hsk = hsk_4;
		}
		if(value == 5)
		{
			hsk = hsk_5;
		}

				
		return hsk;

}
function load_card(word)
{
	var word_spot = document.getElementById("word");
	var pinyin_spot = document.getElementById("pinyin");
	var meaning_spot = document.getElementById("meaning");
	var audio_spot = document.getElementById("myAudio");
	word_spot.innerHTML = word.character;

	pinyin_spot.style.visibility = "hidden";
	pinyin_spot.innerHTML = word.pinyin;

	meaning_spot.style.visibility = "hidden";
	meaning_spot.innerHTML = word.meaning;

	audio_spot.src = word.sound_file;
	audio_spot.load();
	console.log(audio_spot.duration);

}
function scenario()
{
	var audio_spot = document.getElementById("myAudio");
	audio_spot.onplay = false;
	audio_spot.controls = false;
	hsk_json = choose_hsk();
	var word = choose_character(hsk_json)
	load_card(word)
	var time_base = 800
	var n = word.character.length
	var time = n*time_base
//	while (document.getElementById("myAudio").paused)
//	{

//	}
	setTimeout(show_pinyin,time)
	setTimeout(pronounce,2*time)
	setTimeout(pronounce,3*time)
	setTimeout(show_meaning,3*time)

	setTimeout(scenario,4*time)
}

function show_pinyin()
{
 	document.getElementById("pinyin").style.visibility = "visible";
}

function show_meaning()
{
	document.getElementById("meaning").style.visibility = "visible";
}

function pronounce() {
  	audio_spot = document.getElementById("myAudio");
	audio_spot.play()
	//var audio = new Audio("http://www.noiseaddicts.com/samples_1w72b820/3732.mp3");
	//audio.play();
 // setTimeout(p, 2000);
}


//setTimeout(pronounce, 2000);
