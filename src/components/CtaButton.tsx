import { Button, MantineColor } from '@mantine/core';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

type CtaButtonProps = {
  children: ReactNode;
  bg?: MantineColor;
  c?: MantineColor;
} & ComponentPropsWithoutRef<typeof Button>;

export function CtaButton({ children, bg = "#6DB2E3", c = "#021630", ...props }: CtaButtonProps) {
  return (
    <Button
      bg={bg}
      c={c}
      radius="sm"
      size="lg"
      fw={600}
      px="xl"
      {...props}
    >
      {children}
    </Button>
  );
}