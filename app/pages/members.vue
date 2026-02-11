<script setup lang="ts">
import type { Member } from '~~/shared/types';

const search = ref('');

// The query parameter is reactive, so useFetch will automatically refetch
// when the search ref changes.
const { data: members, status, error } = await useFetch<Member[]>('/api/members', {
	query: { q: search },
	// Optional: watch specifically if you need more control, but mostly automatic
	watch: [search]
});

const isPending = computed(() => status.value === 'pending');
</script>

<template>
	<div class="flex flex-col gap-6 w-full sm:max-w-3xl sm:mx-auto">
		<UCard class="font-mono bg-indigo-200/50 dark:bg-indigo-900/20 border-indigo-200/50 dark:border-indigo-900/50">
			<template #header>
				<p>Reactive Fetch</p>
			</template>
			<ul class="list-disc ml-5 text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-3 mt-3">
				<li>this form user useFetch to fetch data from the API</li>
				<li>the data is fetched reactively when the search ref changes</li>
				<li>the search ref is watched by useFetch and the data is refetched when it changes</li>
			</ul>
		</UCard>
		<UCard class="">
			<template #header>
				<div class="flex items-center gap-2">
					<UIcon name="i-heroicons-user-group"
						   class="w-6 h-6 text-primary" />
					<h1 class="text-2xl font-bold">Members</h1>
				</div>
				<p class="text-gray-500 dark:text-gray-400 mt-1">
					Type to search members.
				</p>
			</template>

			<div class="flex flex-col gap-4">
				<!-- Form Section -->
				<UFormGroup label="Search Members"
							name="search"
							help="Try typing 'John', 'Jane', or 'Manager'">
					<UInput v-model="search"
							icon="i-heroicons-magnifying-glass"
							placeholder="Search by name or email..."
							class="w-full sm:w-[20rem]"
							:loading="isPending"
							autofocus />
				</UFormGroup>

				<!-- Results Section -->
				<div class="space-y-4">
					<div class="flex justify-between items-center text-sm text-gray-500">
						<span>Results: {{ members?.length || 0 }}</span>
						<span v-if="isPending"
							  class="text-primary animate-pulse">Searching...</span>
					</div>

					<!-- Error State -->
					<UAlert v-if="error"
							icon="i-heroicons-exclamation-triangle"
							color="error"
							variant="soft"
							title="Error fetching data"
							:description="error.message" />

					<!-- Empty State -->
					<div v-else-if="!members?.length && !isPending"
						 class="text-center py-8 text-gray-500 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
						No members found matching "{{ search }}"
					</div>

					<!-- List -->
					<ul v-else
						class="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
						<li v-for="member in members"
							:key="member.id"
							class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
							<div class="flex justify-between items-start flex-col sm:flex-row">
								<div>
									<h3 class="font-medium text-gray-900 dark:text-gray-100">
										{{ member.firstName }} {{ member.lastName }}
									</h3>
									<p class="text-sm text-gray-500 sm:hidden">{{ member.email }}</p>
								</div>
								<UBadge class="hidden sm:inline-flex"
										color="neutral"
										variant="soft">{{ member.email }}
								</UBadge>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</UCard>
	</div>
</template>
