import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { 
  Insight, Complexity, Hint, 
  ArrayView, DPGrid, AdjacencyList, GraphBox 
} from './mdx-custom';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Insight,
    Complexity,
    Hint,
    ArrayView,
    DPGrid,
    AdjacencyList,
    GraphBox,
    Tabs,
    Tab,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
