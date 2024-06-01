import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div>
      <Header />

      {/* é um espaco para ser inserido com conteudo */}
      Conteudo
      <Outlet />
    </div>
  )
}