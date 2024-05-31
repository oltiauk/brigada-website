import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import policereport from '@/images/clients/65e6e3ca22873241e800c561_policerereportsai_logo_color-p-500 (1).png'
import unmik from '@/images/clients/UNMIK LOGO.svg'
import niche from '@/images/clients/niche logo.svg'
import sparks from '@/images/clients/Frame 6.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'


const clients = [
  ['policereport', policereport],
  ['unmik', unmik],
  ['niche', niche],
  ['sparks', sparks],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center  gap-x-8">
          <h2 className="text-left font-display ml-5 md:ml-0  text-2xl mb-11 font-semibold tracking-wider text-white sm:text-left">
            Here are some proud clients we’ve worked with:
          </h2>
          <div className="h-px flex-auto bg-neutral-800 mb-11" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-y-16 lg:gap-y-0 gap-x-[140px]  lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex justify-start lg:justify-center items-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized className="w-2/3 ml-5 md:ml-0 md:w-auto" />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>,
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We believe technology is the answer to the world’s greatest challenges. Oh, and guess what? It also causes most of them. So, we’re basically stuck in a never-ending loop of fixing problems we created.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5  transform transition-all duration-200 ease-in-out hover:bg-neutral-25 hover:-translate-y-1 hover:shadow-sm  sm:p-8">
                <h3>
                  <div>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </div>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{caseStudy.type}</span>
                </p>
                <p className="mt-6 font-display text-2xl  font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you advance your business through tech and design."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Creative Design">
            We have a team of highly skilled designers with 5+ years of experience in Adobe Illustrator and Figma, who still end up using Canva anyways.
            </ListItem>
            <ListItem title="Customer Relationship Management">
            Even though we don't quiet know what it is yet, some of our team members are Salesforce Developers.
            </ListItem>
              {/* <ListItem title="Product Development">
                At Brigada we understand the importance of quality product development. That is why we are the best.
              </ListItem> */}
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Brigada is an tech outsourcing creative agency based in Pristina.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We’re Brigada, the tech brigade stationed at the chaotic intersection of design and technology. It’s a real battlefield here — half our team has been dodging more bugs and glitches than we can count!
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: '- Totally unintimidated client' }}
      >
        The Brigada team went above and beyond with our onboarding. They even got our app running smoothly on Internet Explorer. Honestly, I didn’t know whether to be impressed or scared.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}

