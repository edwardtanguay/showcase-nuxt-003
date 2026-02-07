<script setup lang="ts">
import { ref } from "vue";
import type { TestProduct } from "~~/shared/types";

const num = ref<number | null>(null);
const testProduct = ref<TestProduct | string>("");
const isSubmitting = ref(false);

const submitForm = async () => {
  if (num.value === null) return;

  testProduct.value = "Loading...";

  isSubmitting.value = true;
  try {
    const res = await $fetch("/api/form01", {
      method: "POST",
      body: { num: num.value },
    });
    testProduct.value = res as TestProduct;
  }
  catch (err: unknown) {
    const errorMessage = (err as { statusMessage?: string }).statusMessage || (err as Error).message || "Something unexpected happened.";
    testProduct.value = "Error: " + errorMessage;
  }
  finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <p class="prefix">Type an id for a product between 1 and 5 (4 and 5 do not exist):</p>
    <form @submit.prevent="submitForm">
      <input id="num"
             v-model.number="num"
             type="number"
             min="1"
             max="5"
             required
             :disabled="isSubmitting">
      <button type="submit"
              :disabled="isSubmitting">
        Invia
      </button>
    </form>

    <div v-if="testProduct">
      <p v-if="typeof testProduct === 'string'">
        {{ testProduct }}
      </p>
      <p v-else>
        ID: {{ testProduct.id }}, Name: {{ testProduct.name }}
      </p>
    </div>
  </div>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 10rem;
}

.prefix {
  margin-bottom: 1rem;
}

input {
  text-align: center;
  width: 5rem;
}
</style>
