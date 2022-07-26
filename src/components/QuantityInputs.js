// borrowed from https://github.com/mantinedev/ui.mantine.dev/blob/master/components/QuantityInput/QuantityInput.tsx
import React, { useRef, useState } from "react";
import { createStyles, NumberInput, ActionIcon } from "@mantine/core";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,

    "&:focus-within": {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,

    "&:disabled": {
      borderColor:
        theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: "transparent",
    },
  },

  input: {
    textAlign: "center",
    paddingRight: `${theme.spacing.sm}px !important`,
    paddingLeft: `${theme.spacing.sm}px !important`,
    height: 28,
    flex: 1,
  },
}));

const QuantityInputs = ({
  min = 1,
  max = 10,
  onValueChange,
  startingValue,
}) => {
  const { classes } = useStyles();
  const handlers = useRef();
  const [value, setValue] = useState(startingValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current.decrement()}
        disabled={value === min}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <RemoveIcon size={16} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        onChange={(v) => handleChange(v)}
        classNames={{ input: classes.input }}
      />

      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current.increment()}
        disabled={value === max}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <AddIcon size={16} />
      </ActionIcon>
    </div>
  );
};
export default QuantityInputs;
