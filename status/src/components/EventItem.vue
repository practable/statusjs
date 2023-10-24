<script>

  import { defineComponent, computed } from "vue";

  export default defineComponent ({
    name: "EventItem",
  props: ['event'],
  setup(props) {
      return {
		  invalid: computed(() => { return props === undefined }),
		  when: computed(() => {
			  if (props.event.when === undefined) { return "-"}
              return props.event.when.split(".")[0]
		  }),
		  healthy: computed(() => {
			  if (props.event === undefined) { return false}
			  if (props.event.hasOwnProperty("healthy")){
				  if (props.event.healthy ) {
					  return true
				  }
			  }
			  return false
		  }),
		  jumpOk: computed(() => {
			  if (props.event === undefined) { return false}

			  if (props.event.hasOwnProperty("jump_ok")){
				  if (props.event.jump_ok ) {
					  return true
				  }
			  }
			  return false
		  }),
		  issues: computed(() => {
			  if (props.event === undefined) { return ""}
			  if (props.event.hasOwnProperty("issues")){
				  return props.event.issues.join(", ")
			  }
		  }),
		  streamsOk: computed(() => {
			  if (props.event === undefined) { return ""}
			   let ok = []
			  if (props.event.hasOwnProperty("stream_ok")){
				   for (const [key, value] of Object.entries(props.event.stream_ok)) {
					  if (value) {
						  ok.push(key)
					  }
				   }
			  }
			  return ok.join(", ")
 
		  }),		  
      }
    }
  })
  
</script>


<template>

<tr v-if="invalid">
  <td> - </td>
  <td> invalid event </td>
  </tr>
  <tr v-else>
	<td>{{when}}</td>

	<td width="3%">
<svg v-if="healthy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
	  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	  </svg>
	</td>
	
	<td width="3%">
<svg v-if="jumpOk" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
	  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" width="50%">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
	  </svg>
	</td>
		<td class="green">{{streamsOk}}</td>
	<td class="red">{{issues}}</td>

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
