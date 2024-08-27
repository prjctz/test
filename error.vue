<template>
	<div>
		<NuxtLayout>
			<Error />
		</NuxtLayout>
	</div>
</template>

<script setup>
import Error from './components/Error.vue';

useHead({
	link: [
		{
			rel: 'icon',
			type: 'image/svg+xml',
			href: '/flame-icon.svg', // путь к вашей иконке
		},
	],
	title: 'Тест',
	meta: [
		{
			name: 'description',
			content: 'Тест описание',
		},
		{
			name: 'keywords',
			content: 'Тест ключивики',
		},
		{
			name: 'author',
			content: 'Тест',
		},
		{
			property: 'og:title',
			content: 'Тест',
		},
		{
			property: 'og:description',
			content: 'Тест',
		},
		// другие метатеги, если нужно
	],
});
</script>
