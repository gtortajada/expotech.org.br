"use client";

import { ResumoButton } from "@/components/ResumoButton";
import { Section } from "@/components/Section";
import { Anchor, Stack, Text, Title, rem } from "@mantine/core";

const PDF_PATH = "/pdf/resumo-evento-2025.pdf";
const PDF_FILENAME = "resumo-expotech-2025.pdf";

export default function Resumo() {
  return (
    <Section id="resumo">
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
          Resumo do evento
        </Title>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
          c="white"
        >
          A <strong>Expotech 2025</strong> consolidou-se como um grande marco no
          calendário de inovação de Maringá e do Paraná. Realizada de 29 de
          setembro a 03 de outubro, dentro da Semana Municipal de Inovação e em
          paralelo à InovaWeek 2025.
        </Text>
        <Text
          px={{ base: "md", sm: "0" }}
          fz={{ base: rem(24), sm: rem(28) }}
          lh={1.1}
          mb="xl"
          maw={{ base: "80%", sm: "60%" }}
          c="white"
        >
          Ao longo de cinco dias, o público teve acesso a uma agenda plural e
          envolvente, que incluiu a <strong>Exposição de 30 Patentes da Universidade
          Estadual de Maringá (UEM)</strong>, o Momento Integração Universidade–Empresa,
          que aproximou empresas juniores da UEM das empresas residentes do
          Maringatech.
        </Text>

        <ResumoButton
          component="a"
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver resumo do evento
        </ResumoButton>

        <Text c="dimmed" size="lg" pt="lg">
          <Anchor href={PDF_PATH} download={PDF_FILENAME} inherit>
            Para fazer o download do resumo do nosso evento, clique aqui.
          </Anchor>
        </Text>
      </Stack>
    </Section>
  );
}
