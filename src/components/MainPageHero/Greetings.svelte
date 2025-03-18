<script>
  import { TITLES, MESSAGES } from "../../constants/greetings";

  const currentHour = new Date().getHours();

  let greetingsToDisplay;

  if (currentHour >= 5 && currentHour < 12) {
    greetingsToDisplay = TITLES.MORNING;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingsToDisplay = TITLES.AFTERNOON;
  } else {
    greetingsToDisplay = TITLES.EVENING;
  }

  // Function to randomly pick a greeting
  function getRandomGreeting(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
</script>

<div class="max-w-md">
  <h1 class="mb-5 text-5xl font-bold">
    {getRandomGreeting(greetingsToDisplay)}
  </h1>
  <p class="mb-5">
    {getRandomGreeting(MESSAGES)}
  </p>
  <button class="btn btn-primary">Get Started</button>
</div>
