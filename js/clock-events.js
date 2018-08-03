var babycry = new Audio('audio/babycry.mp3');
babycry.loop = true;

var audio = new Audio('audio/woohoo.mp3');

var buzzer = new Audio('audio/buzzer.mp3')
buzzer.loop = true;

const colors = [
	'-webkit-linear-gradient(#fdc830, #f37335)',
	'-webkit-linear-gradient(#a8ff78, #78ffd6)',
	'-webkit-linear-gradient(#4e54c8, #8f94fb)',
	'-webkit-linear-gradient(#11998e, #38ef7d)',
	'-webkit-linear-gradient(#74ebd5, #acb6e5)'
]
let ctr = 0;

function initEvents() {
	const interval = setInterval(() => {
		// Retrieve current time
		var date = new Date();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hours = date.getHours();

		// var now = new Date().getTime();


		// Crying baby alarm @ 10:27
		if (hours === 10 && minutes === 27 && babycry.paused) {
			babycry.play();
		}

		// Pause baby crying @ 10:28
		if (hours === 10 && minutes === 28 && !babycry.paused) {
			
		}

		// Blinking Latch GO! at @ 10:28
		if (hours === 10 && minutes === 29) {
			babycry.pause();
			babycry.currentTime = 0;
			document.getElementById("Clock").style.display = "none";
			document.getElementById("CountdownTimer").innerHTML = "LATCH GO";

			if (seconds % 2 == 0) {
				document.getElementById("CountdownTimer").style.display = "block";
			} else {
				document.getElementById("CountdownTimer").style.display = "none";
			}
			
			if (seconds > 50) {
				document.getElementById("CountdownTimer").style.background = colors[ctr++ % 6];			
				buzzer.play();
			}
		}

		// When timer is at @10:30 hide clock and show countdown timer
		if (hours === 10 && minutes === 30) {
			buzzer.pause();
			buzzer.currentTime=0;
			document.getElementById("CountdownTimer").style.background = colors[ctr++ % 5];			
			document.getElementById("Clock").style.display = "none";
			document.getElementById("CountdownTimer").style.display = "block";
			document.getElementById("CountdownTimer").innerHTML = 60 - seconds;
			document.getElementById("CountdownTimer").style.fontSize = '25rem';
		}

		if(hours === 10 && minutes === 31) {
		clearInterval(interval);
		document.getElementById("CountdownTimer").style.background = '-webkit-linear-gradient(rgb(136, 64, 110), rgb(151, 15, 90))';
		document.getElementById("CountdownTimer").style.fontSize = '12rem';
        var woohoo = " Woohoo! ";
        document.getElementById("CountdownTimer").innerHTML = woohoo;
        document.getElementsByClassName("pp")[0].style.display = "inline";
        document.getElementsByClassName("pp")[1].style.display = "inline";

        var confettiSettings = { target: 'my-canvas', max: 250 };
        var confetti = new window.ConfettiGenerator(confettiSettings);
        confetti.render();

        audio.play();
    	}
    
	}, 1000);
}

initEvents();

