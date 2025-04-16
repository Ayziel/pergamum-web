<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import RMF from '../modal/rmfmodal.vue'
import BoardApprovers from '../modal/boardApproversModal.vue'
const showModal = ref(false)

interface BoardApprovers {
  name: string
  role: string
  email: string
  selected: boolean // ADD: selection state for checkbox
}


const selectAll = ref(false)

const boardApprovers = reactive<BoardApprovers[]>([
  { name: 'David Ward', role: 'IT', email: 'david.ward@example.com', selected: false }, // ADD: Random date
  { name: 'Olivia King', role: 'Admin', email: 'olivia.king@example.com', selected: false }, // ADD: Random date
  { name: 'James Brown', role: 'Staff', email: 'james.brown@example.com', selected: false }, // ADD: Random date
  { name: 'Sophia Lee', role: 'IT', email: 'sophia.lee@example.com', selected: false }, // ADD: Random date
  { name: 'Michael Scott', role: 'Admin', email: 'michael.scott@example.com',selected: false  }, // ADD: Random date
  { name: 'Emma Watson', role: 'Staff', email: 'emma.watson@example.com', selected: false }, // ADD: Random date
  { name: 'Liam Anderson', role: 'IT', email: 'liam.anderson@example.com', selected: false }, // ADD: Random date
  { name: 'Charlotte Davis', role: 'Staff', email: 'charlotte.davis@example.com', selected: false }, // ADD: Random date
  { name: 'Benjamin Harris', role: 'Admin', email: 'benjamin.harris@example.com',selected: false  }, // ADD: Random date
  { name: 'Ava Moore', role: 'IT', email: 'ava.moore@example.com',selected: false  }, // ADD: Random date
])






// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(5)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return boardApprovers.slice(start, start + pageSize.value)
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
    <BoardApprovers :isVisible="showModal" @update:isVisible="showModal = $event" />
  <div class="card">
    <h1>Board Approvers</h1>
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
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(boardApprovers, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="boardApprovers.selected" />
            </td>
            <td>{{ boardApprovers.name }}</td>
            <td>{{ boardApprovers.role }}</td>
            <td>{{ boardApprovers.email }}</td>
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
</style>
