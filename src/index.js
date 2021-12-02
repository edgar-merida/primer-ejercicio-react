import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './botones';





ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
    <Example />
  </StyledEngineProvider>,
  document.querySelector("#root")
);

