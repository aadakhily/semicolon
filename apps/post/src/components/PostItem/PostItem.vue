<template>
    <div class="post-item">
        <div class="post-item__header">
            <div class="post-item__publisher">
                <div class="post-item__publisher-avatar">
                    <img :src="`https://i.pravatar.cc/40?img=${props.postId}`" alt="publisher avatar image"
                        class="post-item__publisher-avatar-image">
                </div>
                <div class="post-item__publisher-info">
                    <span class="post-item__publisher-name">Amir Abbas Dakhili</span>
                    <span class="post-item__post-create-date"> {{ new Date().toLocaleDateString('en') }} </span>
                </div>
            </div>

            <button class="post-item__save-button">
                share
            </button>
        </div>
        <div class="post-item__content">
            <h3 class="post-item__title">Why Micro frontend Is The Worst Choice ?</h3>
            <div class="post-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fuga?
            </div>
            <div class="post-item__tags">
                <span class="post-item__tag">#Html</span>
                <span class="post-item__tag">#Css</span>
                <span class="post-item__tag">#React</span>
                <span class="post-item__tag">#Vue</span>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ postId: number }>()
</script>

<style src="./postItem.scss" lang="scss" scoped  />