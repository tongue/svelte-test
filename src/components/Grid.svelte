<ul>
  <slot />
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
    padding: 0;
  }
</style>
