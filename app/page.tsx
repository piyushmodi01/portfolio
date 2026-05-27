import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { SelectedWork } from "@/components/home/selected-work";
import { AboutTeaser } from "@/components/home/about-teaser";
import { PlaygroundTeaser } from "@/components/home/playground-teaser";
import { NotesTeaser } from "@/components/home/notes-teaser";
import { Contact } from "@/components/home/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SelectedWork />
      <AboutTeaser />
      <PlaygroundTeaser />
      <NotesTeaser />
      <Contact />
    </>
  );
}
