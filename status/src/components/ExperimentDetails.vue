<script>

  import { defineComponent, computed } from "vue";
  import { useStatusStore } from '@/stores/status'
  import EventItem from '@/components/EventItem.vue'
  import ExperimentItem from '@/components/ExperimentItem.vue'

  const store = useStatusStore()
  
 
  export default defineComponent ({
  name: "ExperimentDetails",
  components: {
     'EventItem': EventItem,
  },
  props: ['name'],
  setup(props) {
  return {
    events : computed(() => { return store.events[props.name]}),
status : computed(() => {
console.log("name", props.name)
return store.experiments[props.name]}),
 
     }
   }
 })
  
  
</script>


<template>
 
  <div class="container">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>When</th>
                  <th>H</th>
				  <th>J</th>
				  <th>Streams OK</th>
				  <th>Issues</th>
                </tr>
            </thead>
            <tbody>
 				  <EventItem v-for="event in events" :event=event />
            </tbody>
        </table>
  </div>
  <div>
	<h3>Raw</h3>
  <p>{{events}}</p>
</div>
  

</template>

<style>
.green {
  color:green;
}

.red {
  color: darkred;
}
th, td {
  border-bottom: 1px solid #ddd;
}

</style>
