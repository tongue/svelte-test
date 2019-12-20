<script context="module">
  export function preload() {
    return this.fetch("index.json")
      .then(r => r.json())
      .then(users => ({ users }));
  }
</script>

<script>
  import User from "../components/User.svelte";
  import Grid from "../components/Grid.svelte";
  import { dateToAge } from "../utils/date.js";

  export let users;

  let sort = "firstName";
  let selected = 0;

  const ages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 100];

  $: manipulatedUsers = users
    .filter(user => {
      if (selected) {
        const age = dateToAge(user.dayOfBirth);
        return age > selected;
      }

      return true;
    })
    .sort((a, b) => {
      let nameA;
      let nameB;

      if (sort === "firstName") {
        nameA = a.firstName;
        nameB = b.firstName;
      } else {
        nameA = a.lastName;
        nameB = b.lastName;
      }

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
</script>

<svelte:head>
  <title>Users</title>
</svelte:head>
<header>
  <h1>Users</h1>
  <div class="tools">
    <nav>
      <h4>Sort by:</h4>
      <label>
        <input type="radio" bind:group="{sort}" value="firstName" />
        First name (a-z)
      </label>
      <label>
        <input type="radio" bind:group="{sort}" value="lastName" />
        Last name (a-z)
      </label>
    </nav>
    <nav>
      <h4>Filter by:</h4>
      <label>
        Minimum age:
        <select bind:value="{selected}">
          {#each ages as minAge}
            <option value="{minAge}">{minAge}</option>
          {/each}
        </select>
      </label>
    </nav>
    <div>
      <h4>Showing:</h4>
      <span>{manipulatedUsers.length} of {users.length}</span>
    </div>
  </div>
</header>

{#if manipulatedUsers.length}
  <Grid>
    {#each manipulatedUsers as { id, ...user } (id)}
      <li>
        <User {...user} />
      </li>
    {/each}
  </Grid>
{:else}
  <h2>Nothing to see here...</h2>
{/if}

<style>
  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 0.5em solid goldenrod;
    padding: 1em 0 0.33em;
    margin-bottom: 2em;
  }

  h1 {
    margin: 0;
    line-height: 1;
  }

  div {
    display: flex;
    font-size: small;
  }

  div.tools > * {
    margin-left: 1em;
  }

  li {
    list-style: none;
  }

  h4 {
    display: inline;
    text-transform: uppercase;
    margin: 0 0.33em 0 0;
  }
</style>
