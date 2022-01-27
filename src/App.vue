<template>
<Nav2/>
<Header/>
<Nav/>
<Todo/>
<Nav3/>
<Cardone/>
<Card/>

</template>
<script>
import  Header  from './components/Header.vue';
import  Nav     from './components/nav.vue';
import  Nav2    from './components/nav2.vue';
import  Nav3    from './components/nav3.vue';
import  Todo    from './components/Todos.vue'
import  Cardone    from './components/cardone.vue'

export default ({
  name:'App',
  components:{
    Header,
    Nav,
    Nav2,
    Nav3,
    Todo,
    Cardone
    
  },
 
})
</script>
