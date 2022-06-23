<svelte:head>
  <link rel="stylesheet" href="src/scribbler-global.css">
  <link rel="stylesheet" href="src/scribbler-landing.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
</svelte:head>


<script>
  let count = 0;

window.onload = function () {
  fetch(import.meta.env.VITE_APP_API_URL, {
    method: "POST",
  })
    .then((response) => response.text())
    .then((data) => {
      count = data;
  });
}

</script>

<nav>
  <div class="logo"></div>
  <ul class="menu">
    <div class="menu__item toggle"><span></span></div>
    <li class="menu__item"><a href="" class="link link--dark"><i class="fa fa-github"></i> Github</a></li>
    <li class="menu__item button--secondary">This page has been visited {count} times</li>
  </ul>
</nav>
