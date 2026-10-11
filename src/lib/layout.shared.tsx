import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import logo from "../../public/logo.png";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Constructive Logo" width={24} height={24} className="rounded-sm" />
          <span className="font-semibold tracking-tight text-lg">
            constructive.
          </span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
