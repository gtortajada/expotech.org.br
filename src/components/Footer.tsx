"use client";

import GlobalIcon from "@/assets/globalAzul.svg";
import InstagramIcon from "@/assets/instagramAzul.svg";
import LinkedinIcon from "@/assets/linkedinAzul.svg";
import { scrollToSection, SectionId, sections } from "@/config/sections";
import {
  ActionIcon,
  Anchor,
  Box,
  Center,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";

export function Footer() {
  const colors = {
    titles: "#6DB2E3",
    footerBg: "#181818",
    copyrightBg: "#808285",
    text: "#FFFFFF",
    links: "#FFFFFF",
    divider: "#808285",
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const siteMapItems = sections.map((section) => (
    <Anchor
      key={section.label}
      href={"#" + section.id}
      c={colors.links}
      onClick={(event) => handleLinkClick(event, section.id)}
    >
      {section.label}
    </Anchor>
  ));

  return (
    <Box component="footer" bg={colors.footerBg} c={colors.text}>
      <Container size="sm" py="xs">
        <Group
          justify="center"
          align="center"
          gap="xs"
          style={(theme) => ({
            [`@media (maxWidth: ${theme.breakpoints.md})`]: {
              flexDirection: "column",
              gap: theme.spacing.xl,
            },
          })}
        >
          <Box
            my="sm"
            w={{ base: "70%", md: 300 }}
            h={60}
            style={{ position: "relative" }}
          >
            <Image
              src="/images/logoExpotech.svg"
              alt="Logo Expotech"
              fill
              priority
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              sizes="70vw"
            />
          </Box>
          <Stack
            align="center"
            gap="xs"
            style={(theme) => ({
              textAlign: "center",
              [`@media (minWidth: ${theme.breakpoints.md})`]: {
                alignItems: "flex-end",
                textAlign: "left",
              },
            })}
          >
            <Text ta="center" fz="sm">
              Av. Centenário, 116 - Vila Christino, Maringá, Paraná.
            </Text>
          </Stack>
        </Group>

        <Center>
          <Divider
            my="xs"
            color={colors.divider}
            w={{ base: "80%", md: "100%" }}
          />
        </Center>

        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={{ base: "xl", md: "lg" }}
          verticalSpacing="xs"
        >
          <Stack
            gap={1}
            align="center"
            style={(theme) => ({
              textAlign: "center",
              [`@media (minWidth: ${theme.breakpoints.md})`]: {
                alignItems: "flex-start",
                justifyContent: "center",
                height: "100%",
                textAlign: "left",
              },
            })}
          >
            <Group gap={1}>
              <ActionIcon variant="transparent" c={colors.links}>
                <Image
                  src={InstagramIcon}
                  alt="Ícone do Instagram"
                  width={20}
                  height={20}
                />
              </ActionIcon>
              <Anchor
                href="https://www.instagram.com/maringatech/"
                target="_blank"
                rel="noopener noreferrer"
                c={colors.links}
              >
                @maringatech
              </Anchor>
            </Group>
            <Group gap={1}>
              <ActionIcon variant="transparent" c={colors.links}>
                <Image
                  src={GlobalIcon}
                  alt="Ícone do Site"
                  width={20}
                  height={20}
                />
              </ActionIcon>
              <Anchor
                href="https://maringatech.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                c={colors.links}
              >
                maringatech.org.br
              </Anchor>
            </Group>
            <Group gap={1}>
              <ActionIcon variant="transparent" c={colors.links}>
                <Image
                  src={LinkedinIcon}
                  alt="Ícone do Linkedin"
                  width={20}
                  height={20}
                />
              </ActionIcon>
              <Anchor
                href="https://www.linkedin.com/company/incubadora-tecnol-gica-de-maring-/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                c={colors.links}
              >
                Parque Tecnológico Maringatech
              </Anchor>
            </Group>
          </Stack>

          <Divider color={colors.divider} hiddenFrom="md" w="40%" mx="auto" />

          <Stack
            gap={1}
            align="center"
            style={(theme) => ({
              textAlign: "center",
              [`@media (minWidth: ${theme.breakpoints.md})`]: {
                alignItems: "flex-start",
                textAlign: "left",
              },
            })}
          >
            {siteMapItems}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box bg={colors.copyrightBg} c={colors.text} py="sm">
        <Container size="lg">
          <Stack align="center" gap={5}>
            <Text size="sm" ta="center">
              Copyrights © 2025. Todos os direitos reservados Maringá Tech.
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
