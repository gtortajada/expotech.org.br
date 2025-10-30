"use client";

import { ResumoButton } from "@/components/ResumoButton";
import { CtaButton } from "../CtaButton";
import { Section } from "@/components/Section";
import {
  Anchor,
  Box,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";

const PDF_PATH = "/pdf/resumo-evento-2025.pdf";
const PDF_FILENAME = "resumo-expotech-2025.pdf";

export default function Hero() {
  return (
    <Section id="home">
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        mih={{ base: "90vh", md: "100vh" }}
      >
        <Stack align="center" p="sm" gap="xl">
          <Box w={{ base: 288, md: 600 }} mb="md" mx="auto" pt="md">
            <Image src="/images/logoExpotech.svg" alt="Logo Expotech" />
          </Box>

          <Title
            order={2}
            fz={{ base: rem(24), md: rem(46) }}
            fw={700}
            maw={{ base: "90%", md: "60%" }}
            c="#6DB2E3"
          >
            Onde a ciência, tecnologia e inovação se encontram.
          </Title>

          <Stack gap="xs">
            <Text c="white" fz={{ base: rem(18), md: rem(22) }}>
              <strong>Local:</strong> Maringatech - Maringá/PR
            </Text>
            <Text c="white" fz={{ base: rem(18), md: rem(22) }}>
              <strong>Data:</strong> 29 de setembro a 03 de outubro de 2025
            </Text>
          </Stack>

          <CtaButton>Inscrições encerradas</CtaButton>

          <ResumoButton
            component="a"
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver resumo do evento
          </ResumoButton>

          <Text c="dimmed" size="lg">
            <Anchor href={PDF_PATH} download={PDF_FILENAME} inherit>
              Para fazer o download do resumo do nosso evento, clique aqui.
            </Anchor>
          </Text>

          <Stack align="center" gap="sm">
            <Text fz={{ base: rem(16), md: rem(18) }} c="dimmed">
              Realização:
            </Text>

            <Grid align="center" justify="center" gutter="md" w="100%">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Group justify="center">
                  <Image
                    src="/images/logoMaringaTech.svg"
                    alt="Logo Maringatech"
                    w={{ base: 238, md: "auto" }}
                    h="auto"
                    maw={400}
                    fit="contain"
                  />
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Group justify="center" gap="lg">
                  <Image
                    src="/images/logoParana.svg"
                    alt="Logo Governo do Paraná"
                    w={{ base: 99, md: 150 }}
                    h="auto"
                    fit="contain"
                  />
                  <Image
                    src="/images/logoFundacaoAraucaria.svg"
                    alt="Logo Fundação Araucária"
                    w={{ base: 93, md: 140 }}
                    h="auto"
                    fit="contain"
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </Section>
  );
}
