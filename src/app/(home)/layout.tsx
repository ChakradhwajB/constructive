import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="relative z-0 flex flex-col min-h-screen">
      {/* ──── Unified Global Background ──── */}
      <div className="fixed inset-0 -z-20 bg-linear-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 pointer-events-none" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px] opacity-70 pointer-events-none" />
      
      {/* ──── Unified Glowing Ambient Lights ──── */}
      <div className="fixed top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-200/10 dark:bg-blue-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <HomeLayout {...baseOptions()}>{children}</HomeLayout>
    </div>
  );
}
