<template>
  <div class="container mx-auto" >
    <div class="card" id="done" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
  </div>
</div><br/>
     <div class="card" id="dtwo" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
  </div>
</div> 
  </div>
</template>
<script>
export default {
  name: 'cardone',
}
</script>

<style scoped>
.container #done { 
    display: inline-block; 
	width: 50%; 
	min-height: 50px; 
	height: auto; 
      background-color: #83D034;


  } 
  .container #dtwo { 
    display: inline-block; 
	width: 50%; 
	min-height: 50px; 
	height: auto; 
      background-color: #4AA200;


  } 
</style>