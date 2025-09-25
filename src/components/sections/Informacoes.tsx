"use client";

import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import {
  Container,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";

function ListIcon() {
  return (
    <Image
      src="/images/xIcon.svg"
      alt="Ícone de marcação do item da lista"
      width={14}
      height={14}
    />
  );
}

export default function Informacoes() {
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

  return (
    <Section id="informacoes">
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
            Informações
          </Title>

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: "xl", md: "2rem" }}
            verticalSpacing={{ base: "xl", md: "1rem" }}
          >
            <ProgramacaoCard title="Quem pode participar?">
              <List
                spacing="xs"
                size="lg"
                center
                c="white"
                fz={{ base: rem(20), sm: rem(20) }}
                lh={1.4}
                ta="left"
                pl={{ base: "0.5rem", md: "3rem" }}
                icon={<ListIcon />}
              >
                <List.Item>Estudantes de ensino médio e superior</List.Item>
                <List.Item>Pesquisadores e professores</List.Item>
                <List.Item>Startups e empresas de base tecnológica</List.Item>
                <List.Item>Investidores e aceleradoras</List.Item>
                <List.Item>
                  Apaixonados por ciência, tecnologia e empreendedorismo
                </List.Item>
              </List>
            </ProgramacaoCard>
            <ProgramacaoCard title="O que esperamos?">
              <List
                spacing="xs"
                size="lg"
                center
                c="white"
                fz={{ base: rem(20), sm: rem(20) }}
                lh={1.4}
                ta="left"
                pl={{ base: "0.5rem", md: "5rem" }}
                icon={<ListIcon />}
              >
                <List.Item>Participantes engajados</List.Item>
                <List.Item>
                  Novas conexões entre universidade e empresas
                </List.Item>
                <List.Item>Presença da comunidade</List.Item>
                <List.Item>
                  Oportunidades de investimento para startups
                </List.Item>
                <List.Item>
                  Disseminação da cultura de inovação no Paraná
                </List.Item>
              </List>
            </ProgramacaoCard>

            <Title
              order={2}
              fz={{ base: rem(36), sm: rem(48) }}
              fw={700}
              lts={-1}
              lh={1.1}
              c="#6DB2E3"
              ta="center"
            ></Title>
          </SimpleGrid>
          <CtaButton>Quero fazer minha inscrição</CtaButton>
        </Stack>
      </Container>
    </Section>
  );
}
