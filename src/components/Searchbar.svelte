<script lang="ts">
  let searchKey: string = "";
  
  function search() {
    if (searchKey === "") return;
    const modSearchKey = searchKey.replaceAll(' ', '+');
    console.log("searching for ", modSearchKey)
    window.location.href = `/search/${modSearchKey}`;
  }
</script>

<form class="flex justify-center items-center w-1/2" on:submit|preventDefault={search}>
  <div class="h-8 basis-1/2 pl-4 rounded-l border flex items-center focus-within:outline outline-1 outline-blue-400 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
    <input type="text" placeholder="Search" class="w-full outline-none dark:bg-zinc-900 dark:text-zinc-50 bg-zinc-50 text-zinc-950" bind:value={searchKey} />
  </div>
  <button type="submit" class="h-8 w-12 rounded-r flex justify-center items-center dark:bg-zinc-800 bg-zinc-300">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512" class="dark:fill-zinc-400 fill-zinc-700">
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
  </button>
</form>