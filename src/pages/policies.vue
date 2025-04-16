<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import RMF from '../modal/rmfmodal.vue'
import PoliciesModal from '../modal/policiesmodal.vue'
const showModal = ref(false)

// CHANGED: Updated interface to match table columns
interface Policies {
  name: string
  description: string
  url: string
  lastUpdated: string
  selected?: boolean // ADD: selection state for checkbox
}

const selectAll = ref(false)

// CHANGED: Updated policy objects to match new interface
const policies = reactive<Policies[]>([
  { name: 'Data Retention Policy', description: 'Retention of company records', url: '/docs/data-retention', lastUpdated: '2024-12-01', selected: false }, // ADD: Random data
  { name: 'Security Policy', description: 'System access and controls', url: '/docs/security', lastUpdated: '2024-11-15', selected: false }, // ADD: Random data
  { name: 'Privacy Policy', description: 'Handling of personal information', url: '/docs/privacy', lastUpdated: '2024-10-20', selected: false }, // ADD: Random data
  { name: 'IT Usage Policy', description: 'Acceptable use of IT resources', url: '/docs/it-usage', lastUpdated: '2024-09-10', selected: false }, // ADD: Random data
  { name: 'HR Guidelines', description: 'HR-related procedures and rules', url: '/docs/hr-guidelines', lastUpdated: '2024-08-05', selected: false }, // ADD: Random data
  { name: 'Incident Response Plan', description: 'Steps to handle security incidents', url: '/docs/incident-response', lastUpdated: '2024-07-25', selected: false }, // ADD: Random data
  { name: 'Compliance Checklist', description: 'Regulatory compliance tasks', url: '/docs/compliance', lastUpdated: '2024-06-12', selected: false }, // ADD: Random data
  { name: 'Network Access Policy', description: 'Rules for accessing the network', url: '/docs/network-access', lastUpdated: '2024-05-18', selected: false }, // ADD: Random data
  { name: 'Remote Work Policy', description: 'Guidelines for remote employees', url: '/docs/remote-work', lastUpdated: '2024-04-30', selected: false }, // ADD: Random data
  { name: 'Asset Management Policy', description: 'Tracking and managing IT assets', url: '/docs/asset-management', lastUpdated: '2024-04-01', selected: false }, // ADD: Random data
])







// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(5)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return policies.slice(start, start + pageSize.value)
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
  <div class="card">
    <h1>Policies</h1>
    <hr />
    <div class="header">
      <input type="text" placeholder="Search User" class="search-input" />
    <!-- Button to open the modal -->
    <PoliciesModal @click="showModal = true">Add</PoliciesModal>

      
    </div>
    <div class="table-container">
      <h4 class="table-title">Policies List</h4> <!-- Heading is now the title of the table -->
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" @change="toggleAll" />
            </th>
            <th>Policy Name</th>
            <th>Policy Description</th>
            <th>Internal URL</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(policies, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="policies.selected" />
            </td>
            <td>{{ policies.name }}</td>
            <td>{{ policies.description }}</td>
            <td>{{ policies.url }}</td>
            <td>{{ policies.lastUpdated }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button class="btn btn--primary"  :disabled="currentPage === 1">Previous</button>
      <button class="btn btn--primary">Next</button>
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
@use '@/styles/base/globals';
</style>
