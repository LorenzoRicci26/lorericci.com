// app/page.tsx

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Education from "./components/Education";
import { Slide } from "./animation/Slide";
import Social from "./components/Social";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <Slide>
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
              </Slide>
              <Slide delay={0.1}>
                <Social type={"social"} />
              </Slide>
            </div>
          ))}
        <HeroSvg />
      </section>
      <Education />
    </main>
  );
}