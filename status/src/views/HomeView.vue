<script setup>
  import { useStatusStore } from '@/stores/status'
  import ExperimentItem from '@/components/ExperimentItem.vue'
  import router from "@/router";
  
  const store = useStatusStore()
  
  async function load() {
    let url = import.meta.env.VITE_APP_STATUS_SERVER+'/api/v1/experiments';
    let obj = null;
    
    try {
  obj = await (await fetch(url)).json();
 
    } catch(e) {
        console.log('error');
    }
    
  console.log(obj);
 store.update(obj);
}

  load();

  function seeDetails(item) {
    console.log("click", item.topic_name)
  
      router.push({ name: 'details', params: { id: item.topic_name } })
      
  }
</script>

<template>
  <main>
    <h2>Status at {{store.date}}</h2>
	<p>Healthy: {{store.healthy}}/{{store.total}} </p> 
	<p>Available: {{store.available}}/{{store.total}} </p>
  </main>


      <div class="container">

        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>A</th>
				  <th>H</th>
				  <th>J</th>
				  <th>#</th>
				  <th>Streams OK</th>
				  <th>Streams Missing</th>
				  <th></th>
                </tr>
            </thead>
            <tbody>
 				<ExperimentItem	v-for="item in store.status"
								:status=item
								v-on:click="seeDetails(item)"
								/>
            </tbody>
        </table>
    </div>    
</template>


  

