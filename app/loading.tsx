export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0B0B0B]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-zinc-200 dark:border-zinc-800 rounded-full" />
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-500 rounded-full border-t-transparent animate-spin" />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          Cargando...
        </p>
      </div>
    </main>
  );
}