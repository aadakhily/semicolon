<script>
  import PublishersSectionCard from "../../components/PublishersSection/PublishersSectionCard.svelte";
  import { Link } from "svelte-routing";
  const publishersData = Array.from(Array(55).keys());
</script>

<div class="users">
  <h1 class="users__title">Top Publishers</h1>

  <div class="users__list">
    {#each publishersData as publisher}
      <Link to={`/users/${publisher}`}>
        <PublishersSectionCard publisherId={publisher} />
      </Link>
    {/each}
  </div>
</div>

<style lang="scss">
  .users {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    &__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.55rem;
    }
  }
</style>
