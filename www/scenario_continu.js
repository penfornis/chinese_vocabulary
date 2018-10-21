
var hsk_json;

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

	var word = choose_character(hsk_json)
	load_card(word)
	while (document.getElementById("myAudio").paused)
	{
		
	}
	setTimeout(show_pinyin,1000)
	setTimeout(pronounce,2000)
	setTimeout(pronounce,3000)
	setTimeout(show_meaning,3000)

	setTimeout(scenario,4000)
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

