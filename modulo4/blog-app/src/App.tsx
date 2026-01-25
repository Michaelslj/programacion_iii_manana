import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>{routes}</>;
}


/*import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";
import TestMUI from "./lab/TestMUI";
import BasicButtons from "./lab/BasicButtons";
import ColorSwitches from "./lab/ColorSwitches";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>
    <TestMUI/>
    <BasicButtons/>
    <ColorSwitches/>
    <BasicTable/>  
  </>;
}*/