<script setup>
  import { useStatusStore } from '@/stores/status'
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
                    <th>Healthy</th>
                    <th>Available</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="expt in store.status" :key="expt.topic_name">
                    <td>{{expt.topic_name}}</td>
                    <td>{{expt.healthy}}</td>
                    <td>{{expt.available}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>


  

