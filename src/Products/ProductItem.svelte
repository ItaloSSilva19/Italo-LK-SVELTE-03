<script>
  import { createEventDispatcher } from "svelte";
  import products from "./products-store.js";
  import Button from "../UI/Button.svelte";

  export let id;
  export let title;
  export let subtitle;
  export let description;

  const dispatch = createEventDispatcher();
</script>
<style>
	td {
		border: 1px solid #AAAAAA;
		padding: 3px 2px;
		font-size: 13px;
		}
</style>

<td>{title}</td>
<td>{subtitle}</td>
<td>{description}</td>
<td><Button mode="outline" type="button" on:click={() => dispatch('edit', id)}>Edit</Button></td>


