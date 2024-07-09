import { ThemeToggle } from "@/components/theme-toggle";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="fixed right-5 bottom-5">
        <ThemeToggle />
      </div>
    </>
  );
}
