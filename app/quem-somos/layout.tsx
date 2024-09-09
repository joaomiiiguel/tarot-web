export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen flex flex-col items-center justify-center gap-4 py-2">
      {children}
    </section>
  );
}
