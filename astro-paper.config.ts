import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: 'https://hsujessie.github.io',
    title: "Jessie's Blog",
    description: "",
    author: "Jessie",
    profile: "https://github.com/hsujessie",
    ogImage: "default-og.jpg",
    lang: "zh-TW",
    timezone: "Asia/Taipei",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/hsujessie/blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/hsujessie?tab=repositories" },
  ],
});