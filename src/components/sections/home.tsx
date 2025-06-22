"use client"

import { Button } from "../ui/button"
//import { Card } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react"
import CardCardapio from "../ui/cardCardapio"
import Header from "./header"
import CardDestaque from "../ui/cardDestaque"
import kombi from '../../assets/image/hero/kombi.png'

import Hero from "./hero"

//import pizza from '../../assets/image/pizza.webp'

import coca from '../../assets/image/coca.jpg'
import fraldinha from '../../assets/image/espetos/espeto-fraldinha.jpeg'

//espetos
import franbacon from '../../assets/image/espetos/franbacon.jpeg'
import alcatra from '../../assets/image/espetos/alcatra.jpg'
import asinha from '../../assets/image/espetos/asinha.avif'
import contraFile from '../../assets/image/espetos/contraFile.jpg'
import coracao from '../../assets/image/espetos/coracao.jpg'
import cupimBovino from '../../assets/image/espetos/cupimBovino.jpg'
import fraldinhaCardapio from '../../assets/image/espetos/fraldinha.jpg'
import linguicaSuina from '../../assets/image/espetos/linguicaSuina.jpg'
import paoAlho from '../../assets/image/espetos/paoAlho.jpg'
import provoloneBacon from '../../assets/image/espetos/provoloneBacon.jpg'
import queijoCoalho from '../../assets/image/espetos/queijoCoalho.jpg'
import queijoProvolone from '../../assets/image/espetos/queijoProvolone.jpg'
import kaftaQueijo from '../../assets/image/espetos/kaftaQueijo.jpeg'

//porçoes
import tropeiro from '../../assets/image/porçoes/tropeiro.jpeg'
import jantinhaSemEspeto from '../../assets/image/porçoes/jantinhaSemEspeto.jpeg'
import tomate from '../../assets/image/porçoes/tomate.webp'
import mandioca from '../../assets/image/porçoes/mandioca.jpg'
import mandiocaTomate from '../../assets/image/porçoes/mandiocaTomate.jpg'
import torresmo from '../../assets/image/porçoes/torresmo.jpg'
import arroz from '../../assets/image/porçoes/arroz.webp'
import jantinha from '../../assets/image/porçoes/jantinha.png'
import fritas from '../../assets/image/porçoes/fritas.avif'
import fritasQueijo from '../../assets/image/porçoes/fritasQueijo.jpg'
import ovoCodorna from '../../assets/image/porçoes/ovoCodorna.avif'

//caldos
import caldoFeijao from '../../assets/image/caldos/caldoFeijao.jpg'
import caldoFrango from '../../assets/image/caldos/caldoFrango.jpg'
import caldoVaca from '../../assets/image/caldos/caldoVaca.jpg'

