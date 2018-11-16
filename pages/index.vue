<template>
  <div class='container'>
    <div class='icon'/>
    <h1>unr.im</h1>
    <p>
      Paul is working on making this into.... something.
      <small>Really.... I'm here tinkering with my editor at a conf.</small>
    </p>
    <excerpt v-for='excerpt in excerpts' :key='excerpt.id' :content='excerpt'/>
  </div>
</template>

<script>
import Excerpt from '@/components/blog/Excerpt';
export default {
	name: 'Homepage',
	components: { Excerpt },
	data() {
		return {
			excerpts: [
				{
					id: 'one',
					title: 'Some Blog Post',
					excerpt: 'Lorem ipsum dolor sit amet blah blah.'
				},
				{
					id: 'two',
					title: 'Another post.',
					excerpt: 'Seriously, all of these are fake.'
				},
				{
					id: 'three',
					title: 'I deployed with now.sh!',
					excerpt: 'Im pretty excited about that part.'
				}
			]
		};
	}
};
</script>

<style>
.container {
	padding-top: 50px;
	max-width: 800px;
	margin: 0 auto;
}

.icon {
	display: inline-block;
	width: 150px;
	height: 150px;
	background: url(/unrmoji.png) no-repeat;
	background-size: cover;
	border-radius: 30px;
	margin-bottom: 30px;
}
</style>
