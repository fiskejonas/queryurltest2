import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    storyblok({
      accessToken: "EyhJkbuGRrYuRMY4CQ4PzQtt",
      components: {
        // Add your components here
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
  ],
});
