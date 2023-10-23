<script>

  import { defineComponent } from "vue";

  export default defineComponent ({
    name: "ExperimentItem",
  props: ['status'],
  setup(props) {
  console.log(props)
  }
  })
  
</script>


<template>
<tr>
  <td>{{status.topic_name}}</td>
  <td>{{status.healthy}}</td>
  <td>{{status.available}}</td>
 </tr>
</template>
