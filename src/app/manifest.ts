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
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/icon.png",
        type: "image/png",
      },
    ],
    id: "/",
    name: "Best Seen On Foot",
    orientation: "portrait",
    screenshots: [
      {
        // @ts-expect-error this is a real prop
        form_factor: "wide",
        label: "Homescreen of Bestseenonfoot",
        sizes: "1440x797",
        src: "/assets/screenshots/desktop-screenshot.png",
        type: "image/png",
      },
      {
        // @ts-expect-error this is a real prop
        form_factor: "narrow",
        label: "Homescreen of Bestseenonfoot",
        sizes: "750x1334",
        src: "/assets/screenshots/mobile-screenshot.png",
        type: "image/png",
      },
    ],
    short_name: "Best Seen",
    start_url: "/",
    theme_color: "#34D399",
  };
}
