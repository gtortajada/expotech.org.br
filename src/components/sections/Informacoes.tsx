"use client";

import "@mantine/carousel/styles.css";
import { Box, Stack, Text, Title } from "@mantine/core";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "../Section";

export default function Informacoes() {
  return (
    <Section id="informacoes">
      <Box
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
        mih={{ base: "100vh", md: "768px" }}
        mah={{ base: "auto", md: "1000px" }}
      >
        <Stack gap="xs" align="center">
          <Title
            order={1}
            size="h1"
            ta="center"
            c="#6DB2E3"
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            Quem pode participar?
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            * Estudantes de ensino médio e superior * Pesquisadores e
            professores * Startups e empresas de base tecnológica * Investidores
            e aceleradoras * Comunidade apaixonada por ciência, tecnologia e
            empreendedorismo
          </Text>
          <Title
            order={1}
            size="h1"
            ta="center"
            c="#6DB2E3"
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            O que esperamos?
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            ✔️ Participantes engajados ✔️ Novas conexões entre universidade e
            empresas ✔️Presença da comunidade ✔️ Oportunidades de investimento
            para startups ✔️ Disseminação da cultura de inovação no Paraná
          </Text>
          <Box>
            <CtaButton>Quero fazer minha inscrição</CtaButton>
          </Box>
        </Stack>
      </Box>
    </Section>
  );
}
