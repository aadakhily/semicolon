<template>
    <div class="post-list">
        <PostItem v-for="item in 10" :post-id="item" :key="item" />
    </div>
</template>

<script setup lang="ts">
import PostItem from '../PostItem/PostItem.vue'
</script>

<style scoped>
.post-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>