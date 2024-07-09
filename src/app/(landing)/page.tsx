import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-8 p-8">
        <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
          Stockie
        </div>
        <div className="max-w-lg flex flex-col gap-4 text-center">
          <p>
            A FREE web-based tool that utilizes large language models to digest
            and analyze stock market data and financial news for you.
          </p>
          <p>
            Stockie is designed to help you make better investment decisions by
            providing you with the most relevant information.{" "}
          </p>
        </div>
        <div className="flex flex-row gap-8">
          <Button variant="secondary" className="bg-red-600 hover:bg-red-700">
            Sign up
          </Button>
          <Button
            variant="secondary"
            className="bg-green-600 hover:bg-green-700">
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
}
