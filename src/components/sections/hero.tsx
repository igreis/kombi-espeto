import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"

import logo from '../../assets/image/hero/logo.png'
import bg from '../../assets/image/hero/bg-amadeirado.jpg'

const handleScroll = () => {
  const element = document.getElementById("cardapio");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <section id="inicio" className="w-full h-[75dvh] h800:h-[70dvh] relative">
      {/* Imagem de fundo */}
      <img
        src={bg}
        alt="Pizza Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col items-center text-white text-center justify-center">
        <img src={logo} alt="Logo" className=" md:mb-8 md:h-[400px] max-w-[140px] h800:max-w-[180px] h800:mb-6 mb-2" />
        <p className="max-w-[380px] sm:max-w-full text-xl font-bold tracking-tight sm:text-2xl md:text-4xl">
        O melhor espeto da cidade direto da nossa kombi para <span className="text-red-500">você!</span>
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 md:mt-8 mb-4">
          <Button onClick={handleScroll} size="lg" className="bg-red-600 hover:bg-red-700">
            Ver Cardápio
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Fazer pedido!
          </Button>
        </div>
      </div>
    </section>
  )
}
