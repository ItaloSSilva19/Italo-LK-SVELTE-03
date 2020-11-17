<script>
  import products from "./products-store.js";
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import {isEmpty} from "../helpers/validation.js";

  export let id = null;

  let title = "";
  let subtitle = "";
  let description = "";

  if (id) {
    const unsubscribe = products.subscribe(items => {
      const selectedProduct = items.find(i => i.id === id);
      title = selectedProduct.title;
      subtitle = selectedProduct.subtitle;
      description = selectedProduct.description;
    });

    unsubscribe();
  }

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: descriptionValid = !isEmpty(description);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    descriptionValid;

  function submitForm() {
    const productData = {
      title: title,
      subtitle: subtitle,
      description: description,
			};

    if (id) {
      products.updateProduct(id, productData);
    } else {
      products.addProduct(productData);
    }
    dispatch("save");
  }

  function deleteProduct() {
    products.removeProduct(id);
    dispatch("save");
  }

  function cancel() {
    dispatch("cancel");
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Product Data" on:cancel>
  <form on:submit={submitForm}>
    <TextInput
      id="title"
      label="Title"
      valid={titleValid}
      validityMessage="Please enter a valid title."
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      valid={subtitleValid}
      validityMessage="Please enter a valid subtitle."
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      valid={descriptionValid}
      validityMessage="Please enter a valid description."
      bind:value={description} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
    {#if id}
      <Button type="button" on:click={deleteProduct}>Delete</Button>
    {/if}
  </div>
</Modal>
