<script>
  import Twitter from "./Twitter.svelte";
  import Youtube from "./Youtube.svelte";
</script>

<footer
  class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
>
  <nav class="grid grid-flow-col gap-4">
    <a href="/" lass="link link-hover">About Me</a>
    <a href="/" class="link link-hover">Contact</a>
    <!-- # Maybe a pop-up? -->
    <a href="/" class="link link-hover">Other Works</a>
  </nav>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <Twitter />
      <Youtube />
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>
      Copyright © {new Date().getFullYear()} - All right reserved by Lance Pendragon
    </p>
  </aside>
</footer>
