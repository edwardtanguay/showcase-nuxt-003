<script setup lang="ts">
// 1. Fix: Use '~~' to point to the root 'shared' directory
import type { TestProduct } from "~~/shared/types";

const num = ref<number | null>(null);
const testProduct = ref<TestProduct | null>(null);
const errorMsg = ref<string | null>(null);
const isSubmitting = ref(false);

const submitForm = async () => {
  if (num.value === null) return;

  testProduct.value = null;
  errorMsg.value = null;
  isSubmitting.value = true;

  try {
    const res = await $fetch<TestProduct>("/api/form01", {
      method: "POST",
      body: { num: num.value },
    });
    testProduct.value = res;
  }
  catch (err: any) {
    errorMsg.value = err.statusMessage || err.message || "Something unexpected happened.";
  }
  finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="max-w-4xl mx-auto py-12 px-4">
    <UCard class="max-w-md mx-auto shadow-sm">
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-magnifying-glass-circle"
                 class="w-6 h-6 text-primary" />
          <h2 class="text-xl font-bold">Product Finder</h2>
        </div>
        <p class="text-sm text-gray-500 mt-1 dark:text-gray-400">
          Search for products by ID (Try 1, 2, or 3)
        </p>
      </template>

      <form @submit.prevent="submitForm"
            class="space-y-4">
        <UFormGroup label="Product ID"
                    name="id"
                    help="Enter a number between 1 and 5 (IDs 4 and 5 don't exist)"
                    required>
          <UInput v-model="num"
                  type="number"
                  icon="i-heroicons-hashtag"
                  placeholder="e.g. 1"
                  size="lg"
                  :disabled="isSubmitting"
                  min="1"
                  max="5" />
        </UFormGroup>

        <UButton type="submit"
                 block
                 size="lg"
                 icon="i-heroicons-paper-airplane"
                 :loading="isSubmitting"
                 color="primary"
                 variant="solid">
          {{ isSubmitting ? 'Searching...' : 'Find Product' }}
        </UButton>
      </form>

      <template #footer
                v-if="testProduct || errorMsg">
        <!-- Error State -->
        <UAlert v-if="errorMsg"
                icon="i-heroicons-exclamation-triangle"
                color="red"
                variant="soft"
                title="Search Failed"
                :description="errorMsg" />

        <!-- Success State -->
        <div v-if="testProduct"
             class="transition-all duration-300">
          <div
               class="flex flex-col gap-2 p-4 rounded-lg bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-800">
            <div class="flex justify-between items-center">
              <span class="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Result
                Found</span>
              <UBadge color="primary"
                      variant="subtle"
                      size="sm">ID: {{ testProduct.id }}</UBadge>
            </div>
            <p class="text-lg font-semibold">{{ testProduct.name }}</p>
          </div>
        </div>
      </template>
    </UCard>
  </section>
</template>
