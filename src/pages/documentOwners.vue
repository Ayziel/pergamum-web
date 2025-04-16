<script lang="ts" setup>
import { reactive, ref, computed, watch } from 'vue'
import RMF from '../modal/rmfmodal.vue'
import DocumentOwners from '../modal/documentOwnersModal.vue'
const showModal = ref(false)

interface DocumentOwners {
  name: string
  role: string
  email: string
}

const selectAll = ref(false)

const documentOwners = reactive<DocumentOwners[]>([
  { name: 'David Ward', role: 'IT', email: 'david.ward@example.com' }, // ADD: Random date
  { name: 'Olivia King', role: 'Admin', email: 'olivia.king@example.com' }, // ADD: Random date
  { name: 'James Brown', role: 'Staff', email: 'james.brown@example.com' }, // ADD: Random date
  { name: 'Sophia Lee', role: 'Manager', email: 'sophia.lee@example.com' }, // ADD: Random date
  { name: 'Michael Scott', role: 'HR', email: 'michael.scott@example.com' }, // ADD: Random date
  { name: 'Emma Watson', role: 'Admin', email: 'emma.watson@example.com' }, // ADD: Random date
  { name: 'Liam Anderson', role: 'Staff', email: 'liam.anderson@example.com' }, // ADD: Random date
  { name: 'Charlotte Davis', role: 'Manager', email: 'charlotte.davis@example.com' }, // ADD: Random date
  { name: 'Benjamin Harris', role: 'HR', email: 'benjamin.harris@example.com' }, // ADD: Random date
  { name: 'Ava Moore', role: 'Admin', email: 'ava.moore@example.com' }, // ADD: Random date
  { name: 'Lucas Green', role: 'IT', email: 'lucas.green@example.com' }, // ADD: Random date
  { name: 'Isabella Clark', role: 'Manager', email: 'isabella.clark@example.com' }, // ADD: Random date
  { name: 'Ethan White', role: 'HR', email: 'ethan.white@example.com' }, // ADD: Random date
  { name: 'Mia Harris', role: 'Staff', email: 'mia.harris@example.com' }, // ADD: Random date
])





// Define current page and page size
const currentPage = ref(1)
const pageSize = ref(4)

// Computed paginated data
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return documentOwners.slice(start, start + pageSize.value)
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
  <DocumentOwners :isVisible="showModal" @update:isVisible="showModal = $event" />
  <div class="card">
    <h1>Document Owners</h1>
    <hr />
    <div class="header">
      <input type="text" placeholder="Search User" class="search-input" />
      <button class="btn btn--success" @click="showModal = true">Add</button>
    </div>
    <div class="table-container">
      <h4 class="table-title">DOCUMENT OWNER LIST</h4> <!-- Heading is now the title of the table -->
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
          <tr v-for="(documentOwners, index) in paginatedUsers" :key="index">
            <td>
              <input type="checkbox" v-model="documentOwners.selected" />
            </td>
            <td>{{ documentOwners.name }}</td>
            <td>{{ documentOwners.role }}</td>
            <td>{{ documentOwners.email }}</td>
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
