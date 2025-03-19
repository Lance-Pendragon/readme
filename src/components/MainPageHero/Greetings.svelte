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
  function getRandomGreeting(greetings) {
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  const rows = [
    '<pre data-prefix="$"><code>generateLandingPage()</code></pre>',
    '<pre data-prefix=">"><code>initializing....</code></pre>',
    '<pre data-prefix=">"><code>done!</code></pre>',
    '<pre data-prefix="$"><code>generateTimeAppropriateGreeting()</code></pre>',
    '<pre data-prefix=">"><code>' + getRandomGreeting(greetingsToDisplay) + '</code></pre>',
    '<pre data-prefix="$"><code>generateNerdyGreetingMessage()</code></pre>',
    '<pre data-prefix=">"><code>' + getRandomGreeting(MESSAGES) + '</code></pre>',
  ]
  // do each
</script>

<div class="mockup-code w-full text-left">
    {#each rows as row}
      {@html row}
    {/each}
</div>
