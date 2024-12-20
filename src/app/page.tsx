import { Banana } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#ff6b6b] via-[#cd5c8d] to-[#9d4edd]">
      <div className="text-center space-y-8">
        <Banana className="w-24 h-24 text-white mx-auto" strokeWidth={1.5} />
        <h1 className="text-5xl md:text-7xl font-bold italic text-white tracking-tight">
          Protein Gummies
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Fruit Snacks Packed with Protein!
        </p>
        <p className="text-3xl font-bold text-white bg-white/20 px-8 py-4 rounded-full inline-block">
          Coming Soon
        </p>
      </div>
    </main>
  )
}

