<template>
    <a :href="`/posts/${props.postId}`" class="post-section-item">
        <div class="post-section-item__header">
            <div class="post-section-item__publisher">
                <div class="post-section-item__publisher-avatar">
                    <img :src="`https://i.pravatar.cc/40?img=${props.postId}`" alt="publisher avatar image"
                        class="post-section-item__publisher-avatar-image">
                </div>
                <div class="post-section-item__publisher-info">
                    <span class="post-section-item__publisher-name">Amir Abbas Dakhili</span>
                    <span class="post-section-item__post-create-date"> {{ new Date().toLocaleDateString('en') }} </span>
                </div>
            </div>

            <button class="post-section-item__save-button">
                share
            </button>
        </div>
        <div class="post-section-item__content">
            <h3 class="post-section-item__title">Why Micro frontend Is The Worst Choice ?</h3>
            <div class="post-section-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fuga?
            </div>
            <div class="post-section-item__tags">
                <span class="post-section-item__tag">#Html</span>
                <span class="post-section-item__tag">#Css</span>
                <span class="post-section-item__tag">#React</span>
                <span class="post-section-item__tag">#Vue</span>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
const props = defineProps<{ postId: number }>()
</script>

<style src="./postSectionItem.scss" lang="scss" scoped  />
