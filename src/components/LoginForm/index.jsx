import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { singInThunk } from "../../store/modules/users/thunck";
import { getAllTicketsThunk } from "../../store/modules/tickets/thunks";

const LoginForm = () => {
  const { token } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const handlePasswordVisibility = () => {
    setHide(!hide);
  };

  const schema = yup.object().shape({
    login: yup.string().required("Email/Username obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    dispatch(singInThunk(data));
    dispatch(getAllTicketsThunk());

    if (token) {
      history.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="xs" sx={{ mb: 5 }}>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="login"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin="normal"
              id="login"
              label="Email/Username"
              helperText={errors.login?.message}
              error={!!errors.login?.message}
            />
          )}
        />
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

        <Grid item sx={{ mb: 5, mt: 2 }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ ":disabled": { background: "#333333", color: "white" } }}
          >
            {loading ? "carregando" : "entrar"}
          </Button>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <NavLink
              to="/signup"
              style={{ position: "relative", zIndex: "1000" }}
            >
              Primeira vez aqui? Cadastre-se
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginForm;
