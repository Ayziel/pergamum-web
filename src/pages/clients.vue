<template>
    <div class="client-form">
      <h2>Client Information</h2>
  
      <!-- Company Info -->
      <div class="form-row">
        <input v-model="form.companyName" placeholder="Company Name" />
        <input v-model="form.email" placeholder="Email" type="email" />
        <input v-model="form.contactNumber" placeholder="Contact No." />
        <input v-model="form.domain" placeholder="Domain Address" />
      </div>
  
      <div class="form-row">
        <div>
        <label>Address</label>
        <input v-model="form.address" placeholder="Address" />
        </div>
        <input v-model="form.city" placeholder="City" />
        <input v-model="form.zip" placeholder="Zip Code" />
        <input v-model="form.country" placeholder="Country" />
      </div>
  
      <!-- Main Contact -->
      <div class="form-row">
        <input v-model="form.mainContact.name" placeholder="Full Name" />
        <select v-model="form.mainContact.suffix">
          <option value="">Suffix</option>
          <option>Jr.</option>
          <option>Sr.</option>
          <option>III</option>
        </select>
        <input v-model="form.mainContact.contact" placeholder="Contact No." />
        <input v-model="form.mainContact.email" placeholder="Email" type="email" />
      </div>
  
      <div class="form-row">
        <input v-model="form.mainContact.address" placeholder="Address" />
      </div>
  
      <!-- DPO -->
      <div class="form-row">
        <input v-model="form.dpo.name" placeholder="DPO Name" />
        <select v-model="form.dpo.suffix">
          <option value="">Suffix</option>
          <option>Jr.</option>
          <option>Sr.</option>
          <option>III</option>
        </select>
        <input v-model="form.dpo.contact" placeholder="Contact No." />
        <input v-model="form.dpo.email" placeholder="Email" type="email" />
      </div>
  
      <div class="form-row">
        <input v-model="form.dpo.address" placeholder="Address" />
      </div>
  
      <!-- Internal URL -->
      <div class="form-row">
        <input v-model="form.internalUrl" placeholder="Internal URL" type="url" />
      </div>
  
      <!-- Buttons -->
      <div class="form-buttons">
        <button class="save">Save</button>
        <button class="remove">Remove</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // ADD: Vuelidate for validation
  import { reactive } from 'vue'
  
  const form = reactive({
    companyName: '',
    email: '',
    contactNumber: '',
    domain: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    mainContact: {
      name: '',
      suffix: '',
      contact: '',
      email: '',
      address: '',
    },
    dpo: {
      name: '',
      suffix: '',
      contact: '',
      email: '',
      address: '',
    },
    internalUrl: '',
  })
  </script>
  
  <style lang="scss" scoped>
  .client-form {
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
  
    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  
    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-bottom: 1rem;
  
      input,
      select {
        padding: 0.6rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 0.9rem;
      }
    }
  
    .form-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
  
      .save {
        background-color: #00c851;
        color: white;
        padding: 0.6rem 1.5rem;
        border-radius: 8px;
        border: none;
      }
  
      .remove {
        background-color: #ff4444;
        color: white;
        padding: 0.6rem 1.5rem;
        border-radius: 8px;
        border: none;
      }
    }
  }
  </style>
  