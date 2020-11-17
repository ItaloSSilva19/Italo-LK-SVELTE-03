<script>
  import { createEventDispatcher } from "svelte";
  import ProductItem from "./ProductItem.svelte";
  import Button from "../UI/Button.svelte";

  export let products;

  const dispatch = createEventDispatcher();

  $: Products = products;

</script>

<style>
  .product-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }
	table.crudTable {
		border: 2px solid #026AA7;
		background-color: #EEEEEE;
		width: 100%;
		text-align: center;
		border-collapse: collapse;
	}
	table.crudTable, table.crudTable th {
		border: 1px solid #AAAAAA;
		padding: 3px 2px;
	}
	table.crudTable tbody {
		font-size: 13px;
	}
	table.crudTable tr:nth-child(even) {
		background: #D0E4F5;
	}
	table.crudTable thead {
		background: #026AA7;
		background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #026AA7 100%);
		background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #026AA7 100%);
		background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #026AA7 100%);
		border-bottom: 2px solid #444444;
	}
	table.crudTable thead th {
		font-size: 15px;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		border-left: 2px solid #D0E4F5;
	}
	table.crudTable thead th:first-child {
		border-left: none;
	}

</style>

<section class="product-controls">
  <Button on:click={() => dispatch('add')}>New Product</Button>
</section>
<table class="crudTable">
	<thead>
		<th>Title</th><th>Subtitle</th><th>Description</th><th>Change Content</th>
	</thead>
	<tbody>
  {#each Products as product}
		<tr>
    <ProductItem
      id={product.id}
      title={product.title}
      subtitle={product.subtitle}
      description={product.description}
      on:edit />
		</tr>
  {/each}
	</tbody>
</table>
