<script lang="ts" setup>
import { reactive } from 'vue'

const form: Record<string, string> = reactive({
  search: '',
  docCode: '',
  category: '',
  boardApprover: '',
  boardApproverName: '',
  processOwner: '',
  processOwnerName: '',
  documentApprover: '',
  documentApproverName: '',
  rmfName: '',
  rmfCode: ''
})


const categories = ['Policy', 'Procedure', 'All'] // example
const names = ['Alice', 'Bob', 'Charlie'] // example

const approvers = [
  { label: 'Board Approver', role: 'boardApprover', options: ['Board A', 'Board B'] },
  { label: 'Process Owner', role: 'processOwner', options: ['Owner A', 'Owner B'] },
  { label: 'Document Approver', role: 'documentApprover', options: ['Doc A', 'Doc B'] }
]

function submitForm() {
  console.log('Submitted:', form)
}
</script>


<template>
  <div class="card">
    <h2 class="title">Search Selection</h2>

    <div class="form-group search">
      <label>Search</label>
      <input type="text" placeholder="Type to search for Policies or Procedure" v-model="form.search" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Document Code</label>
        <input type="text" placeholder="#####" v-model="form.docCode" />
      </div>
      <div class="form-group">
        <label>Category</label>
        <select v-model="form.category">
          <option disabled value="">Select Category</option>
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <div v-for="section in approvers" :key="section.role" class="form-row">
      <div class="form-group">
        <label>{{ section.label }}</label>
        <select v-model="form[section.role]">
          <option disabled value="">Select {{ section.label }}</option>
          <option v-for="item in section.options" :key="item">{{ item }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Name</label>
        <select v-model="form[`${section.role}Name`]">
          <option disabled value="">Select Name</option>
          <option v-for="name in names" :key="name">{{ name }}</option>
        </select>
      </div>
    </div>
    <hr />
    <div class="rmf-section">
        <div class="rmf-name">
            <label>RMF Name</label>
            <input type="text" placeholder="RMF Name" v-model="form.rmfName" />
        </div>
        <div class="rmf-code">
            <label>RMF Code</label>
            <input type="text" placeholder="RMF Code" v-model="form.rmfCode" />
        </div>
    </div>
    <button class="save-btn btn btn--primary" @click="submitForm">Search</button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/page';
@use '@/styles/base/buttons';
@use '@/styles/pages/search'; 
@use '@/styles/base/globals';
</style>