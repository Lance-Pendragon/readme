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
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
