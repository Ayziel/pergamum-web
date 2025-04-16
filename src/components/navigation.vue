<script setup lang="ts">
import { ref } from 'vue'
const isSettingsOpen = ref(false)
const isDepartmentOpen = ref(false)

const navRef = ref<HTMLElement | null>(null)

const toggleSidebar = () => {
  if (navRef.value) {
    navRef.value.classList.toggle('shrunk')
  }
}


  const handleNavItemClick = () => {
  if (navRef.value?.classList.contains('shrunk')) {
    navRef.value.classList.remove('shrunk')
  }

  isSettingsOpen.value = false
  isDepartmentOpen.value = false
}


const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.opacity = '0'
  element.style.overflow = 'hidden'

  const height = element.scrollHeight + 'px'

  requestAnimationFrame(() => {
    element.style.transition = 'all 0.3s ease'
    element.style.height = height
    element.style.opacity = '1'
  })
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = element.scrollHeight + 'px'
  element.style.opacity = '1'
  element.style.overflow = 'hidden'

  requestAnimationFrame(() => {
    element.style.transition = 'all 0.3s ease'
    element.style.height = '0'
    element.style.opacity = '0'
  })
}


</script>

<template>
  <aside class="sidebar">
    <!-- Sidebar Header -->
    <header class="sidebar-header">

    </header>

    <!-- Sidebar Navigation -->
    <nav class="sidebar-navigation" ref="navRef">
      <div href="index.html" class="nav-logo-container">
        <img class="nav-logo" src="../assets/inception.png" alt="CodingNepal" />
      </div>
        <ul class="navigation-list primary-navigation">
          <li class="navigation-item" @click="handleNavItemClick">
            <router-link to="/" class="navigation-link">
              <i class="bx bx-search"></i>
              <span class="navigation-label">Search</span>
            </router-link>
          </li>

          <li class="navigation-item has-dropdown">
            <router-link to="#" class="navigation-link dropdown-toggle" @click="isSettingsOpen = !isSettingsOpen">
              <i class="bx bx-cog"></i>
              <span class="navigation-label">Settings</span>
              <i class="bx bx-chevron-down dropdown-arrow" :class="{ rotated: isSettingsOpen }"></i>
            </router-link>
            <transition
              @enter="onEnter"
              @leave="onLeave"
            >
              <ul v-show="isSettingsOpen" class="dropdown-menu">
                <li><router-link to="/user" class="dropdown-link">User</router-link></li>
                <li><router-link to="/password" class="dropdown-link">Password</router-link></li>
              </ul>
            </transition>
          </li>

          <li class="navigation-item" @click="handleNavItemClick">
            <a href="#" class="navigation-link">
              <i class="bx bx-user-voice"></i>
              <span class="navigation-label">Client</span>
            </a>
          </li>

          <!-- ADD: RMF -->
          <li class="navigation-item" @click="handleNavItemClick">
            <router-link to="/rmf" class="navigation-link">
              <i class="bx bx-shield-quarter"></i>
              <span class="navigation-label">RMF</span>
            </router-link>
          </li>

          <!-- ADD: Control ID -->
          <li class="navigation-item" @click="handleNavItemClick">
            <a href="#" class="navigation-link">
              <i class="bx bx-lock-alt"></i>
              <span class="navigation-label">Control ID</span>
            </a>
          </li>

          <!-- ADD: Policies -->
          <li class="navigation-item" @click="handleNavItemClick">
            <router-link to="/policies" class="navigation-link">
              <i class="bx bx-file"></i>
              <span class="navigation-label">Policies</span>
            </router-link>
          </li>

          <li class="navigation-item has-dropdown">
            <a href="#" class="navigation-link dropdown-toggle" @click="isDepartmentOpen = !isDepartmentOpen">
              <i class="bx bx-buildings"></i>
              <span class="navigation-label">Department</span>
              <i class="bx bx-chevron-down dropdown-arrow" :class="{ rotated: isDepartmentOpen}"></i>
            </a>
            <transition
              @enter="onEnter"
              @leave="onLeave"
            >
              <ul v-show="isDepartmentOpen" class="dropdown-menu">
                <li><router-link to="/boardApprovers" class="dropdown-link">Board Approvers</router-link></li>
                <li><router-link to="/processOwners" class="dropdown-link">Process Owners</router-link></li>
                <li><router-link to="/documentOwners" class="dropdown-link">Document Owners </router-link></li>
              </ul>
            </transition>
          </li>
        </ul>
        <div class="button-container">
          <button class="sidebar-toggle" id="sidebar-toggle" @click="toggleSidebar">
          <i class="bx bx-chevron-left toggle-icon"></i>
          </button>
        </div>
      </nav>
  </aside>
</template>

<style lang="scss" scoped>
@use '@/styles/base/navigation' as *; 
@use '@/styles/base/globals' as *; 
@use '@/styles/base/buttons'as *; 

</style>
