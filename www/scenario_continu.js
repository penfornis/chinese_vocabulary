
var hsk_json;
var hsk2_json;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function choose_character(hsk_json)
{
	i = getRandomInt(hsk_json.length)
	return hsk_json[i]
}

function load_card(word)
{
	var word_spot = document.getElementById("word");
	var pinyin_spot = document.getElementById("pinyin");
	var meaning_spot = document.getElementById("meaning")
	var audio_spot = document.getElementById("myAudio");
	word_spot.innerHTML = word.character;

	pinyin_spot.style.visibility = "hidden";
	pinyin_spot.innerHTML = word.pinyin;

	meaning_spot.style.visibility = "hidden";
	meaning_spot.innerHTML = word.meaning;

	audio_spot.src = word.sound_file;
	audio_spot.load()
	console.log(audio_spot.duration)

}
function scenario()
{

	var word = choose_character(hsk2_json)
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



const req = new XMLHttpRequest();

req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            hsk_json = JSON.parse(this.responseText)
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

req.open('GET', '../res/hsk_1.json', true);
req.send(null);


const req2 = new XMLHttpRequest();

req2.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            hsk2_json = JSON.parse(this.responseText)
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

req2.open('GET', '../res/hsk_2.json', true);
req2.send(null);



