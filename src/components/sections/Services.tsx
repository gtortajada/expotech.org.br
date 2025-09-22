"use client";

import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Container,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "../Section";

export default function ServicesSection() {
  return (
    <Section id="services" bg="#ffffff">
      <Container size="lg">
        <Stack gap="xs" align="center">
          <Title
            order={1}
            size="h1"
            ta="center"
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.2,
              color: "#0161DF",
            }}
          >
            Programação Principal
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "black",
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
              color: "black",
            }}
          >
            Abertura oficial – 10h00 Exposição de Patentes da UEM – 10h00 às
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
              color: "black",
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
              color: "black",
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
              color: "black",
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
              color: "black",
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
              color: "black",
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
              color: "black",
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
      </Container>
    </Section>
  );
}
