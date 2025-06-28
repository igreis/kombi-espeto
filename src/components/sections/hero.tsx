"use client"

import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"

import logo from "../../assets/image/hero/LOGO.png"
import bg from "../../assets/image/hero/bg-amadeirado.jpg"
import TypewriterText from "../TypewriterText"

const handleScroll = () => {
  const element = document.getElementById("cardapio")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const handleScrollPedido = () => {
  const element = document.getElementById("pedido")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Hero() {
  const phrases = ["O melhor espeto da cidade direto da nossa kombi para você!"]

  return (
    <section id="inicio" className="w-full h-[75dvh] h720:h-[68dvh] h800:h-[70dvh] h930:h-[65dvh] relative">
      {/* Imagem de fundo */}
      <img src={bg || "/placeholder.svg"} alt="Pizza Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col items-center text-white text-center justify-center md:flex-row md:text-left md:items-center md:justify-between md:px-8 lg:px-16 xl:px-24">
        {/* Logo - Lado esquerdo no desktop */}
        <div className="md:flex-1 md:flex md:justify-center md:items-center">
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            className="md:mb-0 md:h-[350px] lg:h-[400px] xl:h-[450px] max-w-[140px] h800:max-w-[180px] h800:mb-6 mb-2 md:max-w-none md:w-auto"
          />
        </div>

        {/* Conteúdo de texto - Lado direito no desktop */}
        <div className="md:flex-1 md:flex md:flex-col md:justify-center md:items-center ">
          <p className="flex text-center mb-2 max-w-[380px] sm:max-w-full md:max-w-[500px] lg:max-w-[600px] text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto md:mx-0">
            <TypewriterText phrases={phrases} typeSpeed={80} cursorClassName="text-blue-600" />
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 md:mt-8 mb-4 md:mb-0 md:mx-8 mx-auto max-w-[200px] md:max-w-full">
            <Button
              onClick={handleScroll}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4"
              data-aos="fade-up"
            >
              Ver Cardápio
              <ChevronRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
            <Button
              onClick={handleScrollPedido}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4"
              data-aos="fade-up"
            >
              Fazer pedido!
            </Button>
          </div>
        </div>
      </div>

      {/* Estilos para animações */}
      <style>
        {`
 @keyframes writing {
   from { width: 0; }
   to { width: 100%; }
 }

 .writing-animation {
   display: inline-block;
   white-space: nowrap;
   overflow: hidden;
   width: 0;
   animation: writing 0.5s ease-out forwards;
   animation-delay: 0.3s;
 }
   `}
      </style>
    </section>
  )
}
