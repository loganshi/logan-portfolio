import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

export default function NotFound() {
  return <main id="conteudo" className="not-found shell"><span>404 / CAMINHO NÃO ENCONTRADO</span><h1>Essa rota saiu<br />do mapa.</h1><p>A página pode ter mudado de endereço. Volte ao início para continuar explorando.</p><Link className="button-primary" href="/">Voltar ao início <ArrowUpRight /></Link></main>;
}
