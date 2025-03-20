<script>
  import { onMount } from "svelte";
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

  function getRandomGreeting(greetings) {
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  const rows = [
    '<pre data-prefix="$"><code>generateLandingPage()</code></pre>',
    '<pre data-prefix=">"><code>initializing....</code></pre>',
    '<pre data-prefix=">"><code>done!</code></pre>',
    '<pre data-prefix="$"><code>generateTimeAppropriateGreeting()</code></pre>',
    '<pre data-prefix=">"><code>' +
      getRandomGreeting(greetingsToDisplay) +
      "</code></pre>",
    '<pre data-prefix="$"><code>generateNerdyGreetingMessage()</code></pre>',
    '<pre data-prefix=">"><code>' +
      getRandomGreeting(MESSAGES) +
      "</code></pre>",
  ];

  let currentRow = 0;

  onMount(() => {
    const interval = setInterval(() => {
      console.log(currentRow);
      if (currentRow < rows.length) {
        currentRow += 1;
      } else {
        clearInterval(interval);
      }
    }, 1500);
  });
</script>

<div class="mockup-code w-full text-left">
  {#each rows.slice(0, currentRow) as row}
    <div class="fade">
      {@html row}
    </div>
  {/each}
</div>
