"use client";

import { Section } from "@/components/Section";
import { Stack, Text, Title, rem } from "@mantine/core";

export default function Sobre() {
  return (
    <Section id="sobre">
      <Stack align="center" ta="center" style={{ zIndex: 1 }} p="sm" gap="xs">
        <Title
          order={2}
          px={{ base: "xl", sm: "0" }}
          fz={{ base: rem(42), sm: rem(56) }}
          fw={700}
          lts={-1}
          lh={1}
          mb="sm"
          maw={{ base: "100%", sm: "70%" }}
          c="#6DB2E3"
        >
          Sobre o evento
        </Title>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
          c="white"
        >
          A <strong>EXPOTECH Maringá 2025</strong> é o maior encontro de ciência, tecnologia
          e inovação da região, promovendo a integração entre universidades,
          setor produtivo e sociedade.
        </Text>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
          c="white"
        >
          Inspirada na histórica <strong>FEITECH 2013</strong>, que impulsionou a cultura de
          inovação em Maringá, a EXPOTECH chega com uma proposta moderna e
          interativa, alinhada à Transformação Digital e ao <strong>desenvolvimento
          sustentável do Paraná.</strong>
        </Text>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
          c="white"
        >
          Durante cinco dias, o Maringatech se transforma em um <strong>hub aberto de
          conhecimento, negócios e conexões estratégicas</strong>, aproximando
          pesquisadores, empresas, investidores e a comunidade.{" "}
        </Text>
      </Stack>
    </Section>
  );
}
