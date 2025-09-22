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
            Quem pode participar?
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
            * Estudantes de ensino médio e superior * Pesquisadores e
            professores * Startups e empresas de base tecnológica * Investidores
            e aceleradoras * Comunidade apaixonada por ciência, tecnologia e
            empreendedorismo
          </Text>
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
            O que esperamos?
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
            ✔️ Participantes engajados ✔️ Novas conexões entre universidade e
            empresas ✔️Presença da comunidade ✔️ Oportunidades de investimento
            para startups ✔️ Disseminação da cultura de inovação no Paraná
          </Text>
          <Box>
            <CtaButton>Quero fazer minha inscrição</CtaButton>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}
