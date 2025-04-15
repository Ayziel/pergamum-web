<template>
    <div class="password-change-card">
      <h2 class="title">Change Password</h2>
      <form class="form-grid" @submit.prevent="handleChangePassword">
        <input
          type="password"
          v-model="currentPassword"
          placeholder="Current Password"
          required
        />
  
        <input
          type="password"
          v-model="newPassword"
          placeholder="New Password"
          required
        />
  
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm New Password"
          required
        />
  
        <button type="submit">Update Password</button>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  // ADD: State and basic validation logic
  import { ref } from 'vue'
  
  const currentPassword = ref('')
  const newPassword = ref('')
  const confirmPassword = ref('')
  
  const handleChangePassword = () => {
    if (newPassword.value !== confirmPassword.value) {
      alert('New passwords do not match.')
      return
    }
  
    // ADD: Trigger API or logic to update password
    alert('Password changed successfully!')
  }
  </script>
  
  <style lang="scss" scoped>
  .password-change-card {
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    max-width: 600px;
    margin: auto;
    margin-top: 10%;
  
    .title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-align: center;
    }
  
    .form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
  
      input {
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
      }
  
      button {
        padding: 0.75rem;
        font-size: 1rem;
        background: #0047ab;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
  
        &:hover {
          background: #003a8c;
        }
      }
    }
  }
  </style>
  