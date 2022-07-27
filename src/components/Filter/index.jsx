import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function Filter({ SetProductsFilter }) {
  const { control, handleSubmit } = useForm();
  const { tickets } = useSelector((state) => state.tickets);
  const handleFiltered = (data) => {
    const FilteredInput = tickets.filter(
      (item) =>
        item.title.toLowerCase().includes(data.filter.toLowerCase()) ||
        item.category.toLowerCase().includes(data.filter.toLowerCase())
    );
    SetProductsFilter(FilteredInput);
  };

  return (
    <Box
      onSubmit={handleSubmit(handleFiltered)}
      component="form"
      sx={{ mt: 1, maxWidth: "600px", display: "flex" }}
    >
      <Controller
        name="filter"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            margin="normal"
            id="filter"
            label="Procure aqui"
            autoFocus
            sx={{ mt: 2, background: "#fff", height: 48 }}
          />
        )}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2, background: "#fd377e" }}
      >
        Pesquisar
      </Button>
    </Box>
  );
}

export default Filter;