export default function Home() {

  const handleScroll = () => {
    const element = document.getElementById("cardapio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Products */}
        <section id="destaques" className="bg-gray-100 relative pb-6 pt-8 md:pt-16 max-w-[100dvw] z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-6">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Destaques</h2>
              <p className="mt-4 text-sm md:text-base max-w-[700px] text-muted-foreground">
                Conheça nossos produtos mais pedidos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Jantinha",
                  description: "Arroz, Feijão tropeiro, mandioca, vinagre e molho da casa.",
                  price: 25.00,
                  image: jantinha,
                },
                {
                  name: "Calda de Vaca atolada",
                  description: "Calda de vaca atolada, mandioca, vinagre e molho da casa.",
                  price: 25.00,
                  image: "https://static.itdg.com.br/images/1200-675/ffb032afadf46833a5b9adf0fd20e0fd/caldo-de-vaca-atolada.jpg",
                },
                {
                  name: "Fraldinha",
                  description: "Espeto de vaca delicioso!",
                  price: 54.90,
                  image: fraldinha,
                },
              ].map((item, index) => (
                <CardDestaque
                  key={index}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" onClick={handleScroll}>
                Ver Cardápio Completo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="cardapio" className="py-2 md:py-12 px-2 relative z-10 bg-gray-100">
          <div className="flex flex-col items-center text-center mb-2">
            <h2 className="text-3xl font-bold tracking-tight">Nosso Cardápio</h2>

          </div>

          <Tabs defaultValue="espetos" className="max-w-5xl 2xl:max-w-6xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-1 md:gap-2 p-2 mb-16">
              <TabsTrigger
                value="espetos"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🍖 Espetos
              </TabsTrigger>
              <TabsTrigger
                value="jantinha"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🍽️ Jantinha
              </TabsTrigger>
              <TabsTrigger
                value="porções"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🍟 Porções
              </TabsTrigger>
              <TabsTrigger
                value="bebidas"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🥤 Bebidas
              </TabsTrigger>
              <TabsTrigger
                value="caldos"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🍲 Caldos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="espetos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Franbacon",
                    description: "Melhor franbacon da cidade!",
                    price: 10.00,
                    image: franbacon,
                  },
                  {
                    name: "Franqueijo",
                    description: "Delicioso espeto de frango com queijo!",
                    price: 11.00,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvLUIxMZhBw-HribSvitWcmLWtUN4JJ9pYA&s",
                  },
                  {
                    name: "Kafta com Queijo",
                    description: "Espeto de kafta irresistível!",
                    price: 11.00,
                    image: kaftaQueijo,
                  },
                  {
                    name: "Quejo Provolone",
                    description: "Espeto de provolone delicioso!",
                    price: 12.00,
                    image: queijoProvolone,
                  },
                  {
                    name: "Quejo Coalho",
                    description: "Espeto de coalho delicioso!",
                    price: 10.00,
                    image: queijoCoalho,
                  },
                  {
                    name: "Pão de Alho",
                    description: "Espeto de pão de alho irresistível!",
                    price: 8.00,
                    image: paoAlho,
                  },
                  {
                    name: "Cupim Bovino",
                    description: "Espeto de cupim bovino caprichado!",
                    price: 10.00,
                    image: cupimBovino,
                  },
                  {
                    name: "Coração",
                    description: "Espeto de coração irresistível!",
                    price: 10.00,
                    image: coracao,
                  },
                  {
                    name: "Linguiça Suína",
                    description: "Espeto de linguiça caprichado.",
                    price: 10.00,
                    image: linguicaSuina,
                  },
                  {
                    name: "Linguiça com Jiló",
                    description: "Espeto de linguiça caprichado.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Contra Filé",
                    description: "Espeto de contra filé delicioso!",
                    price: 15.00,
                    image: contraFile,
                  },
                  {
                    name: "Asinha de Frango",
                    description: "Espeto de asinha de frango caprichado!",
                    price: 10.00,
                    image: asinha,
                  },
                  {
                    name: "Provolone Bacon",
                    description: "Espeto de provolone com bacon irresistível!",
                    price: 14.00,
                    image: provoloneBacon,
                  },
                  {
                    name: "Fraldinha",
                    description: "Espeto de fraldinha caprichado!",
                    price: 10.00,
                    image: fraldinhaCardapio,
                  },
                  {
                    name: "Alcatra",
                    description: "Espeto de alcatra delicioso!",
                    price: 10.00,
                    image: alcatra,
                  },
                  // ... continue os outros
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jantinha">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Jantinha",
                    description: "Arroz, Feijão tropeiro, mandioca, vinagre e molho da casa.",
                    price: 25.00,
                    image: jantinha,
                  },
                  // ... continue os outros
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="porções">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Tomate",
                    description: "Fatias de pão italiano com tomate, alho, manjericão e azeite.",
                    price: 8.00,
                    image: tomate,
                  },
                  {
                    name: "Torresmo",
                    description: "Palitos de massa com alho, parmesão e ervas.",
                    price: 8.00,
                    image: torresmo,
                  },
                  {
                    name: "Mandioca",
                    description: "Tomate, mussarela de búfala, manjericão e azeite.",
                    price: 10.00,
                    image: mandioca,
                  },
                  {
                    name: "Mandioca c/ Tomate",
                    description: "Porção de batatas fritas crocantes.",
                    price: 12.00,
                    image: mandiocaTomate,
                  },
                  {
                    name: "Arroz",
                    description: "Porção de batatas fritas crocantes.",
                    price: 10.00,
                    image: arroz,
                  },
                  {
                    name: "Feijão Tropeiro",
                    description: "Porção de batatas fritas crocantes.",
                    price: 12.00,
                    image: tropeiro,
                  },
                  {
                    name: "Jantinha sem espeto",
                    description: "Porção de batatas fritas crocantes.",
                    price: 15.00,
                    image: jantinhaSemEspeto,
                  },
                  {
                    name: "Jantinha completa",
                    description: "Porção de batatas fritas crocantes.",
                    price: 15.00,
                    image: jantinha,
                  },
                  {
                    name: "Ovo de codorna",
                    description: "Porção de batatas fritas crocantes.",
                    price: 15.00,
                    image: ovoCodorna,
                  },
                  {
                    name: "Fritas com queijo e bacon",
                    description: "Porção de batatas fritas crocantes.",
                    price: 15.00,
                    image: fritasQueijo,
                  },
                  {
                    name: "Porção de fritas",
                    description: "Porção de batatas fritas crocantes.",
                    price: 15.00,
                    image: fritas,
                  },
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bebidas" id="bebidas-cerveja">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <h1 className="md:text-2xl text-xl ml-2 font-bold text-gray-800">
                    Cerveja Lata <span className="text-lg font-medium text-gray-600">(350ml)</span>
                  </h1>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">

                {[
                  {
                    name: "Amstel",
                    description: "Lata 350ml Amstel",
                    price: 7.00,
                    image: coca,
                  },
                  {
                    name: "Brahma",
                    description: "Lata 350ml Brahma",
                    price: 5.00,
                    image: coca,
                  },
                  {
                    name: "Skol",
                    description: "Lata 350ml Skol",
                    price: 7.00,
                    image: coca,
                  },
                  {
                    name: "Heineken lata",
                    description: "Lata 350ml Heineken",
                    price: 8.00,
                    image: coca,
                  },
                  {
                    name: "Heineken Long neck",
                    description: "Long neck Heineken",
                    price: 9.90,
                    image: coca,
                  },
                  {
                    name: "Kaiser",
                    description: "Lata 350ml Kaiser",
                    price: 6.00,
                    image: coca,
                  },
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bebidas" id="bebidas-refrigerantes-lata">
              <div className="flex items-center gap-4 mb-4 mt-8">
                <div className="flex items-center gap-3">
                  <h1 className="md:text-2xl text-xl ml-2 font-bold text-gray-800">
                    Refrigerante Lata <span className="text-lg font-medium text-gray-600">(220ml)</span>
                  </h1>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">

                {[
                  {
                    name: "Coca-Cola",
                    description: "Lata 220ml Coca-Cola",
                    price: 4.00,
                    image: coca,
                  },
                  {
                    name: "Fanta Laranja",
                    description: "Lata 220ml Fanta Laranja",
                    price: 4.00,
                    image: coca,
                  },
                  {
                    name: "Fanta Uva",
                    description: "Lata 220ml Fanta Uva",
                    price: 4.00,
                    image: coca,
                  },
                  {
                    name: "Fanta Guaraná",
                    description: "Lata 220ml Fanta Guaraná",
                    price: 4.00,
                    image: coca,
                  },
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bebidas" id="bebidas-refrigerantes">
              <div className="flex items-center gap-4 mb-4 mt-8">
                <div className="flex items-center gap-3">
                  <h1 className="md:text-2xl text-xl ml-2 font-bold text-gray-800">
                    Refrigerantes <span className="text-lg font-medium text-gray-600">(350ml)</span>
                  </h1>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Coca normal ou zero",
                    description: "Coca-Cola 310ml",
                    price: 5.50,
                    image: coca,
                  },
                  {
                    name: "Fanta Laranja",
                    description: "Fanta Laranja 310ml",
                    price: 5.50,
                    image: coca,
                  },
                  {
                    name: "Fanta Uva",
                    description: "Fanta Uva 310ml",
                    price: 5.50,
                    image: coca,
                  },
                  {
                    name: "Sprite",
                    description: "Sprite 310ml",
                    price: 5.50,
                    image: coca,
                  },
                  {
                    name: "Mineiro",
                    description: "Mineiro 350ml",
                    price: 5.50,
                    image: coca,
                  },
                  {
                    name: "Antártica",
                    description: "Antártica 350ml",
                    price: 5.50,
                    image: coca,
                  },
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bebidas" id="bebidas-sucos">
              <div className="flex items-center gap-4 mb-4 mt-8">
                <div className="flex items-center gap-3">
                  <h1 className="md:text-2xl text-xl ml-2 font-bold text-gray-800">
                    Suco de Polpa<span className="text-lg font-medium text-gray-600">(500ml)</span>
                  </h1>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Laranja",
                    description: "Suco de Laranja 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Maracujá",
                    description: "Suco de Maracujá 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Goiaba",
                    description: "Suco de Goiaba 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Laranja/Morango",
                    description: "Suco de Laranja/Morango 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Morango",
                    description: "Suco de Morango 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Abacaxi",
                    description: "Suco de Abacaxi 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Acerola",
                    description: "Suco de Acerola 500ml",
                    price: 12.00,
                    image: coca,
                  },
                  {
                    name: "Cupuaçu",
                    description: "Suco de Cupuaçu 500ml",
                    price: 12.00,
                    image: coca,
                  },
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="caldos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Caldo de Frango",
                    description: "Caldo de frango acompanhado de torradas e cheiro verde",
                    price: 15.00,
                    image: caldoFrango,
                  },
                  {
                    name: "Caldo de Vaca atolada",
                    description: "Caldo de vaca atolada com torradas e cheiro verde",
                    price: 15.00,
                    image: caldoVaca,
                  },
                  {
                    name: "Caldo de Feijão",
                    description: "Caldo de feijão acompanhado de torradas e cheiro verde",
                    price: 15.00,
                    image: caldoFeijao,
                  },
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Features */}
        <section className="bg-gray-100 relative z-10 container mx-auto py-8 px-4 max-w-[100dvw]">
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Localização</h3>
              <p className="text-gray-600">Av. Bahia - Centro, 450 - Araguari - MG</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Horário</h3>
              <p className="text-gray-600">Segunda a Sábado: 17h às 22:30h</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Contato</h3>
              <p className="text-gray-600">(55) 34 8432-0119</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="bg-gray-100 py-2 md:py-16 max-w-[100dvw] mx-auto z-10 relative">
          <div className="container mx-auto px-4 max-w-6xl 2xl:max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative  rounded-lg overflow-hidden">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/68/9d/2d/fachada-da-nossa-pizzeria.jpg?w=900&h=500&s=1" alt="Nossa Pizzaria" className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Nossa História</h2>
                <p className="text-muted-foreground mb-4">
                  Fundada em 2005, a Pizzaria Delícia nasceu da paixão do chef Antonio pela culinária italiana. Após
                  anos de estudo e aperfeiçoamento na Itália, ele retornou ao Brasil com o sonho de criar pizzas
                  autênticas com um toque brasileiro.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nossa missão é proporcionar momentos de felicidade através de pizzas artesanais de alta qualidade,
                  preparadas com ingredientes frescos e técnicas tradicionais.
                </p>
                <p className="text-muted-foreground mb-6">
                  Hoje, somos reconhecidos como uma das melhores pizzarias da cidade, com clientes fiéis que apreciam
                  nosso compromisso com a excelência e o sabor inigualável.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Conheça Nossa Equipe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials 
        <section className="container mx-auto py-12 md:py-16 px-4 max-w-[100dvw] z-10 relative bg-white">
          <div className="flex flex-col items-center text-center mb-10 ">
            <h2 className="text-3xl font-bold tracking-tight">O Que Nossos Clientes Dizem</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Veja as avaliações de quem já experimentou nossas deliciosas pizzas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos Silva",
                text: "A melhor pizza que já comi! Massa perfeita, ingredientes frescos e entrega rápida. Recomendo a todos!",
                rating: 5,
              },
              {
                name: "Ana Oliveira",
                text: "Ambiente aconchegante e atendimento excelente. A pizza quatro queijos é simplesmente divina!",
                rating: 5,
              },
              {
                name: "Roberto Santos",
                text: "Peço toda semana e nunca me decepciona. Preço justo pela qualidade que oferecem.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                </div>
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </section>*/}

        {/* Contact/Location */}
        <section id="contato" className="bg-gray-50 py-12 md:py-16 max-w-[100dvw] mx-auto z-10 relative">
          <div className="container mx-auto px-4 max-w-6xl 2xl:max-w-7xl">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Contato e Localização</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Visite-nos ou faça seu pedido pelos nossos canais de atendimento.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-3" />
                    <p>Av. Bahia - Centro, 450 - Araguari - MG</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <p>(55) 34 8432-0119</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <p>Segunda a Sábado: 17h às 22:30h</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-8 mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/kombi_espeto/" target="_blank" rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/kombi_espeto/" target="_blank" rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/553484320119" target="_blank" rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1018483027306!2d-48.200893924046596!3d-18.65942510000595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a431ad5660344d%3A0x37f6cc9835ced63e!2sAv.%20Bahia%2C%20450%20-%20Centro%2C%20Araguari%20-%20MG%2C%2038440-188!5e0!3m2!1spt-BR!2sbr!4v1749911907420!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                ></iframe>

                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.app.goo.gl/t8DjKJjvthvPNLET7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                      Ver no Google Maps
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white py-12 max-w-[100dvw] mx-auto z-10 relative" id="pedido">
          <div className="container mx-auto text-center px-4 max-w-6xl md:flex md:flex-col md:items-center">
            <h2 className="text-3xl font-bold mb-4">Faça seu Pedido Agora!</h2>
            <p className="max-w-[600px] mx-auto mb-8">
              Experimente nossas deliciosas pizzas artesanais. Entrega rápida ou venha nos visitar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Phone className="mr-2 h-4 w-4" />
                Ligar Agora
              </Button>
              <a href="https://ifood.com.br/restaurantes/kombi-espeto-450-bahia-araguari" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 w-full">
                  Fazer Pedido pelo Ifood
                </Button>
              </a>
              <a href="https://wa.me/553484320119" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 w-full">
                  Fazer Pedido pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 max-w-[100dvw] mx-auto z-10 relative w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={kombi}
                  alt="Pizzaria Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">Kombi & Espeto</span>
              </div>
              <p className="text-sm">
                O melhor espeto da cidade direto da nossa kombi para você!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-sm hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#cardapio" className="text-sm hover:text-white transition-colors">
                    Cardápio
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-sm hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-sm hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-sm">
                <li>Segunda a Sábado: 17h às 22:30h</li>
              </ul>
            </div>
          </div>
          <div className=" text-center flex justify-center gap-[20px] flex-nowrap">
            <p className="mt-6 whitespace-nowrap">&copy; Desenvolvido por Igor Reis</p>
            <div className="flex justify-center space-x-6 items-end">
              <a href="https://wa.me/5534988313620" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                <FaWhatsapp size={22} />
              </a>
              <a href="https://www.linkedin.com/in/igor-reis-a9b522266/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/ig.reiis/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                <FaInstagram size={22} />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}