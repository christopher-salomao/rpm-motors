import { getDataHome } from "@/utils/actions/get-data";

import { Submenu } from "@/components/home/submenu";
import { Phone } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Services } from "@/components/home/services";
import { Contacts } from "@/components/home/contacts";

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
      <Container>
        <Services object={object} />
        <Contacts object={object} />
      </Container>
    </main>
  );
}
