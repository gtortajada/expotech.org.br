import {
  Button,
  ButtonProps,
  createPolymorphicComponent,
  ElementProps,
  MantineColor,
} from "@mantine/core";
import { forwardRef } from "react";

type CtaButtonProps = {
  bg?: MantineColor;
  c?: MantineColor;
} & ButtonProps &
  ElementProps<"button">;

const _CtaButton = forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ children, bg = "#6DB2E3", c = "#021630", ...others }, ref) => {
    return (
      <Button
        ref={ref}
        bg={bg}
        c={c}
        radius="sm"
        size="lg"
        fw={600}
        px="xl"
        {...others}
      >
        {children}
      </Button>
    );
  }
);

_CtaButton.displayName = "CtaButton";

export const CtaButton = createPolymorphicComponent<"button", CtaButtonProps>(
  _CtaButton
);
