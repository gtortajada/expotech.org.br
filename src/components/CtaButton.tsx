import { Button, MantineColor } from '@mantine/core';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  children: ReactNode;
  bg?: MantineColor;
  c?: MantineColor;
};

export function CtaButton({ children, bg = "#6DB2E3", c = "#021630" }: CtaButtonProps) {
  return (
    <Button
      bg={bg}
      c={c}
      radius="sm"
      size="lg"
      fw={600}
      px="xl"
      onClick={() => window.open("https://forms.gle/miLcS56cGvkvQU7Z8", "_blank")}
    >
      {children}
    </Button>
  );
}