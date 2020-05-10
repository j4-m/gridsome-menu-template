<template>
  <div class="section">
    <header class="header container">
      <main-menu />
    </header>
    <slot/>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu'
export default {
  components: {
    MainMenu
  }
}
</script>