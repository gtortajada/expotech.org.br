import Hero from "@/components/sections/Hero";
import Informacoes from "@/components/sections/Informacoes";
import Programacao from "@/components/sections/Programacao";
import Sobre from "@/components/sections/Sobre";
import Resumo from "@/components/sections/ResumoEvento";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Page() {
  return (
    <main>
      <SectionWrapper
        backgroundColor="#181818"
        leftAsset="quadradoEsquerdaCinza"
        rightAsset="quadradoDireitaCinza"
      >
        <Hero />
      </SectionWrapper>
      <SectionWrapper
        backgroundColor="#181818"
        leftAsset="quadradoEsquerdaCinza"
        rightAsset="quadradoDireitaCinza"
      >
        <Sobre />
      </SectionWrapper>
      <SectionWrapper
        backgroundColor="#6DB2E3"
        rightAsset="quadradoDireitaPreto"
        leftAsset="quadradoEsquerdaPreto"
      >
        <Programacao />
      </SectionWrapper>
      <SectionWrapper
        backgroundColor="#6DB2E3"
        leftAsset="quadradoEsquerdaPreto"
        rightAsset="quadradoDireitaPreto"
      >
        <Informacoes />
      </SectionWrapper>
      <SectionWrapper
        backgroundColor="#181818"
        leftAsset="quadradoEsquerdaCinza"
        rightAsset="quadradoDireitaCinza"
      >
        <Resumo />
      </SectionWrapper>
    </main>
  );
}