<template>
	<router-view></router-view>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
@import "@/styles/_variables.scss";

body{
	background: $app-background;
	color : $default-fontColor;
	overflow-x: hidden;
	overflow-y: hidden;
}


</style>
