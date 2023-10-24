import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', () => {
	const status = ref([])
	const date = ref(new Date())
	const experiments = ref({})
	const events = ref({})
	const healthy = ref(0)
	const available = ref(0)
	const total = ref(0)
	function addEventsFor(experiment, newEvents){
		let ev = events.value
		ev[experiment] = newEvents
		events.value = ev
	}
	
	function update(newStatus) {
    // we want to sort
	    newStatus.sort((a, b) => a.topic_name.localeCompare(b.topic_name));
		status.value = newStatus
		date.value = new Date()
		let h = 0
		let a = 0
		let ex = {}
		let ev = {}
		
		for (let i = 0; i < newStatus.length; i++) {
			if (newStatus[i].healthy) {
				h++
			}
			if (newStatus[i].available) {
				a++
			}
			ex[newStatus[i]["topic_name"]]=newStatus[i]
			ev[newStatus[i]["topic_name"]]=[{"issues":["fetching"]}]
		}
		available.value = a
		healthy.value = h
		total.value = newStatus.length
		experiments.value = ex
		events.value = ev
	}


	return { addEventsFor, available, date, experiments, events, healthy, status, total, update }
})
