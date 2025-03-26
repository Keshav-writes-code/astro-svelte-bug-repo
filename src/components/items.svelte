<script lang="ts">
  type Props = {
    items: {
      name: string;
    }[];
  };
  let { items }: Props = $props();
  let items_mutable = $state(items);
  let items_mutable_2 = $state($state.snapshot(items));

  $inspect(items);
  $inspect(items_mutable);
</script>

<!-- Inputs Element to change the Items_mutable Variable -->
<p>Items_mutable</p>
<div>
  {#each items_mutable as item}
    <input bind:value={item.name} type="text" />
  {/each}
</div>

<!-- 3 Tables to show Diffrent Stratergies -->
<div>
  <table>
    <caption>Items : </caption>
    <tbody>
      {#each items as item, i}
        <tr>
          <td>{i} </td>
          <td>{item.name} </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <table>
    <caption>Items_mutable : </caption>
    <tbody>
      {#each items_mutable as item, i}
        <tr>
          <td>{i} </td>
          <td>{item.name} </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <table>
    <caption>Items_mutable 2: </caption>
    <tbody>
      {#each items_mutable_2 as item, i}
        <tr>
          <td>{i} </td>
          <td>{item.name} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 1rem;
  }
  div {
    display: flex;
    gap: 2rem;
  }
</style>
