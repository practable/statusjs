import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', () => {
	const status = ref([])
	const date = ref(new Date())
	const healthy = ref(0)
	const available = ref(0)
	const total = ref(0)
	function update(newStatus) {
    // we want to sort
	    newStatus.sort((a, b) => a.topic_name.localeCompare(b.topic_name));
		status.value = newStatus
		date.value = new Date()
		let h = 0
		let a = 0
		for (let i = 0; i < newStatus.length; i++) {
			if (newStatus[i].healthy) {
				h++
			}
			if (newStatus[i].available) {
				a++
			}			
		}
		available.value = a
		healthy.value = h
		total.value = newStatus.length 
		
		
  }

	return { available, date, healthy, status, total, update }
})
