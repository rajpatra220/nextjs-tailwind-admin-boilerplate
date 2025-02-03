"use client"
import Sidebar from "@/components/Sidebar";
import Content from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full">
          <Sidebar activeMenu="dashboard"/>
          <Content/>
      </div>
    </>
  )
}
