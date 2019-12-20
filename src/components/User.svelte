<script>
  import { dateToAge } from "../utils/date.js";
  export let firstName = null;
  export let lastName = null;
  export let dayOfBirth = null;
  export let quote = null;

  $: initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  $: age = dateToAge(dayOfBirth);

  let personalityType = null;

  const colors = ["red", "yellow", "blue", "green"];
</script>

<article
  class:red="{personalityType === 'red'}"
  class:yellow="{personalityType === 'yellow'}"
  class:blue="{personalityType === 'blue'}"
  class:green="{personalityType === 'green'}"
>
  <figure>{initials}</figure>
  <h2>{firstName} {lastName}</h2>
  <blockquote class="with-icon">{quote}</blockquote>
  <div>
    <time class="with-icon" datetime="{dayOfBirth}">{dayOfBirth}</time>
    <span class="with-icon">{age} years old</span>
  </div>

  <nav>
    <h4>Select personality type:</h4>
    <div>
      {#each colors as color}
        <label class="{color}">
          <input
            class="visually-hidden"
            type="radio"
            bind:group="{personalityType}"
            value="{color}"
          />
          <figure class="small"></figure>
          <span class="visually-hidden">{color}</span>
        </label>
      {/each}
    </div>
  </nav>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 1em 2em;
    height: 100%;
  }

  figure {
    display: flex;
    align-self: center;

    margin: 0;
    width: 6rem;
    height: 6rem;

    justify-content: center;
    align-items: center;

    background-color: dimgrey;
    color: white;

    border-radius: 100%;

    font-size: 2rem;
    font-weight: 300;
  }

  .small {
    width: 2rem;
    height: 2rem;
    font-size: 0px;
    align-self: normal;
    transition: opacity 100ms ease;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.3em;
  }

  .with-icon {
    display: flex;
    align-items: center;
    font-weight: 300;
  }

  .with-icon::before {
    display: inline-block;
    font-size: 1.5em;
    margin-right: 0.33em;
    font-style: normal;
  }

  blockquote {
    margin: 0;
    font-style: italic;
  }

  blockquote::before {
    content: "💬";
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  time::before {
    content: "🗓";
  }

  span::before {
    content: "🎂";
  }

  label {
    display: flex;
    cursor: pointer;
    transition: transform 100ms ease;
  }

  label:hover {
    transform: scale(1.2);
  }

  label:hover .small {
    opacity: 1;
  }

  label:hover [type="radio"]:checked + .small {
    transform: scale(1);
  }

  nav {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    align-items: center;
  }

  nav div {
    display: flex;
    width: 80%;
    align-self: center;
    justify-content: space-between;
  }

  .red {
    border-color: var(--red);
  }
  .red > figure {
    background-color: var(--red);
  }

  .yellow {
    border-color: var(--yellow);
  }
  .yellow > figure {
    background-color: var(--yellow);
  }

  .blue {
    border-color: var(--blue);
  }
  .blue > figure {
    background-color: var(--blue);
  }

  .green {
    border-color: var(--green);
  }
  .green > figure {
    background-color: var(--green);
  }

  [type="radio"]:checked + .small {
    opacity: 1;
    transform: scale(1.2);
  }
  [type="radio"]:not(:checked) + .small {
    opacity: 0.5;
  }
</style>
