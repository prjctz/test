<template>
	<!-- Footer -->
	<footer class="mt-32 bg-gray-900 sm:mt-32">
		<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<img class="h-7" src="/vite.svg" alt="Company name" />
				<div class="mt-16 mb-16 xl:col-span-2 xl:mt-0">
					<div>
						<ul role="list" class="mx-auto lg:flex">
							<li v-for="item in footerNavigation.solutions" :key="item.name">
								<a :href="item.href" class="lg:px-8 text-sm leading-9 text-gray-300 hover:text-white">{{ item.name }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { defineComponent, h, ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { FingerPrintIcon, FireIcon, HandThumbUpIcon } from '@heroicons/vue/20/solid';

const footerNavigation = {
	solutions: [
		{ name: 'Ссылка 1', href: '#' },
		{ name: 'Ссылка 2', href: '#' },
		{ name: 'Ссылка 3', href: '#' },
	],
};
</script>
