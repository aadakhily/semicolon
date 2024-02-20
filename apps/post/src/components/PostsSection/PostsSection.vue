<template>
    <div class="post-list">
        <PostSectionItem v-for="item in 10" :post-id="item" :key="item" />
    </div>
</template>

<script setup lang="ts">
import PostSectionItem from './PostSectionItem/PostSectionItem.vue'
</script>

<style scoped>
.post-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
