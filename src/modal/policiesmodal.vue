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
                    <input type="text" v-model="form.documentCode" />
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
                  <input type="text" v-model="form.description" />
                </div>
  
                <div class="form-group">
                  <label>URL</label>
                  <input type="text" v-model="form.url" />
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
                    <input type="text" v-model="form.rmfControlId" />
                  </div>
                </div>
  
                <!-- Board Approver -->
                <div class="form-row">
                  <div class="form-group check">
                    <label>Board Approver</label>
                    <input type="checkbox" v-model="form.boardApprover" />
                  </div>
                  <div class="form-group Names">
                    <label>Name</label>
                    <select v-model="form.boardApproverName" :disabled="!form.boardApprover">
                      <option value="">Select Name</option>
                      <option value="Name 1">Name 1</option>
                      <option value="Name 2">Name 2</option>
                      <option value="Name 3">Name 3</option>
                      <!-- Add more options as needed -->
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group check">
                    <label>Document Approver</label>
                    <input type="checkbox" v-model="form.documentApprover" />
                  </div>
                  <div class="form-group Names">
                    <label>Name</label>
                    <select v-model="form.documentApproverName" :disabled="!form.documentApprover">
                      <option value="">Select Name</option>
                      <option value="Name 1">Name 1</option>
                      <option value="Name 2">Name 2</option>
                      <option value="Name 3">Name 3</option>
                      <!-- Add more options as needed -->
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group check">
                    <label>Process Owners</label>
                    <input type="checkbox" v-model="form.processOwner" />
                  </div>
                  <div class="form-group Names">
                    <label>Name</label>
                    <select v-model="form.processOwnerName" :disabled="!form.processOwner">
                      <option value="">Select Name</option>
                      <option value="Name 1">Name 1</option>
                      <option value="Name 2">Name 2</option>
                      <option value="Name 3">Name 3</option>
                      <!-- Add more options as needed -->
                    </select>
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

/* styles.css */





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

  input[type="checkbox"] {
  width: 25px;
  height: 25px;
  accent-color: #006eff; /* Green color */
  cursor: pointer;
  margin-right: 8px;
  margin-top: 10px;
}

input[type="checkbox"]:checked {
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
}

.check {
  display: flex;
  width: 150px;
}

.Names {
  flex: 5;
  width: 80%;
}

  </style>
  