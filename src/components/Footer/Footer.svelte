<script>
  import Twitter from "./Twitter.svelte";
  import Youtube from "./Youtube.svelte";
  import Facebook from "./Facebook.svelte";
</script>

<footer
  class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
>
  <nav class="grid grid-flow-col gap-4">
    <a href="/" class="link link-hover">About Me</a>
    <a href="/" class="link link-hover">Contact</a>
    <!-- # Maybe a pop-up? -->
    <a href="/" class="link link-hover">Other Works</a>
  </nav>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <Twitter />
      <Youtube />
      <Facebook />
    </div>
  </nav>
  <aside>
    <p>
      Copyright © {new Date().getFullYear()} - All right reserved by Lance Pendragon
    </p>
  </aside>
</footer>
