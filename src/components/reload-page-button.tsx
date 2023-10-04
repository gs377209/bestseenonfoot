"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ReloadPageButton({ children }: Props) {
  const router = useRouter();

  return (
    <button
      className="font-medium text-gray-900 underline"
      onClick={() => router.refresh()}
    >
      {children}
    </button>
  );
}
