<script setup>
  
  import { defineComponent, computed, ref } from "vue";
  import { useRoute } from 'vue-router'
  import { useStatusStore } from '@/stores/status'
  import ExperimentItem from '@/components/ExperimentItem.vue'
  import ExperimentDetails from '@/components/ExperimentDetails.vue'
  
  const location = useRoute();
  console.log(location.params)
  console.log(location.path)
   
  const store = useStatusStore()

    async function load() {
    let url = import.meta.env.VITE_APP_STATUS_SERVER+'/api/v1/experiments/events/' + location.params.id;
    let obj = null;
    
    try {
  obj = await (await fetch(url)).json();
 
    } catch(e) {
        console.log('error');
    }
    
  console.log("events:",location.params.id, obj);
  store.addEventsFor(location.params.id, obj);
}

  load();

</script>

<template>
  <main>
    <h1>{{location.params.id}} health events</h1>
  </main>

  <ExperimentDetails :name=location.params.id />
  
</template>
