<script lang="ts">
  import { getDataFromYTAPI } from "../../utils/getDataFromAPI";
  import { onMount } from "svelte";

  export let videoId: string;
  export let title: string;
  export let date: string;
  export let desc: string;
  export let viewCount: string;
  export let channelId: string;
  
  const channelUrl = `channel/about?id=${channelId}`
  let channelDetails;
  onMount(async () => {
    channelDetails = await getDataFromYTAPI(channelUrl);
  })
  
  let expanded = false;
  
  function expandDesc() {
    expanded = !expanded;
  }
  
  $: if (expanded) {
    const sugLatter = document.getElementById("suggestionLatter");
    sugLatter?.classList.remove("hidden");
  }
</script>

<div class="flex flex-col gap-6">
  <iframe class="h-[30vh] md:h-[60vh]" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="mx-4 md:mx-0 flex flex-col gap-4">
    <h3 class="text-xl font-bold">{ title }</h3>
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <div class="w-12 rounded-lg overflow-hidden"><img src={channelDetails?.avatar[0].url} alt="" /></div>
        <div class="flex flex-col gap-1">
          <a href={`/channel/${channelId}`} class="font-bold">{ channelDetails ? channelDetails.title : '' }</a>
          <span class="text-sm">{ channelDetails ? channelDetails.subscriberCountText + " subscribers" : '' }</span>
        </div>
      </div>
      <div class="text-sm mr-4">{ viewCount + " views" }</div>
    </div>
  </div>
  <div class={`relative p-4 md-rounded mx-4 md:mx-0 flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-800 overflow-hidden ${expanded ? 'pb-8' : 'hover:bg-zinc-300 dark:hover:bg-zinc-600 group/desc'}`}>
    <div>shared on { date }</div>
    <div class={`overflow-hidden ${expanded ? '' : 'h-24 text-zinc-900/[0.8] dark:text-white/[0.8]'}`}>
      <div class="whitespace-pre-wrap">{ desc }</div>
    </div>
    <button type="button" class={`absolute ${ expanded ? 'dark:hover:bg-zinc-600 bottom-2 right-2' : 'h-full w-full bottom-0 right-0'}`} on:click={expandDesc}>
      <span class={expanded ? '' : 'absolute bottom-4 right-4 dark:bg-zinc-800 dark:group-hover/desc:bg-zinc-600'}>{ expanded ? "Show less" : "...more" }</span>
    </button>
  </div>
</div>

