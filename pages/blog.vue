<template>
	<main>
		<div class="relative isolate">
			<div class="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:items-center lg:px-8 lg:pt-40">
				<!-- Hero section -->

				<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
					<div
						class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style="
							clip-path: polygon(
								74.1% 44.1%,
								100% 61.6%,
								97.5% 26.9%,
								85.5% 0.1%,
								80.7% 2%,
								72.5% 32.5%,
								60.2% 62.4%,
								52.4% 68.1%,
								47.5% 58.3%,
								45.2% 34.5%,
								27.5% 76.7%,
								0.1% 64.9%,
								17.9% 100%,
								27.6% 76.8%,
								76.1% 97.7%,
								74.1% 44.1%
							);
						"
					/>
				</div>
				<div>
					<div class="mx-auto max-w-7xl px-6 lg:px-8">
						<div class="mx-auto max-w-7xl text-center">
							<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								<div v-for="(post, index) in posts" :key="index" class="max-w-xs bg-white border border-gray-300 p-4">
									<svg class="h-32 w-full bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
										<path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
									</svg>
									<h4 class="mt-2 text-lg font-bold">{{ index + 1 }}. {{ post.title }}</h4>
									<!--Если админ-->
									<p class="mt-1"><a :href="'/add/' + post.path">Изменить</a></p>
								</div>
							</div>
							<div>
								<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
									<a
										href="#"
										class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										<span class="sr-only">Previous</span>
										<ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
									</a>
									<!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
									<a
										href="#"
										aria-current="page"
										class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>1</a
									>
									<a
										href="#"
										class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
										>2</a
									>
									<a
										href="#"
										class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
										>3</a
									>
									<span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
									<a
										href="#"
										class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
										>8</a
									>
									<a
										href="#"
										class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
										>9</a
									>
									<a
										href="#"
										class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
										>10</a
									>
									<a
										href="#"
										class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										<span class="sr-only">Next</span>
										<ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
					<div
						class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style="
							clip-path: polygon(
								74.1% 44.1%,
								100% 61.6%,
								97.5% 26.9%,
								85.5% 0.1%,
								80.7% 2%,
								72.5% 32.5%,
								60.2% 62.4%,
								52.4% 68.1%,
								47.5% 58.3%,
								45.2% 34.5%,
								27.5% 76.7%,
								0.1% 64.9%,
								17.9% 100%,
								27.6% 76.8%,
								76.1% 97.7%,
								74.1% 44.1%
							);
						"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';

const { data: posts } = await useAsyncData('content', () => queryContent('/blog').only(['title', 'path']).sort({ path: 1 }).find());
//console.log(posts);
</script>
