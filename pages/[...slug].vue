<script setup>
const { slug } = useRoute().params;

const url = computed(() => {
  //slug && slug.length > 0 ? slug!.join('/') : 'home'
  if (Array.isArray(slug) && slug.length) {
    return slug.join('/');
  }

  return 'home';
});

const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production';

const resolveRelations = ['popular-articles.articles'];

const { data: story, pending } = await useAsyncData(url.value, async () => {
  const { data } = await useStoryblokApi().get(
    `cdn/stories/${url.value.replace(/\/$/, '')}`,
    {
      version: isPreview ? 'draft' : 'published',
      resolve_relations: resolveRelations,
    },
    {
      resolveRelations,
    },
  );

  return data?.story
});

if (!isPreview && !story.value) {
  showError({ statusCode: 404, statusMessage: 'Page not Found' });
}

onMounted(() => {
  if (isPreview && story.value && story.value.id) {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), { resolveRelations });
  }
});
</script>

<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>

<style scoped></style>
