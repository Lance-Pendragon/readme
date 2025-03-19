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
</script>

<div class="mockup-code w-full text-left">
  <pre data-prefix="$"><code>well hello there</code></pre>
</div>
