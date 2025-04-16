<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import RMF from '../modal/rmfmodal.vue'
const showModal = ref(false)

interface ControlID {
  name: string
  controlID: string // Unique identifier for the approver
  email: string // Added the email field again
  selected: boolean // Added selection state for checkbox
}

const selectAll = ref(false)

const controlID = reactive<ControlID[]>([
  { name: 'David Ward', controlID: 'IT-001', email: 'david.ward@example.com', selected: false },
  { name: 'Olivia King', controlID: 'Admin-001', email: 'olivia.king@example.com', selected: false },
  { name: 'James Brown', controlID: 'Staff-001', email: 'james.brown@example.com', selected: false },
  { name: 'Sophia Lee', controlID: 'IT-002', email: 'sophia.lee@example.com', selected: false },
  { name: 'Michael Scott', controlID: 'Admin-002', email: 'michael.scott@example.com', selected: false },
  { name: 'Emma Watson', controlID: 'Staff-002', email: 'emma.watson@example.com', selected: false },
  { name: 'Liam Anderson', controlID: 'IT-003', email: 'liam.anderson@example.com', selected: false },
  { name: 'Charlotte Davis', controlID: 'Staff-003', email: 'charlotte.davis@example.com', selected: false },
  { name: 'Benjamin Harris', controlID: 'Admin-003', email: 'benjamin.harris@example.com', selected: false },
  { name: 'Ava Moore', controlID: 'IT-004', email: 'ava.moore@example.com', selected: false },
])

// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(5)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return controlID.slice(start, start + pageSize.value)
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
    <h1>Control ID</h1>
    <hr />
    <div class="header">
      <input type="text" placeholder="Search User" class="search-input" />
    </div>
    <div class="table-container">
      <h4 class="table-title">Control ID</h4> <!-- Heading is now the title of the table -->
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" @change="toggleAll" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Control ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(controlID, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="controlID.selected" />
            </td>
            <td>{{ controlID.name }}</td>
            <td>{{ controlID.email }}</td>
            <td>{{ controlID.controlID }}</td>
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
