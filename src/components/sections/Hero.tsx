"use client";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import {
  Box,
  Stack,
  Text,
  Title,
  rem
} from "@mantine/core";

export default function Hero() {
  return (
    <Section id="home">
      <Box
        style={(theme) => ({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          backgroundImage:
            "linear-gradient(rgba(2, 22, 48, 0.45), rgba(2, 22, 48, 0.45)), url(/images/home/bg-header.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 100%",

          [`@media (minWidth: ${theme.breakpoints.md})`]: {
            backgroundPosition: "center bottom",
          },
        })}
        mih={{ base: "100vh", md: "768px" }}
        mah={{ base: "auto", md: "1000px" }}
        pb={{ base: 0, md: rem(150) }}
      >
        <Stack align="center" style={{ zIndex: 1 }} p="sm" gap="xs">
          <Title
            order={1}
            px={{ base: "xl", sm: "0" }}
            fz={{ base: rem(42), sm: rem(56) }}
            fw={700}
            lts={-1}
            lh={1}
            mb="sm"
            maw={{ base: "100%", sm: "70%" }}
          >
            Inovação, ciência e tecnologia conectando academia, empresas e
            sociedade
          </Title>
          <Text
            px={{ base: "md", sm: "0" }}
            fz={{ base: rem(24), sm: rem(28) }}
            lh={1.1}
            mb="xl"
            maw={{ base: "80%", sm: "60%" }}
          >
            Maringatech – Maringá/PR
          </Text>
          <Text
            px={{ base: "md", sm: "0" }}
            fz={{ base: rem(24), sm: rem(28) }}
            lh={1.1}
            mb="xl"
            maw={{ base: "80%", sm: "60%" }}
          >
            29 de setembro a 03 de outubro de 2025
          </Text>
          <CtaButton>Faça sua inscrição</CtaButton>
        </Stack>
      </Box>

      <Stack align="center" style={{ zIndex: 1 }} p="sm" gap="xs">
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
        >
          A **EXPOTECH Maringá 2025** é o maior encontro de ciência, tecnologia
          e inovação da região, promovendo a integração entre universidades,
          setor produtivo e sociedade.
        </Text>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
        >
          Inspirada na histórica FEITECH 2013, que impulsionou a cultura de
          inovação em Maringá, a EXPOTECH chega com uma proposta moderna e
          interativa, alinhada à Transformação Digital e ao desenvolvimento
          sustentável do Paraná.
        </Text>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
        >
          Durante cinco dias, o Maringatech se transforma em um hub aberto de
          conhecimento, negócios e conexões estratégicas, aproximando
          pesquisadores, empresas, investidores e a comunidade.{" "}
        </Text>
        <CtaButton>Faça sua inscrição</CtaButton>
      </Stack>
    </Section>
  );
}
