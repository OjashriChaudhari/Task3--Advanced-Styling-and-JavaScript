const jokeText = document.getElementById('joke');
    const jokeBtn = document.getElementById('getJoke');

    async function fetchJoke() {
      try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        jokeText.innerHTML = `${data.setup} <br><b>${data.punchline}</b>`;
      } catch (error) {
        jokeText.textContent = "Oops! Could not fetch a joke 😅";
      }
    }

    jokeBtn.addEventListener('click', fetchJoke);