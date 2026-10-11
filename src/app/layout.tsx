import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" />
      </head>
      <body className="flex flex-col min-h-screen relative text-slate-900 dark:text-slate-50">
        <RootProvider>
          {/* ──── Unified Global Background ──── */}
          <div className="fixed inset-0 -z-20 bg-linear-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 pointer-events-none" />
          <div className="fixed inset-0 -z-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px] opacity-70 pointer-events-none" />

          {children}
        </RootProvider>
      </body>
    </html>
  );
}
