<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>
      <h2 class="modal-title">Add RMF</h2>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Document</label>
          <input type="text" placeholder="Document" required />
        </div>

        <!-- Category Dropdown -->
        <div class="form-group">
          <label>Category</label>
          <select v-model="selectedCategory">
            <option disabled value="">Select a category</option>
            <option v-for="(option, i) in categoryOptions" :key="i" :value="option">
              {{ option }}
            </option>
          </select>
        </div>

        <!-- Categories Box -->
        <div class="form-group">
          <label>Categories</label>
          <div class="category-box">
            <span
              class="category-item"
              v-for="(cat, index) in form.categories"
              :key="index"
            >
              {{ cat }}
              <span class="remove" @click="removeCategory(index)">&times;</span>
            </span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Description</label>
            <input type="text" v-model="form.middleName" placeholder="Description" />
          </div>
          <div class="form-group">
            <label>URL</label>
            <input type="text" v-model="form.lastName" placeholder="URL" required />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Add RMF</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isVisible: Boolean,
})

const emit = defineEmits(['update:isVisible'])

const form = ref({
  categories: [] as string[],
  middleName: '',
  lastName: '',
})

const categoryOptions = [
  'Policy',
  'Procedure',
  'All',
  'Security',
  'Breach',
  'Leak',
]

const selectedCategory = ref('')

// Watch and push to categories when selected
watch(selectedCategory, (newVal) => {
  if (newVal && !form.value.categories.includes(newVal)) {
    form.value.categories.push(newVal)
    selectedCategory.value = '' // reset dropdown
  }
})

const removeCategory = (index: number) => {
  form.value.categories.splice(index, 1)
}

const submitForm = () => {
  console.log('Form Submitted:', form.value)
  emit('update:isVisible', false)
}

const closeModal = () => {
  emit('update:isVisible', false)
}
</script>

<style lang="scss" scoped>
  @use '@/styles/pages/search'; 
  @use '@/styles/pages/rmf';
  @use '@/styles/base/buttons';
</style>
