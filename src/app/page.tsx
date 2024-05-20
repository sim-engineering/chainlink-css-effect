"use client";
import React, { useState, useEffect } from "react";
import { HexagonLogo } from "../components/hexagon-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-transparent w-full">
      <HexagonLogo />
    </main>
  );
}
