<script context="module">
  export async function load() {
    return {
      props: {
        hello: 'world'
      },
    };
  }
</script>

<script>
  export let hello;

  const onClick = () => alert(`hello ${hello}`)
</script>

<svelte:head>
  <title>Svelte Architect Reproduce</title>
</svelte:head>

<div class="m-5 block">
  <button class="btn" on:click={onClick}>Click Me</button>
</div>
