"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { District, Province } from "@/types/address";

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

type OptionType = Province | District;

interface IAsyncSelect {
  id: string;
  label: string;
  getData: () => any;
  onChange: (value: any) => void;
  isOptionEqualToValue: (option: any, value: any) => boolean;
  getOptionLabel: (option: any) => string;
  name?: string;
  disabled?: boolean;
}

const AsyncSelect: React.FC<IAsyncSelect> = ({
  id,
  label,
  getData,
  onChange,
  isOptionEqualToValue,
  getOptionLabel,
  name = "",
  disabled = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1000);

      if (active) {
        const data = await getData();
        setOptions(data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      disabled={disabled}
      id={id}
      sx={{ width: "100%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        isOptionEqualToValue(option, value)
      }
      getOptionLabel={(option) => {
        return getOptionLabel(option);
      }}
      options={options}
      loading={loading}
      onChange={(event, value) => onChange(value)}
      renderInput={(params) => (
        <TextField
          name={name}
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AsyncSelect;
