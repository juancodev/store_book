import React from "react";
import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}
