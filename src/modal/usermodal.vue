<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <h2 class="modal-title">Add User</h2>
        
        <!-- User Form -->
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label>First Name</label>
              <input type="text" v-model="form.firstName" required />
            </div>
          </div>
  
          <div class="form-row">
            <div class="form-group">
              <label>Middle Name</label>
              <input type="text" v-model="form.middleName" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" v-model="form.lastName" required />
            </div>
          </div>
  
          <div class="form-row">
            <div class="form-group">
              <label>Username</label>
              <input type="text" v-model="form.username" required />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="form.password" required />
            </div>
          </div>
  
          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary">Add User</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    isVisible: Boolean,
  })
  
  const emit = defineEmits(['update:isVisible'])
  
  const form = ref({
    email: '',
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
  })
  
  const submitForm = () => {
    console.log('User added:', form.value)
    // You can replace this with actual API calls or validation logic
    emit('update:isVisible', false) // Close modal after submission
  }
  
  const closeModal = () => {
    emit('update:isVisible', false) // Close modal on close button or clicking outside
  }
  </script>
  
  <style scoped>
  .modal-title {
    margin-bottom: 20px;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    width: 500px; /* Adjust width if necessary */
    border-radius: 8px;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
    gap: 15px; /* Space between columns */
    margin-bottom: 15px;
  }
  
  .form-group {
    flex: 1;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  