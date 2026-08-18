import {figure} from "@mdit/plugin-figure";
import {InlineLinkPreviewElementTransform} from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import {componentPreview, containerPreview} from "@vitepress-demo-preview/plugin";
import path from "node:path";
import multimdTable from "markdown-it-multimd-table";
import type {MarkdownOptions} from "vitepress";
// @ts-ignore package does not publish declarations
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import timeline from "vitepress-markdown-timeline";
import {vitepressDemoPlugin} from "vitepress-demo-plugin";
import {groupIconMdPlugin} from "vitepress-plugin-group-icons";
import vitepressPluginLegend from "vitepress-plugin-legend";
import {customMarkdownPlugin} from "../../theme/plugins/markdown-it-custom-plugin";
import {demoAlias} from "./context";

export const configureMarkdown: NonNullable<MarkdownOptions["config"]> = (md) => {
    // Several plugins bundle a different markdown-it declaration version.
    // Keep that type mismatch at the plugin registration boundary.
    const markdownIt = md as any;

    markdownIt.use(containerPreview, { clientOnly: true, alias: demoAlias });
    markdownIt.use(componentPreview, { clientOnly: true, alias: demoAlias });
    markdownIt.use(multimdTable, {
        multiline: true,
        rowspan: true,
        headerless: true,
        multibody: true,
        autolabel: true,
    });
    vitepressPluginLegend(markdownIt, {
        markmap: { showToolbar: true },
        mermaid: { showToolbar: true },
    });
    markdownIt.use(customMarkdownPlugin);
    markdownIt.use(timeline);
    markdownIt.use(groupIconMdPlugin);
    markdownIt.use(InlineLinkPreviewElementTransform);
    markdownIt.use(figure, { figcaption: "alt", copyAttrs: "^class$", lazy: true });
    markdownIt.use(markdownItTaskCheckbox);
    markdownIt.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__dirname, "../../demos"),
    });
};

export const markdownConfig = {
    math: true,
    lineNumbers: true,
    image: { lazyLoading: true },
    // VitePress's attrs plugin recalculates table rowspans and conflicts with
    // markdown-it-multimd-table's `^^` rowspan syntax.
    attrs: { disable: true },
    config: configureMarkdown,
} satisfies MarkdownOptions;
