import React from 'react';

import {
  Container,
  Box,
  Info,
  SvgBox,
  ArtSVG,
  Title,
  SvgDash,
  BoxDash,
} from './styles';

export default function Login() {
  return (
    <Container>
      <Box>
        <h2>Acessar Dashboard</h2>
        <h4>Insira suas credenciais</h4>
        <form>
          <input placeholder="Login" />
          <input placeholder="Senha" type="password" />
        </form>
        <button type="submit">Enviar</button>
      </Box>
      <Info>
        <Title>
          <h1>Bem vindo</h1>
          <h3>Crie, Edite e Personalize</h3>
        </Title>

        <BoxDash>
          <SvgDash />
        </BoxDash>
      </Info>
    </Container>
  );
}
