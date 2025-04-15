<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import UserModal from '../modal/usermodal.vue'
const showModal = ref(false)

interface RMF {
  name: string
  description: string
  rmfExternalURL: string
  lastUpdate: string
  selected: boolean
}

const selectAll = ref(false)

const rmf = reactive<RMF[]>([
  { name: 'John Doe', description: 'Admin', rmfExternalURL: 'IT', lastUpdate: '2024-11-20', selected: false }, // ADD: Random date
  { name: 'Jane Smith', description: 'User', rmfExternalURL: 'HR', lastUpdate: '2024-10-05', selected: false }, // ADD: Random date
  { name: 'Alice Ray', description: 'Manager', rmfExternalURL: 'Finance', lastUpdate: '2024-12-12', selected: false }, // ADD: Random date
  { name: 'Bob Alton', description: 'Staff', rmfExternalURL: 'Sales', lastUpdate: '2025-01-30', selected: false }, // ADD: Random date
  { name: 'Eve Bright', description: 'Supervisor', rmfExternalURL: 'IT', lastUpdate: '2024-09-17', selected: false }, // ADD: Random date
  { name: 'Mark Hill', description: 'HR', rmfExternalURL: 'HR', lastUpdate: '2024-08-01', selected: false }, // ADD: Random date
  { name: 'Sophia Stone', description: 'Admin', rmfExternalURL: 'Legal', lastUpdate: '2025-02-10', selected: false }, // ADD: Random date
])



// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(4)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return rmf.slice(start, start + pageSize.value)
})

// Toggle the 'selected' status for all visible users
const toggleAll = () => {
  paginatedUsers.value.forEach(user => user.selected = selectAll.value)
}

// Watch paginated users only to adjust 'selectAll' checkbox state
watch(paginatedUsers, () => {
  selectAll.value = paginatedUsers.value.every(user => user.selected)
}, { deep: true })

</script>

<template>
  <UserModal :isVisible="showModal" @update:isVisible="showModal = $event" />
  <div class="card">
    <h1>RISK MANAGEMENT FRAMEWORK NAMES</h1>
    <hr />
    <div class="header">
      <input type="text" placeholder="Search User" class="search-input" />
      <button class="btn btn--success" @click="showModal = true">Add</button>
    </div>
    <div class="table-container">
      <h4 class="table-title">RMF LIST</h4> <!-- Heading is now the title of the table -->
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" @change="toggleAll" />
            </th>
            <th>RMF name</th>
            <th>RMF Description</th>
            <th>RMF External URL</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rmf, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="rmf.selected" />
            </td>
            <td>{{ rmf.name }}</td>
            <td>{{ rmf.description }}</td>
            <td>{{ rmf.rmfExternalURL }}</td>
            <td>{{ rmf.lastUpdate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button class="btn btn--primary"  :disabled="currentPage === 1">Previous</button>
      <button class="btn btn--primary"  :disabled="currentPage * pageSize >= rmf.length">Next</button>
    </div>
    <div class="action-buttons">
      <button class="btn btn--secondary">Delete</button>
      <button class="btn btn--success">Edit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/components/data-table'; 
@use '@/styles/base/page';
@use '@/styles/base/buttons';
</style>
