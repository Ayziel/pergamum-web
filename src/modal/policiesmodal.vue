<template>
    <div>
      <!-- Modal Trigger -->
      <button @click="showModal = true" class="btn btn--success">Add</button>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="policies-page">
            <div class="card">
              <h1 class="title">POLICIES</h1>
              <hr />
              <form @submit.prevent>
                <!-- Top Row -->
                <div class="form-row">
                  <div class="form-group">
                    <label>Document Code</label>
                    <input type="text" v-model="form.documentCode" placeholder="####"/>
                  </div>
                  <div class="form-group">
                    <label>Category</label>
                    <select v-model="selectedCategory">
                      <option disabled value="">Select a category</option>
                      <option v-for="(option, i) in categoryOptions" :key="i" :value="option">
                        {{ option }}
                      </option>
                    </select>
                    <div class="category-box">
                      <span class="category-item" v-for="(cat, index) in form.categories" :key="index">
                        {{ cat }}
                        <span class="remove" @click="removeCategory(index)">&times;</span>
                      </span>
                    </div>
                  </div>
                </div>
  
                <div class="form-group">
                  <label>Description</label>
                  <input type="text" v-model="form.description" placeholder="Description"/>
                </div>
  
                <div class="form-group">
                  <label>URL</label>
                  <input type="text" v-model="form.url" placeholder="URL"/>
                </div>
  
                <!-- RMF Row -->
                <div class="form-row">
                  <div class="form-group">
                    <label>RMF Name</label>
                    <select v-model="form.rmfName">
                      <option>Select RMF</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>RMF Control ID</label>
                    <input type="text" v-model="form.rmfControlId" placeholder="RMF Control ID"/>
                  </div>
                </div>
  
                <!-- Board Approver -->
                <div class="form-row">
                  <div class="form-group">
                    <label>Board Approver</label>
                    <select v-model="form.boardApprover">
                      <option>Board Approver</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.boardApproverName" placeholder="Name"/>
                  </div>
                </div>
  
                <!-- Process Owner -->
                <div class="form-row">
                  <div class="form-group">
                    <label>Process Owner</label>
                    <select v-model="form.processOwner" placeholder="Process Owner">
                      <option>Process Owner</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.processOwnerName" placeholder="Name"/>
                  </div>
                </div>
  
                <!-- Document Approver -->
                <div class="form-row">
                  <div class="form-group">
                    <label>Document Approver</label>
                    <select v-model="form.documentApprover" placeholder="Document Approver">
                      <option>Approver Name</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.documentApproverName" placeholder="Name"/>
                  </div>
                </div>
  
                <button class="save-btn">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const form = ref({
    documentCode: '',
    description: '',
    url: '',
    rmfName: '',
    rmfControlId: '',
    boardApprover: '',
    boardApproverName: '',
    processOwner: '',
    processOwnerName: '',
    documentApprover: '',
    documentApproverName: '',
    categories: [],
  })
  
  const categoryOptions = ['Policy', 'Procedure', 'All']
  const selectedCategory = ref('')
  
  const showModal = ref(false)
  
  watch(selectedCategory, (newValue) => {
    if (newValue && !form.value.categories.includes(newValue)) {
      form.value.categories.push(newValue)
      selectedCategory.value = ''
    }
  })
  
  const removeCategory = (index) => {
    form.value.categories.splice(index, 1)
  }
  
  const closeModal = () => {
    showModal.value = false
  }
  </script>
  
  <style scoped>
  template {
    background-color: none;
  }
  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 50px auto;
    width: 100%;
    max-width: 1500px;
  }
  
  hr {
    margin: 40px 0;
  }
  
  .policies-page {
    max-width: 1300px;
    margin: auto;
    padding: 40px 20px;
  }
  
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-row {
    display: flex;
    gap: 20px;
  }
  
  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .category-box {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 5px;
  }
  
  .category-item {
    background-color: #eee;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 14px;
  }
  
  .category-item .remove {
    margin-left: 8px;
    cursor: pointer;
    color: #d32f2f;
  }
  
  .save-btn {
    margin-top: 20px;
    align-self: flex-end;
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .save-btn:hover {
    background-color: #0056b3;
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    padding: 30px;
    border-radius: 10px;
    max-width: 1200px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .open-modal-btn {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px;
  }
  
  .open-modal-btn:hover {
    background-color: #0056b3;
  }
  </style>
  