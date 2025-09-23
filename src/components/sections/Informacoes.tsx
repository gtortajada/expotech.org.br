// Arquivo: src/app/Informacoes.tsx
"use client";

// 1. Imports necessários para os novos componentes e ícones
import { CtaButton } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import {
  Container,
  List,
  Stack,
  ThemeIcon,
  Title,
  rem
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react"; // Um pacote de ícones popular para usar com Mantine

export default function Informacoes() {
  return (
    <Section id="informacoes">
      <Container size="lg">
        <Stack gap="xl" align="center">
          <Title
            order={2}
            fz={{ base: rem(36), sm: rem(48) }}
            fw={700}
            lts={-1}
            lh={1.1}
            c="#6DB2E3"
            ta="center"
          >
            Quem pode participar?
          </Title>
          <List
            spacing="xs"
            size="lg"
            center
            c="white"
            fz={{ base: rem(20), sm: rem(20) }}
            lh={1.4}
          >
            <List.Item>Estudantes de ensino médio e superior</List.Item>
            <List.Item>Pesquisadores e professores</List.Item>
            <List.Item>Startups e empresas de base tecnológica</List.Item>
            <List.Item>Investidores e aceleradoras</List.Item>
            <List.Item>
              Comunidade apaixonada por ciência, tecnologia e empreendedorismo
            </List.Item>
          </List>

          <Title
            order={2}
            fz={{ base: rem(36), sm: rem(48) }}
            fw={700}
            lts={-1}
            lh={1.1}
            c="#6DB2E3"
            ta="center"
          >
            O que esperamos?
          </Title>

          <List
            spacing="xs"
            size="lg"
            center
            c="white"
            fz={{ base: rem(20), sm: rem(20) }}
            lh={1.4}
            icon={
              <ThemeIcon color="green" size={20} radius="xl">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>Participantes engajados</List.Item>
            <List.Item>Novas conexões entre universidade e empresas</List.Item>
            <List.Item>Presença da comunidade</List.Item>
            <List.Item>Oportunidades de investimento para startups</List.Item>
            <List.Item>Disseminação da cultura de inovação no Paraná</List.Item>
          </List>

          <CtaButton>Quero fazer minha inscrição</CtaButton>
        </Stack>
      </Container>
    </Section>
  );
}
