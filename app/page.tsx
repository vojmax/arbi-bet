import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-100">
      <div className="space-y-6 bg-white p-8 rounded-xl text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md ">🔒Auth</h1>
        <p className="text-xl ">please register or login</p>
        <div>
          <LoginButton>
            <Button size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
