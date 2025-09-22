import { Button } from '@mantine/core';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  children: ReactNode;
};

export function CtaButton({ children }: CtaButtonProps) {
  return (
    <Button
      bg="#6DB2E3"
      c="#021630"
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