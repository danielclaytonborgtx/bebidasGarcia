import * as Prismic from "@prismicio/client";

export const client = Prismic.createClient("bebidas-garcia", {
  accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
});
