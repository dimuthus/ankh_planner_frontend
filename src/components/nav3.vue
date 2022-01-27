<template>
  <nav class="bg-green-600 text-white sm:text-right sm:items-baseline w-full">
     <div class="mb-2 sm:mb-0 flex flex-row">
    <div class="h-10 w-40 self-center mr-2">
      <img class="h-10 w-40 self-center" src="/images/Ankhlabs Logo white.png" />
    </div>
    
  </div>

  <div class="sm:mb-0 self-center">
    <router-link to="/" class="inline-block px-16 py-2 transition-colors hover:bg-green-600 rounded  duration-300">HOME </router-link>
    <router-link to="/" class="inline-block px-16 py-2 transition-colors hover:bg-green-600 rounded duration-300">COMPANY PLANNER</router-link>

  </div>
  </nav>

</template>
<script>
export default{

    name:'navbar3'
}
</script>