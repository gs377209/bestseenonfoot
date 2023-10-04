import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#FFFFFF",
    description: "A Travel Blog",
    display: "standalone",
    icons: [
      {
        sizes: "any",
        src: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        sizes: "any",
        src: "/apple-icon.png",
        type: "image/png",
      },
      {
        sizes: "any",
        src: "/icon.png",
        type: "image/png",
      },
    ],
    id: "/",
    name: "Best Seen On Foot",
    orientation: "portrait",
    short_name: "Best Seen",
    start_url: "/",
    theme_color: "#FFFFFF",
  };
}
