<script>
  export let data;
  const { title } = data;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{title}
