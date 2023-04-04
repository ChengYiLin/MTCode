import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-auto pt-14 sm:pt-16">{children}</main>
      <Footer />
    </div>
  );
}
