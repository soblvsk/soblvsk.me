<script setup lang='ts'>
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();
const content = ref<HTMLDivElement>();

onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      const el = document.querySelector(decodeURIComponent(location.hash));
      if (el) {
        const rect = el.getBoundingClientRect();
        const y = window.scrollY + rect.top - 40;
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
        return true;
      }
    }
  };

  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a');

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href);
      if (url.origin !== window.location.origin)
        return;

      event.preventDefault();
      const { pathname, hash } = url;
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash);
        navigate();
      }
      else {
        router.push({ path: pathname, hash });
      }
    }
  };

  useEventListener(window, 'hashchange', navigate);
  useEventListener(content.value!, 'click', handleAnchors, { passive: false });

  setTimeout(() => {
    if (!navigate())
      setTimeout(navigate, 1000);
  }, 1);
});
</script>

<template>
  <ClientOnly v-if="frontmatter.plum">
    <Plum />
  </ClientOnly>
  <div
    v-if="frontmatter.display ?? frontmatter.title"
    class="prose m-auto mb-8"
    :class="[frontmatter.wrapperClass]"
  >
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>

    <p
      v-if="frontmatter.subtitle"
      class="opacity-50 !-mt-6 italic slide-enter"
    >
      {{ frontmatter.subtitle }}
    </p>
  </div>
  <article ref="content" :class="[frontmatter.tocAlwaysOn ? 'toc-always-on' : '', frontmatter.class]">
    <slot />
  </article>
  <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
    <br>
    <span font-mono op50>> </span>
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="font-mono op50 hover:op75"
      v-text="'cd ..'"
    />
  </div>
</template>
