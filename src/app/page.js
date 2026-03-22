import Scene from '@/components/Scene'
import HeroUI from '@/components/HeroUI'
import ScanOverlay from '@/components/ScanOverlay'

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      <Scene />
      <ScanOverlay />
      <HeroUI />
    </main>
  )
}