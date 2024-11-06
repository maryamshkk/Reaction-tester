
		var start = new Date().getTime();




		function randomColor(){
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0 ; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		} 

		function makeShapeAppear() {
			var topPosition = Math.random() * 400;
			var leftPosition = Math.random() * 400;

			var size = Math.random() * 300;

			if (Math.random() > 0.5 ) {
				document.getElementById('shape').style.borderRadius = "50%";
			}
			else{
				document.getElementById('shape').style.borderRadius = "0";
			}
			document.getElementById('shape').style.backgroundColor = randomColor(); 
			document.getElementById("shape").style.width = size + "px";
			document.getElementById("shape").style.height = size + "px";
			document.getElementById("shape").style.top = topPosition + "px";
			document.getElementById("shape").style.left = leftPosition + "px";

			document.getElementById('shape').style.display = "block";
			start = new Date().getTime();
		}

		function appearAfterDelay() {
			setTimeout(makeShapeAppear, Math.random() * 2000);
		}

		appearAfterDelay();
		
		document.getElementById('shape').onclick = function() {
			var end = new Date().getTime();
			var timetaken = (end - start)/1000;
			// alert(timetaken/1000);
			document.getElementById('shape').style.display = "none";
			document.getElementById('timetaken').innerHTML = timetaken + "s";
			appearAfterDelay();
		}
