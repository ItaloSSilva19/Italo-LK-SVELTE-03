<script>
  export let type = "button";
  export let href = null;
  export let mode = null;
  export let color = null;
  export let disabled = false;
</script>

<style>
  button {
    font: inherit;
    border: 1px solid #0D354E;
    background: #026AA7;
    padding: 0.5rem 1rem;
    color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active,
  a:hover,
  a:active {
    background: #0D354E;
    border-color: #2AADFF;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #2AADFF;
    box-shadow: none;
    cursor: not-allowed;
  }

  .outline {
    background: transparent;
    color: #2AADFF;
    box-shadow: none;
  }

  .outline:hover,
  .outline:active {
    background: #0D354E;
    box-shadow: none;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }
</style>


<button class="{mode} {color}" {type} on:click {disabled}>
  <slot />
</button>
