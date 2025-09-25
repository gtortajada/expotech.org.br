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
      <Text fz={{ base: rem(22), sm: rem(24) }} fw={600} c="white" lh={1.1}>
        {title}
      </Text>
      <Text c="gray.3" fz={{ base: rem(16), sm: rem(20) }} lh={1.4}>
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
              <strong>Abertura oficial</strong> - 10h00. Exposição de Patentes
              da UEM – 10h00 às 16h00. <strong>Descubra as inovações</strong>{" "}
              mais disruptivas desenvolvidas por professores e alunos da
              Universidade Estadual de Maringá.
            </ProgramacaoCard>

            <ProgramacaoCard title="30 de setembro">
              <strong>Momento Integração Universidade - Empresa</strong> – 08h00
              às 11h00. Encontro que aproxima inventores e empresários,
              fomentando{" "}
              <strong>
                oportunidades de transferência de tecnologia e parcerias
                estratégicas
              </strong>
              .
            </ProgramacaoCard>

            <ProgramacaoCard title="01 de outubro">
              Maringatech Aberto – 10h00 às 16h00.{" "}
              <strong>O parque tecnológico abre suas portas</strong> para
              visitação, com 51 empresas de base tecnológica apresentando seus
              negócios e soluções. <br />
              <strong>Entrada gratuita.</strong>
            </ProgramacaoCard>

            <ProgramacaoCard title="Mulheraço na Expotech">
              Talk Show: <strong>“Elas Fazem e Acontecem na Tecnologia”</strong>{" "}
              – Dia 01/10, das 17h às 19h. Um bate-papo inspirador sobre{" "}
              <strong>inovação, gestão e negócios</strong> com quatro mulheres
              que estão fazendo a diferença com inovação e tecnologia.
              <br />
              <Anchor
                href="https://www.sympla.com.br/evento/mulheraco-na-expotech-2025/3138538"
                target="_blank"
                inherit
              >
                Faça sua inscrição aqui
              </Anchor>
            </ProgramacaoCard>

            <ProgramacaoCard title="Atividades Paralelas">
              <strong>Visitas guiadas para alunos</strong> (agendamento em{" "}
              <Anchor
                href="mailto:eventos@maringatech.org.br"
                target="_blank"
                inherit
              >
                eventos@maringatech.org.br
              </Anchor>
              ) e a <strong>Inova Week Maringá</strong>, com workshops e palestras simultâneas.
              <br />
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
              No nosso Instagram <strong>dividimos bastidores, atualizações em tempo
              real e detalhes especiais</strong> que fazem a diferença. É onde
              construímos uma conexão próxima, compartilhando curiosidades e
              preparativos únicos. <br/><strong>Venha fazer parte dessa conversa!</strong>{" "}
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
