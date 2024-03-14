import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

// import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { HeroParallax } from '@/components/ui/section-parallax'
import { resolveHref } from '@/sanity/lib/utils'
import project from '@/sanity/schemas/documents/project'
import { products } from '@/static/data'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '', subtitle = '' } = data ?? {}

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header title={title} subtitle={subtitle} description={overview} />}
      {/* Showcase projects */}
      {/* {showcaseProjects && showcaseProjects.length > 0 && ( */}
      {/*   <div className="mx-auto max-w-[100rem] rounded-md border"> */}
      {/*     {showcaseProjects.map((project, key) => { */}
      {/*       const href = resolveHref(project?._type, project?.slug) */}
      {/*       if (!href) { */}
      {/*         return null */}
      {/*       } */}
      {/*       return ( */}
      {/*         <Link */}
      {/*           key={key} */}
      {/*           href={href} */}
      {/*           data-sanity={encodeDataAttribute?.([ */}
      {/*             'showcaseProjects', */}
      {/*             key, */}
      {/*             'slug', */}
      {/*           ])} */}
      {/*         > */}
      {/*           <ProjectListItem project={project} odd={key % 2} /> */}
      {/*         </Link> */}
      {/*       ) */}
      {/*     })} */}
      {/*   </div> */}
      {/* )} */}
      <div className='min-h-dvh'>
      </div>
      <div>
        <HeroParallax products={products} />
      </div>
    </div>
  )
};

