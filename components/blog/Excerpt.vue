<template>
	<div class='excerpt'>
		<h3>{{ content.title }}</h3>
		<p>{{ content.excerpt }}</p>
	</div>
</template>

<script>
export default {
	name: 'BlogExcerpt',
	props: {
		content: {
			type: Object,
			required: true
		}
	}
};
</script>

<style>
.excerpt {
	opacity: 0.8;
	margin: 20px;
}
</style>
