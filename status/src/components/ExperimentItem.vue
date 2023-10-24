<script>

  import { defineComponent, computed } from "vue";

  export default defineComponent ({
    name: "ExperimentItem",
  props: ['status'],
  setup(props) {
      return {

  invalid: computed(() => { return props.status === undefined}),
		  
  streamsOk: computed(() => {

  let ok=[]
  
  for (const [key, value] of Object.entries(props.status.stream_ok)) {
  if (value) {
    ok.push(key)
  }
}

  return ok.join(", ")

  }),
  
  streamsMissing: computed(() => {

  let ok=[]
  
  for (const [key, value] of Object.entries(props.status.stream_ok)) {
  if (value) {
    ok.push(key)
  }
  }

    let required=[]
  
  for (const [key, value] of Object.entries(props.status.stream_required)) {
  if (value) {
    required.push(key)
  }

  }

  let missing=[]
  
  for (var i = 0; i < required.length; i++) {
					  if (!ok.includes(required[i])){
					  missing.push(required[i]);
					  }
}


  return missing.join(", ")

  }),
		  name: computed(() => { }),
		  available: computed(() => { }),
		  healthy: computed(() => { }),
		  jumpOk: computed(() => { }),
		  eventCount: computed(() => { }),
  
      }
    }
  })
  
</script>


<template>

  <tr v-if="invalid">
	<td width="8%" class="red">null</td>
	<td width="3%"> 
     <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	 </svg>
	</td>
	<td width="3%"> 
     <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	 </svg>
	</td>
	<td width="3%"> 
     <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	 </svg>
	</td>	
	<td width="3%">0</td>
	<td class="green"></td>
	<td class="red">invalid record</td>
  </tr>
  
  <tr v-else>
	<td width="8%" :class="(status.available)?'green':'red'">{{status.topic_name}}</td>
	<td width="3%">

<svg  v-if="status.available" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
	  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg>
	</td>

	<td width="3%">
<svg v-if="status.healthy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
	  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	  </svg>
	</td>
	
	<td width="3%">
<svg v-if="status.jump_ok" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
	  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	  </svg>
	</td>
	

	<td width="3%">{{status.health_events}}</td>
	<td class="green">{{streamsOk}}</td>
	<td class="red">{{streamsMissing}}</td>
	<td></td>	 
  </tr>
 
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
