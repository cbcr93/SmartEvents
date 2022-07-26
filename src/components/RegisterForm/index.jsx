import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../store/modules/users/thunck";

function RegisterForm() {
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(5, "minimo 5 caracteres")
      .max(50, "maximo 50 caracteres")
      .required("Nome de usuário obrigatório"),
    name: yup
      .string()
      .min(5, "minimo 5 caracteres")
      .max(50, "maximo 50 caracteres")
      .required("Nome obrigatório")
      .matches(/^[a-zA-Z\s]*$/, "O nome deve conter apenas letras"),
    email: yup
      .string()
      .email("digite um email válido")
      .required("Campo obrigatório"),
    confirm_email: yup
      .string()
      .oneOf([yup.ref("email")], "email diferentes")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(/(?=^.{8,}$)/, "Deve conter no mínimo, 8 caracteres")
      .matches(/((?=.*\d))/, "Deve conter no mínimo, 1 número")
      .matches(/(?=.*[A-Z])/, "Deve conter no mínimo, 1 letra maiúscula")
      .matches(/(?=.*[a-z])/, "Deve conter no mínimo, 1 letra minúscula")
      .matches(
        /(?=.*[@$!%*#?&])/,
        "Deve conter no mínimo, 1 caractere especial"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirmação obrigatória"),
    isSeller: yup.bool(),
  });

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [hide, setHide] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setHide(!hide);
  };

  const handleConfirmPasswordVisibility = () => {
    setHideConfirmPassword(!hideConfirmPassword);
  };

  const handleSignup = (data) => {
    delete data.confirm_password;
    delete data.confirm_email;
    dispatch(registerThunk(data));
  };

  return (
    <Container
      component="main"
      sx={{
        minWidth: "300px",
        mr: "10px",
        ml: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar sx={{ m: "1", bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h4">
          Signup
        </Typography>
        <Box
          onSubmit={handleSubmit(handleSignup)}
          component="form"
          sx={{ mt: 1, minWidth: "300px", maxWidth: "600px" }}
        >
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin="normal"
                id="username"
                label="Nome do Usuário"
                autoFocus
                helperText={errors.username?.message}
                error={!!errors.username?.message}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin="normal"
                id="nomeCompleto"
                label="Nome Completo"
                autoFocus
                helperText={errors.name?.message}
                error={!!errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin="normal"
                id="email"
                label="Email"
                helperText={errors.email?.message}
                error={!!errors.email?.message}
              />
            )}
          />
          <Controller
            name="confirm_email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin="normal"
                id="confirm_email"
                label="Confirme seu email"
                helperText={errors.email?.message}
                error={!!errors.email?.message}
              />
            )}
          />
          <span>
            Sua senha deve conter pelo menos: 8 caracteres, uma letra maiúscula,
            uma minúscula, um número e um caractere especial.
          </span>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin="normal"
                id="password"
                label="Senha"
                type={!hide ? "password" : "text"}
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handlePasswordVisibility}
                    >
                      {hide ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin="normal"
                id="confirm_password"
                label="Confirmar Senha"
                type={!hideConfirmPassword ? "password" : "text"}
                helperText={errors.confirm_password?.message}
                error={!!errors.confirm_password?.message}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleConfirmPasswordVisibility}
                    >
                      {hideConfirmPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="isSeller"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                label="Tipo de usário"
                select
                margin="normal"
                required
                defaultValue=""
                {...field}
                helperText={errors.isSeller?.message}
                error={!!errors.isSeller?.message}
                sx={{
                  textOverflow: "ellipsis",
                  width: "100%",
                }}
              >
                <MenuItem value={false}>Usário</MenuItem>
                <MenuItem value={true}>Vendedor</MenuItem>
              </TextField>
            )}
          />

          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Cadastrar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/">Já tem cadastro? Fazer login</NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterForm;
