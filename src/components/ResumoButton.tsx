import {
  Button,
  ButtonProps,
  createPolymorphicComponent,
  ElementProps,
  MantineColor,
} from "@mantine/core";
import { forwardRef } from "react";

type ResumoButtonProps = {
  bg?: MantineColor;
  c?: MantineColor;
} & ButtonProps &
  ElementProps<"button">;

const _ResumoButton = forwardRef<HTMLButtonElement, ResumoButtonProps>(
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

_ResumoButton.displayName = "ResumoButton";

export const ResumoButton = createPolymorphicComponent<"button", ResumoButtonProps>(
  _ResumoButton
);
