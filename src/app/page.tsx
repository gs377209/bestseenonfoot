import { Metadata } from "next";
import { BASE_URL } from "src/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  title: "Best Seen on Foot",
};

export default function Page() {
  return "...";
}
