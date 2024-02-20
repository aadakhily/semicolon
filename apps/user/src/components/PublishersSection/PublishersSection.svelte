<script>
  const publishersData = Array.from(Array(5).keys());
  import PublishersSectionCard from "./PublishersSectionCard.svelte";
</script>

<div class="publishers-section">
  <h4 class="publishers-section__title">Top Publishers</h4>

  <div class="publishers-section__list">
    {#each publishersData as publisher}
      <PublishersSectionCard publisherId={publisher} />
    {/each}
  </div>
</div>

<style lang="scss">
  .publishers-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0.75rem;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 0.75rem;

    &__title {
      margin: 0;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: 800;
    }

    &__list {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.55rem;
    }
  }
</style>
