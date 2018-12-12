<template>
	<div class='container'>
		<h1>testing match list</h1>
		<p>just some matches from https://www.rivalry.gg/app/matches, enjoy</p>

		<div class='matches'>
			<div v-for='match in matches' :key='match.id' class='match'>
				<small>
					<strong>
						{{ match.game }}
						<template v-if='match.default_market.data'>&nbsp;{{ match.default_market.data.name }}</template>
					</strong>
				</small>
				<br>Competitors:
				<span
					v-for='competitor in match.competitors.data'
					:key='competitor.name'
				>{{ competitor.name }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MatchesProofOfConcept',

	asyncData({ app }) {
		return app.$axios
			.$get('https://www.rivalry.gg/app/matches')
			.then(response => ({ matches: response.data }))
			.catch(err => {
				console.log(err);
				return { matches: [] };
			});
	}
};
</script>

<style>
.container {
	padding-top: 50px;
	max-width: 800px;
	margin: 0 auto;
}

.matches {
	margin-top: 30px;
}

.match {
	background: white;
	padding: 10px;
	box-shadow: 0 2px 4px hsla(0, 0%, 87.1%, 0.8);
	margin-bottom: 20px;
}
</style>
