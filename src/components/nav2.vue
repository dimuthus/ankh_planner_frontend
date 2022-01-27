<template>
<nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-green shadow sm:items-baseline w-full">

  <div class="mb-2 sm:mb-0 flex flex-row">
    <div class="h-10 w-40 self-center mr-2">
      <img class="h-10 w-40 self-center" src="/images/Ankhlabs Logo.png" />
    </div>
    
  </div>

  <div class="sm:mb-0 self-center">
    <router-link to="/" class="inline-block px-10 py-2 transition-colors hover:bg-green-300 rounded  duration-300">HOME </router-link>
    <router-link to="/" class="inline-block px-10 py-2 transition-colors hover:bg-green-300 rounded duration-300">COMPANY PLANNER</router-link>

  </div>
</nav>
  <router-view />
</template>
<script>
export default{

    name:'navbar2'
}
</script>