<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import RMF from '../modal/rmfmodal.vue'
import ProcessOwners from '../modal/processOwnersModal.vue'
const showModal = ref(false)

interface ProcessOwners {
  name: string
  role: string
  email: string
  selected?: boolean // ADD: selection state for checkbox
}

const selectAll = ref(false)

const processOwners = reactive<ProcessOwners[]>([
  { name: 'David Ward', role: 'IT', email: 'david.ward@example.com', selected: false }, // ADD: Random date
  { name: 'Olivia King', role: 'Admin', email: 'olivia.king@example.com', selected: false }, // ADD: Random date
  { name: 'James Brown', role: 'Staff', email: 'james.brown@example.com', selected: false }, // ADD: Random date
  { name: 'Sophia Lee', role: 'Manager', email: 'sophia.lee@example.com', selected: false }, // ADD: Random date
  { name: 'Michael Scott', role: 'HR', email: 'michael.scott@example.com', selected: false }, // ADD: Random date
  { name: 'Emma Watson', role: 'Admin', email: 'emma.watson@example.com', selected: false }, // ADD: Random date
  { name: 'Liam Anderson', role: 'Staff', email: 'liam.anderson@example.com', selected: false }, // ADD: Random date
  { name: 'Charlotte Davis', role: 'Manager', email: 'charlotte.davis@example.com', selected: false }, // ADD: Random date
  { name: 'Benjamin Harris', role: 'HR', email: 'benjamin.harris@example.com', selected: false }, // ADD: Random date
  { name: 'Ava Moore', role: 'IT', email: 'ava.moore@example.com', selected: false }, // ADD: Random date
  { name: 'Lucas Green', role: 'Admin', email: 'lucas.green@example.com', selected: false }, // ADD: Random date
  { name: 'Isabella Clark', role: 'Manager', email: 'isabella.clark@example.com', selected: false }, // ADD: Random date
  { name: 'Ethan White', role: 'HR', email: 'ethan.white@example.com', selected: false }, // ADD: Random date
  { name: 'Mia Harris', role: 'Staff', email: 'mia.harris@example.com', selected: false }, // ADD: Random date
])

// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(4)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return processOwners.slice(start, start + pageSize.value)
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
  <ProcessOwners :isVisible="showModal" @update:isVisible="showModal = $event" />
  <div class="card">
    <h1>PROCESS OWNER CATEGORY</h1>
    <hr />
    <div class="header">
      <input type="text" placeholder="Search User" class="search-input" />
      <button class="btn btn--success" @click="showModal = true">Add</button>
    </div>
    <div class="table-container">
      <h4 class="table-title">PROCESS OWNER LIST</h4> <!-- Heading is now the title of the table -->
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" @change="toggleAll" />
            </th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(processOwners, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="processOwners.selected" />
            </td>
            <td>{{ processOwners.name }}</td>
            <td>{{ processOwners.role }}</td>
            <td>{{ processOwners.email }}</td>
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
