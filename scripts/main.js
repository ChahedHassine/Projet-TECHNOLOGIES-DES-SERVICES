document.addEventListener('click', function (event) {

				// Only run if the clicked link was an accordion toggle
				if ( !event.target.classList.contains('fréq_toogle') ) return;

				// Get the target content
				var content = document.querySelector(event.target.hash);
				if ( !content ) return;

				// Prevent default link behavior
				event.preventDefault();

				// If the content is already expanded, collapse it and quit
				if ( content.classList.contains('active') ) {
					content.classList.remove('active');
					return;
				}

				// Get all accordion content, loop through it, and close it
				var accordions = document.querySelectorAll('.fréq');
				for (var i = 0; i < accordions.length; i++) {
					accordions[i].classList.remove('active');
				}

				// Open our target content area
				content.classList.add('active');

			}, false);

document.addEventListener('click', function (event) {

				// Only run if the clicked link was an accordion toggle
				if ( !event.target.classList.contains('prev_toogle') ) return;

				// Get the target content
				var content = document.querySelector(event.target.hash);
				if ( !content ) return;

				// Prevent default link behavior
				event.preventDefault();

				// If the content is already expanded, collapse it and quit
				if ( content.classList.contains('active') ) {
					content.classList.remove('active');
					return;
				}

				// Get all accordion content, loop through it, and close it
				var accordions = document.querySelectorAll('.prev');
				for (var i = 0; i < accordions.length; i++) {
					accordions[i].classList.remove('active');
				}

				// Open our target content area
				content.classList.add('active');

			}, false);




fetch('https://coronavirus-19-api.herokuapp.com/all')
  .then(response => response.json())
  .then(commits => document.getElementById('cases').innerHTML = "Aujourd'hui on compte :" + commits.cases + " cas confirmés dans le monde");

fetch('https://coronavirus-19-api.herokuapp.com/all')
  .then(response => response.json())
  .then(commits => document.getElementById('deathes').innerHTML = "Aujourd'hui on compte :" + commits.deaths + " décès dans le monde");

fetch('https://coronavirus-19-api.herokuapp.com/all')
  .then(response => response.json())
  .then(commits => document.getElementById('recovered').innerHTML = "Aujourd'hui on compte :" + commits.recovered + " guérisons dans le monde");
