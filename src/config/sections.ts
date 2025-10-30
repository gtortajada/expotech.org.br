export const sections = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "programacao", label: "Programação" },
  { id: "informacoes", label: "Informações" },
  { id: "resumo", label: "Resumo do evento" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const scrollToSection = (sectionId: SectionId) => {
  const sectionSelector = "#" + sectionId;
  const targetElement = document.querySelector(sectionSelector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", sectionSelector);
  }
};
