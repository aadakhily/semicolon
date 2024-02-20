<script lang="ts">
  export let publisherId: number;
</script>

<div class="publisher-section-card">
  <div class="publisher-section-card__avatar">
    <img
      src={`https://i.pravatar.cc/52?img=${publisherId}`}
      class="publisher-section-card__avatar-image"
      alt="publisher avatar"
    />
  </div>

  <div class="publisher-section-card__info">
    <span class="publisher-section-card__name">Amir Abbas Dakhili</span>
    <span class="publisher-section-card__bio">Front End Developer In ...</span>
  </div>
</div>

<style lang="scss">
  .publisher-section-card {
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 0.75rem;

    &__avatar {
      width: 3.25rem;
      height: 3.25rem;
      background-color: #eee;
      border-radius: 0.75rem;
      overflow: hidden;

      &-image {
        width: inherit;
        height: inherit;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 0.5rem;
    }

    &__name {
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    &__bio {
      font-size: 0.75rem;
      color: #999;
    }
  }
</style>
