import sveltePreprocess from "svelte-preprocess";
import begin from "sveltekit-begin-adapter";

const mode = process.env.MODE;

const config = {
  preprocess: [
    sveltePreprocess({
      /// TODO: remove as it's been deprecated see https://github.com/sveltejs/svelte-preprocess/pull/393
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  ],
  kit: {
    adapter: begin(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      mode,
      server: {
        hmr: {
          clientPort: process.env.HMR_HOST ? 443 : 24678,
          host: process.env.HMR_HOST
            ? process.env.HMR_HOST.substring("https://".length)
            : "localhost",
        },
      },
    },
  },
};

export default config;
