import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      {/* é um espaco para ser inserido com conteudo */}
      <Outlet />
    </LayoutContainer>
  )
}