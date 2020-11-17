<script>
  import products from "./Products/products-store.js";
  import Header from "./UI/Header.svelte";
  import ProductGrid from "./Products/ProductGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import ProductEdit from "./Products/ProductEdit.svelte";

  // let products = ;

  let editMode;
  let editedId;
  let pageData = {};

  function savedProduct(event) {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function startEdit(event) {
    editMode = "edit";
    editedId = event.detail;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  {#if editMode === 'edit'}
    <ProductEdit id={editedId} on:save={savedProduct} on:cancel={cancelEdit} />
  {/if}
  <ProductGrid
    products={$products}
    on:edit={startEdit}
    on:add={() => {editMode = 'edit'}} />
</main>
