<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import RMF from '../modal/rmfmodal.vue'
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
  { name: 'David Ward', description: 'Responsible for overseeing organizational management and operations.', rmfExternalURL: 'https://example.com/finance', lastUpdate: '2025-03-01', selected: false }, // ADD: Random date
  { name: 'Olivia King', description: 'Leads the marketing team and develops strategies for market growth.', rmfExternalURL: 'https://example.com/marketing', lastUpdate: '2024-07-15', selected: false }, // ADD: Random date
  { name: 'James Brown', description: 'Supports sales efforts, manages customer relations, and drives revenue.', rmfExternalURL: 'https://example.com/sales', lastUpdate: '2025-01-10', selected: false }, // ADD: Random date
  { name: 'Sophia Lee', description: 'Handles HR tasks, employee relations, and ensures compliance with labor laws.', rmfExternalURL: 'https://example.com/hr', lastUpdate: '2024-11-20', selected: false }, // ADD: Random date
  { name: 'Michael Scott', description: 'Manages and oversees legal matters, ensuring compliance and risk management.', rmfExternalURL: 'https://example.com/legal', lastUpdate: '2024-10-03', selected: false }, // ADD: Random date
  { name: 'Emma Watson', description: 'Maintains IT infrastructure, supports tech systems, and handles technical issues.', rmfExternalURL: 'https://example.com/it', lastUpdate: '2024-12-01', selected: false }, // ADD: Random date
  { name: 'Liam Anderson', description: 'Oversees the team in ensuring smooth processes and continuous improvement.', rmfExternalURL: 'https://example.com/hr', lastUpdate: '2025-02-28', selected: false }, // ADD: Random date
  { name: 'Charlotte Davis', description: 'Develops marketing campaigns and strategies to engage customers and drive sales.', rmfExternalURL: 'https://example.com/marketing', lastUpdate: '2024-09-10', selected: false }, // ADD: Random date
  { name: 'Benjamin Harris', description: 'Works in sales operations and supports account management to achieve sales targets.', rmfExternalURL: 'https://example.com/sales', lastUpdate: '2024-08-15', selected: false }, // ADD: Random date
  { name: 'Ava Moore', description: 'Leads legal projects and provides legal advice to ensure company policy compliance.', rmfExternalURL: 'https://example.com/legal', lastUpdate: '2025-01-25', selected: false }, // ADD: Random date
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
  <RMF :isVisible="showModal" @update:isVisible="showModal = $event" />
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
