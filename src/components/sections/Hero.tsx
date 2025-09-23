"use client";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import { Box, Stack, Text, Title, rem } from "@mantine/core";

export default function Hero() {
  return (
    <Section id="home">
      <Box
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
        mih={{ base: "70vh", md: "768px" }}
        mah={{ base: "auto", md: "1000px" }}
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
            c="#6DB2E3"
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
    </Section>
  );
}