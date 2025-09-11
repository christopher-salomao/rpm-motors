import { getDataHome } from "@/utils/actions/get-data";

import { Submenu } from "@/components/home/submenu";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";

import type { HomeProps } from "@/interfaces/home.type";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonURL={object.metadata.cta_button.url}
        buttonTitle={object.metadata.cta_button.title}
        bannerURL={object.metadata.banner.url}
        icon={<Phone size={24} color="#ffffff" />}
      />
    </main>
  );
}
