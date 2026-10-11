import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="relative z-0 flex flex-col min-h-screen">
      {/* ──── Unified Glowing Ambient Lights ──── */}
      <div className="fixed top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-purple-200/10 dark:bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <HomeLayout {...baseOptions()}>{children}</HomeLayout>
    </div>
  );
}
