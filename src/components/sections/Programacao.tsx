"use client";

import "@mantine/carousel/styles.css";

import { Box, rem, Stack, Text, Title } from "@mantine/core";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "../Section";

export default function Programacao() {
  return (
    <Section id="programacao">
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
            px={{ base: "xl", sm: "0" }}
            fz={{ base: rem(42), sm: rem(56) }}
            fw={700}
            lts={-1}
            lh={1}
            mb="sm"
            maw={{ base: "100%", sm: "70%" }}
            c="#6DB2E3"
          >
            Programação Principal
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "#FFFFFF",
            }}
          >
            29 de setembro a 03 de outubro (segunda-feira a sexta-feira)
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "#EAEAEA",
            }}
          >
            Abertura oficial - 10h00 Exposição de Patentes da UEM – 10h00 às
            16h00 Descubra as inovações mais disruptivas desenvolvidas por
            professores e alunos da Universidade Estadual de Maringá. A mostra
            inclui patentes já registradas e em processo, abertas à visitação de
            toda a comunidade.
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            29 de setembro a 03 de outubro (quarta-feira)
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Maringatech Aberto – 10h00 às 16h00 O parque tecnológico abre suas
            portas para visitação. São 51 empresas de base tecnológica
            apresentando seus negócios, produtos e soluções, gerando networking
            e interação direta com a comunidade. Entrada gratuita.
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            30 de setembro (terça-feira)
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Momento Integração Universidade-Empresa – 08h00 às 11h00 Encontro
            que aproxima inventores e empresários. Proprietários de patentes
            apresentam seus projetos, fomentando oportunidades de transferência
            de tecnologia e parcerias estratégicas.
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Atividades Paralelas
          </Text>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "white",
            }}
          >
            -Visitas guiada de alunos de universidades, escolas municipais e
            estaduais (com agendamento prévio). eventos@maringatech.org.br
            -Inova Week Maringá – Semana de inovação da cidade, com workshops e
            palestras que acontecerão simultaneamente no Maringatech.
            https://biomadeinovacaodemaringa.com.br
          </Text>
          <Box>
            <CtaButton>Quero fazer minha inscrição</CtaButton>
          </Box>
        </Stack>
      </Box>
    </Section>
  );
}
