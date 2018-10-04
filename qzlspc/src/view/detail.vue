<template>
	<div class="detail">
		detail:{{id}}
	</div>
</template>

<script>
	export default{
		name:'detail',
		computed: {
			id(){
				return this.$route.params.id;
			}
		}
	}
</script>

<style scoped>
	
</style>