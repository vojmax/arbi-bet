import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-100">
      <div className="space-y-6 bg-white p-8 rounded-xl">
        <h1 className="text-6xl font-semibold drop-shadow-md flex">🔒Auth</h1>
        <p className="text-xl ">please register or login</p>
        <div>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
