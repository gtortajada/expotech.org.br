"use client";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import {
  Anchor,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import React from "react";

function ProgramacaoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack ta="center" gap="sm">
      <Text fz={{ base: rem(22), sm: rem(32) }} fw={600} c="white" lh={1.1}>
        {title}
      </Text>
      <Text c="gray.3" fz={{ base: rem(16), sm: rem(24) }} lh={1.4}>
        {children}
      </Text>
    </Stack>
  );
}

export default function Programacao() {
  return (
    <Section id="programacao">
      <Container size="lg">
        <Stack gap="xl" align="center">
          <Title
            order={2}
            px={{ base: "xl", sm: "0" }}
            fz={{ base: rem(42), sm: rem(56) }}
            fw={700}
            lts={-1}
            lh={1}
            maw={{ base: "100%", sm: "70%" }}
            c="#6DB2E3"
            ta="center"
          >
            Programação Principal
          </Title>

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: "xl", md: "3rem" }}
            verticalSpacing={{ base: "xl", md: "3rem" }}
          >
            <ProgramacaoCard title="29 de setembro a 03 de outubro">
              Abertura oficial - 10h00. Exposição de Patentes da UEM – 10h00 às
              16h00. Descubra as inovações mais disruptivas desenvolvidas por
              professores e alunos da Universidade Estadual de Maringá.
            </ProgramacaoCard>

            <ProgramacaoCard title="30 de setembro">
              Momento Integração Universidade-Empresa – 08h00 às 11h00. Encontro
              que aproxima inventores e empresários, fomentando oportunidades de
              transferência de tecnologia e parcerias estratégicas.
            </ProgramacaoCard>

            <ProgramacaoCard title="01 de outubro">
              Maringatech Aberto – 10h00 às 16h00. O parque tecnológico abre
              suas portas para visitação, com 51 empresas de base tecnológica
              apresentando seus negócios e soluções. Entrada gratuita.
            </ProgramacaoCard>

            <ProgramacaoCard title="Mulheraço na Expotech">
              Talk Show: “Elas Fazem e Acontecem na Tecnologia” – Dia 01/10, das
              17h às 19h. Um bate-papo inspirador no Parque Tecnológico
              MaringaTech sobre inovação, gestão e negócios com quatro mulheres
              que estão fazendo a diferença com inovação e tecnologia.
            </ProgramacaoCard>

            <ProgramacaoCard title="Atividades Paralelas">
              Visitas guiadas para alunos (agendamento em{" "}
              <Anchor
                href="mailto:eventos@maringatech.org.br"
                target="_blank"
                inherit
              >
                eventos@maringatech.org.br
              </Anchor>
              ) e a Inova Week Maringá, com workshops e palestras simultâneas.
              Mais em{" "}
              <Anchor
                href="https://biomadeinovacaodemaringa.com.br"
                target="_blank"
                inherit
              >
                biomadeinovacaodemaringa.com.br
              </Anchor>
            </ProgramacaoCard>
            <ProgramacaoCard title="Programação em movimento">
              No nosso Instagram dividimos bastidores, atualizações em tempo
              real e detalhes especiais que fazem a diferença. É onde
              construímos uma conexão próxima, compartilhando curiosidades e
              preparativos únicos. Venha fazer parte dessa conversa!{" "}
              <Anchor
                href="https://www.instagram.com/maringatech/"
                target="_blank"
                inherit
              >
                @maringatech
              </Anchor>
            </ProgramacaoCard>
          </SimpleGrid>

          <CtaButton>Quero garantir minha vaga</CtaButton>
        </Stack>
      </Container>
    </Section>
  );
}
