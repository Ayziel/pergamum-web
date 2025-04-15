<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import UserModal from '../modal/usermodal.vue'
const showModal = ref(false)
interface User {
  name: string
  role: string
  department: string
  selected: boolean
}

const selectAll = ref(false)

const users = reactive<User[]>([
  { name: 'John Doe', role: 'Admin', department: 'IT', selected: false },
  { name: 'Jane Smith', role: 'User', department: 'HR', selected: false },
  { name: 'Alice Ray', role: 'Manager', department: 'Finance', selected: false },
  { name: 'Bob Alton', role: 'Staff', department: 'Sales', selected: false },
  { name: 'Eve Bright', role: 'Supervisor', department: 'IT', selected: false },
  { name: 'Mark Hill', role: 'HR', department: 'HR', selected: false },
  { name: 'Sophia Stone', role: 'Admin', department: 'Legal', selected: false },
])

// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(4)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return users.slice(start, start + pageSize.value)
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
    <h1>Administrator</h1>
    <hr />
    <div class="header">
      <input type="text" placeholder="Search User" class="search-input" />
      <button class="btn btn--success" @click="showModal = true">Add</button>
    </div>
    <div class="table-container">
      <h4 class="table-title">Users</h4> <!-- Heading is now the title of the table -->
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" @change="toggleAll" />
            </th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="user.selected" />
            </td>
            <td>{{ user.name }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.department }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button class="btn btn--primary"  :disabled="currentPage === 1">Previous</button>
      <button class="btn btn--primary"  :disabled="currentPage * pageSize >= users.length">Next</button>
    </div>
    <div class="action-buttons">
      <button class="btn btn--secondary">Delete</button>
      <button class="btn btn--success">Edit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/pages/user'; 
@use '@/styles/base/page';
@use '@/styles/base/buttons';
</style>
