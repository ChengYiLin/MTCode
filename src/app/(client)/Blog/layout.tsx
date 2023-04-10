export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto box-border max-w-screen-xl px-8 sm:px-12">
      {children}
    </div>
  );
}
