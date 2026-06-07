import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { caseStudyMdxComponents } from "@/components/case-study/mdx-components";
import { ReadingProgress } from "@/components/case-study/reading-progress";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: `${cs.client} — ${cs.title}`,
    description: cs.summary,
    alternates: { canonical: `https://piyushmodi.com/work/${slug}` },
    openGraph: {
      title: `${cs.client} — ${cs.title}`,
      description: cs.summary,
      url: `https://piyushmodi.com/work/${slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="pb-12">
      <ReadingProgress />
      <MDXRemote
        source={cs.content}
        components={caseStudyMdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}
