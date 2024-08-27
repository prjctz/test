<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
useHead({
	link: [
		{
			rel: 'icon',
			type: 'image/svg+xml',
			href: '/vite.svg', // путь к вашей иконке
		},
	],
	title: 'Тестовый блог',
	meta: [
		{
			name: 'description',
			content: 'Тест описание',
		},
		{
			name: 'keywords',
			content: 'Ключевое слово',
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
