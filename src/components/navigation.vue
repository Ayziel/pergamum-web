<script setup lang="ts">
import { ref } from 'vue'
const isSettingsOpen = ref(false)
const isDepartmentOpen = ref(false)

const navRef = ref<HTMLElement | null>(null)

const toggleSidebar = () => {
  if (navRef.value) {
    navRef.value.classList.toggle('shrunk')
  }

  const handleNavItemClick = () => {
  if (navRef.value?.classList.contains('shrunk')) {
    navRef.value.classList.remove('shrunk')
  }
}


  isSettingsOpen.value = false
  isDepartmentOpen.value = false
}

const onEnter = (el: Element) => {
  el.style.height = '0'
  el.style.opacity = '0'
  el.style.overflow = 'hidden'

  const height = el.scrollHeight + 'px'

  requestAnimationFrame(() => {
    el.style.transition = 'all 0.3s ease'
    el.style.height = height
    el.style.opacity = '1'
  })
}

const onLeave = (el: Element) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
  el.style.overflow = 'hidden'

  requestAnimationFrame(() => {
    el.style.transition = 'all 0.3s ease'
    el.style.height = '0'
    el.style.opacity = '0'
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
            <router-link to="/search" class="navigation-link">
              <i class="bx bx-search"></i>
              <span class="navigation-label">Search</span>
            </router-link>
          </li>

          <li class="navigation-item has-dropdown">
            <router-link to="/" class="navigation-link dropdown-toggle" @click="isSettingsOpen = !isSettingsOpen">
              <i class="bx bx-cog"></i>
              <span class="navigation-label">Settings</span>
              <i class="bx bx-chevron-down dropdown-arrow" :class="{ rotated: isSettingsOpen }"></i>
            </router-link>
            <transition
              @enter="onEnter"
              @leave="onLeave"
            >
              <ul v-show="isSettingsOpen" class="dropdown-menu">
                <li><a href="#" class="dropdown-link">User</a></li>
                <li><a href="#" class="dropdown-link">Password</a></li>
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
            <a href="#" class="navigation-link">
              <i class="bx bx-shield-quarter"></i>
              <span class="navigation-label">RMF</span>
            </a>
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
            <a href="#" class="navigation-link">
              <i class="bx bx-file"></i>
              <span class="navigation-label">Policies</span>
            </a>
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
                <li><a href="#" class="dropdown-link">Board Approvers</a></li>
                <li><a href="#" class="dropdown-link">Process Owners</a></li>
                <li><a href="#" class="dropdown-link">Document Owners</a></li>
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
