import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GraphAlgorithmLogo } from "@/components/logos";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <div className="flex items-center gap-2.5">
          <GraphAlgorithmLogo className="w-6 h-6" />
          <span className="font-semibold tracking-tight text-lg">
            constructive.
          </span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
