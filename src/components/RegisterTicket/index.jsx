import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { createTicketThunk } from "../../store/modules/users/thunck";

function RegisterTicket() {
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(5, "minimo 5 caracteres")
      .max(50, "maximo 50 caracteres")
      .required("Campo obrigatório"),
    description: yup
      .string()
      .min(5, "minimo 5 caracteres")
      .max(250, "maximo 250 caracteres")
      .required("Campo obrigatório"),
    category: yup
      .string()
      .min(5, "minimo 5 caracteres")
      .max(50, "maximo 50 caracteres")
      .required("Campo obrigatório"),
    amounts: yup.number().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
  });

  const dispatch = useDispatch();
  const { token, userId } = useSelector((store) => store.user);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleTicket = (data) => {
    dispatch(createTicketThunk(data, token, userId));
  };

  return (
    <Box
      sx={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography component="h2" variant="h4">
        Registro de Ticket
      </Typography>
      <Box
        onSubmit={handleSubmit(handleTicket)}
        component="form"
        sx={{ mt: 1, minWidth: "300px", maxWidth: "600px" }}
      >
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin="normal"
              id="title"
              label="Titulo"
              autoFocus
              helperText={errors.title?.message}
              error={!!errors.title?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin="normal"
              id="description"
              label="Desctrição"
              autoFocus
              helperText={errors.description?.message}
              error={!!errors.description?.message}
            />
          )}
        />
        <Controller
          name="category"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin="normal"
              id="category"
              label="Categoria"
              autoFocus
              helperText={errors.category?.message}
              error={!!errors.category?.message}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin="normal"
              id="price"
              type="number"
              label="Preço"
              autoFocus
              helperText={errors.price?.message}
              error={!!errors.price?.message}
            />
          )}
        />
        <Controller
          name="amounts"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              type="number"
              margin="normal"
              id="amounts"
              label="Quantidade a venda"
              autoFocus
              helperText={errors.amounts?.message}
              error={!!errors.amounts?.message}
            />
          )}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterTicket;
