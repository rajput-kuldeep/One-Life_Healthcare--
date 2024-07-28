import { HoverEffect } from "../Components/ui/card-hover-effect/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-full lg:max-w-[80vw] mx-auto text-center font-medium lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "anonymity security and safety",
    description:
      "Your identity remains safeguarded as you open up about your deepest struggles.",
    link: "",
  },
  {
    title: "seasoned professionals at your fingertips",
    description:
      "Engage in insightful conversations with experienced psychologists and empathetic individuals who genuinely care.",
    link: "",
  },
  {
    title: "Around the clock support",
    description:
      "Day or night, you're never alone. Our dedicated team ensures that someone is always available to lend a compassionate ear.",
    link: "",
  },
  {
    title: "liberation to express",
    description:
      "Feel free to articulate your challenges without reservation, knowing that here, your voice matters.",
    link: "",
  },
  {
    title: "empower through support",
    description:
      "Beyond seeking solace, you also have the opportunity to extend a helping hand to others traversing similar paths.",
    link: "",
  },
 
];
