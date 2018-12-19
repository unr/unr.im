<template>
	<div class='container'>
		<h1>testing live match list</h1>
		<p>just some live matches from https://www.rivalry.gg/app/matches/formatted, enjoy</p>

		<div class='matches'>
			<div v-for='(tournament, name) in tournaments' :key='name'>
				<strong>{{ name }}</strong>
				<div v-for='match in tournament' :key='match.id' class='match'>
					<small>
						<strong>
							{{ match.data.game }}
							<template
								v-if='match.data.default_market.data'
							>&nbsp;{{ match.data.default_market.data.name }}</template>
						</strong>
					</small>
					<br>Competitors:
					<span
						v-for='competitor in match.data.competitors.data'
						:key='competitor.name'
					>{{ competitor.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MatchesProofOfConcept',

	asyncData({ app }) {
		return app.$axios
			.$get('https://www.rivalry.gg/app/matches/formatted')
			.then(response => ({ tournaments: response.data.live }))
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
