"use client"

import { Button } from "../ui/button"
//import { Card } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, } from "react-icons/fa";
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react"
import CardCardapio from "../ui/cardCardapio"
import Header from "./header"
import CardDestaque from "../ui/cardDestaque"
import kombi from '../../assets/image/hero/kombi.png'
import { Card } from '../ui/card'

import Hero from "./hero"
import logoIfood from '../../assets/image/logo/ifood-seeklogo.png'

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

import hambuerguers from '../../assets/image/hamburguers/hamburguers.jpg'

//porçoes
import tropeiro from '../../assets/image/porçoes/tropeiro.jpeg'
import jantinhaSemEspeto from '../../assets/image/porçoes/jantinhaSemEspeto.jpeg'
import tomate from '../../assets/image/porçoes/tomate.webp'
import mandioca from '../../assets/image/porçoes/mandioca.jpg'
import mandiocaTomate from '../../assets/image/porçoes/mandiocaTomate.jpg'
import torresmo from '../../assets/image/porçoes/torresmo.jpg'
import arroz from '../../assets/image/porçoes/arroz.webp'
import jantinhaC from '../../assets/image/jantinha/jantinhaC.jpg'
import jantinhaD from '../../assets/image/jantinha/jantinhaD.avif'
import fritas from '../../assets/image/porçoes/fritas.avif'
import fritasQueijo from '../../assets/image/porçoes/fritasQueijo.jpg'
import feijoada from '../../assets/image/porçoes/feijoada.webp'

//caldos
import caldoFeijao from '../../assets/image/caldos/caldoFeijao.jpg'
import caldoFrango from '../../assets/image/caldos/caldoFrango.jpg'
import caldoVaca from '../../assets/image/caldos/caldoVaca.jpg'

//cerveja
import amstel from '../../assets/image/cerveja/amstel.webp'
import brahma from '../../assets/image/cerveja/brahma.webp'
import heineken from '../../assets/image/cerveja/heineken.jpg'
import heinekenLong from '../../assets/image/cerveja/heinekenLong.jpg'
import skol from '../../assets/image/cerveja/skol.webp'
import kaiser from '../../assets/image/cerveja/kaiser.webp'

//refrigerante
import coca from '../../assets/image/refrigerante/coca.jpg'
import fantaGuarana from '../../assets/image/refrigerante/fantaGuarana.webp'
import fantaUva from '../../assets/image/refrigerante/fanta-uva.webp'
import fanta from '../../assets/image/refrigerante/fanta.webp'
import sprite from '../../assets/image/refrigerante/sprite.webp'
import mineiro from '../../assets/image/refrigerante/mineiro.jpeg'
import antartica from '../../assets/image/refrigerante/antartica.webp'

//sucos
import laranja from '../../assets/image/suco/laranja.jpg'
import abacaxi from '../../assets/image/suco/abacaxi.jpg'
import morango from '../../assets/image/suco/morango.jpeg'
import goiaba from '../../assets/image/suco/goiaba.png'
import maracuja from '../../assets/image/suco/maracuja.jpg'
import cupuaçu from '../../assets/image/suco/cupuaçu.jpeg'
import acerola from '../../assets/image/suco/acerola.jpg'
import laranjaMorango from '../../assets/image/suco/laranjaMorango.png'

//hamburguers
import standard from '../../assets/image/hamburguers/standard.jpg'
import bacon from '../../assets/image/hamburguers/bacon.png'
import top from '../../assets/image/hamburguers/top.png'

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
                  image: jantinhaD,
                },
                {
                  name: "Calda de Vaca atolada",
                  description: "Calda de vaca atolada, mandioca, vinagre e molho da casa.",
                  price: 15.00,
                  image: "https://static.itdg.com.br/images/1200-675/ffb032afadf46833a5b9adf0fd20e0fd/caldo-de-vaca-atolada.jpg",
                },
                {
                  name: "Kombi top",
                  description: "Pão brioche, 2 blend de 150g, cheddar duplo, cebola roxa, bacon e molho rousi.",
                  price: 25.99,
                  image: top,
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

        {/*novidades*/}
        <section id="novidades" className="py-2 md:py-12 px-2 relative z-10 bg-gray-100">
          <div className="flex flex-col items-center text-center mb-6" data-aos="fade-up" data-aos-delay="100">
            <img src={hambuerguers} alt="" className="max-h-[420px] rounded-lg" />
          </div>
        </section>

        {/* Menu */}
        <section id="cardapio" className="py-2 md:py-12 px-2 relative z-10 bg-gray-100">
          <div className="flex flex-col items-center text-center mb-2">
            <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight">Nosso Cardápio</h2>

          </div>

          <Tabs data-aos="fade-up" data-aos-delay="100" defaultValue="espetos" className="max-w-5xl 2xl:max-w-6xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-1 md:gap-2 p-2 mb-28 md:mb-12">
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
                value="feijoada"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🍽️ Feijoada
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
              <TabsTrigger
                value="hamburguers"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium text-sm md:text-sm transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white text-black hover:text-white hover:bg-gray-700/50 whitespace-nowrap"
              >
                🍲 Hambúrguers
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
                    price: 10.00,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvLUIxMZhBw-HribSvitWcmLWtUN4JJ9pYA&s",
                  },
                  {
                    name: "Kafta com Queijo",
                    description: "Espeto de kafta irresistível!",
                    price: 10.00,
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
                    name: "Contra Filé",
                    description: "Espeto de contra filé delicioso!",
                    price: 10.00,
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
                    price: 12.00,
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
                    name: "Jantinha completa",
                    description: "Arroz, feijão tropeiro, mandioca, vinagrete e molho da casa.",
                    price: 25.00,
                    image: jantinhaC,
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
            
            <TabsContent value="hamburguers">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Kombi bacon",
                    description: "Pão brioche, blend de 150g, bacon, tomate, cebola e molho rousi.",
                    price: 17.99,
                    image: bacon,
                    maxHeight: "max-h-32",
                  },
                  {
                    name: "Kombi top",
                    description: "Pão brioche, 2 blend de 150g, cheddar duplo, cebola roxa, bacon e molho rousi.",
                    price: 25.99,
                    image: top,
                    maxHeight: "max-h-32",
                  },
                  {
                    name: "Kombi standard",
                    description: "Pão brioche, blend de 150g, cheddar, tomate e molho rousi.",
                    price: 15.99,
                    image: standard,
                    maxHeight: "max-h-32",
                  },
                  // ... continue os outros
                ].map((item, index) => (
                  <CardCardapio
                    key={index}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    maxHeight={item.maxHeight}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="feijoada">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Prato de Feijoada",
                    description: "Arroz com feijoada, couve e farofa com acompanhamento de laranja",
                    price: 24.90,
                    image: feijoada,
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
                    description: "Tomate bem fresquinho.",
                    price: 8.00,
                    image: tomate,
                  },
                  {
                    name: "Torresmo",
                    description: "Torresmo delicioso.",
                    price: 16.90,
                    image: torresmo,
                  },
                  {
                    name: "Mandioca",
                    description: "Mandioca saborosa.",
                    price: 10.00,
                    image: mandioca,
                  },
                  {
                    name: "Mandioca c/ Tomate",
                    description: "Mandioca com tomate sensacional.",
                    price: 12.00,
                    image: mandiocaTomate,
                  },
                  {
                    name: "Arroz",
                    description: "Arroz bem soltinho.",
                    price: 10.00,
                    image: arroz,
                  },
                  {
                    name: "Feijão Tropeiro",
                    description: "Feijão tropeiro caprichado.",
                    price: 12.00,
                    image: tropeiro,
                  },
                  {
                    name: "Jantinha sem espeto",
                    description: "Jantinha sem espeto deliciosa.",
                    price: 15.00,
                    image: jantinhaSemEspeto,
                  },
                  {
                    name: "Fritas com queijo e bacon",
                    description: "Porção de batatas fritas crocantes com queijo e bacon.",
                    price: 29.90,
                    image: fritasQueijo,
                  },
                  {
                    name: "Porção de fritas",
                    description: "Porção de batatas fritas crocantes.",
                    price: 20.00,
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
                    image: amstel,
                  },
                  {
                    name: "Brahma",
                    description: "Lata 350ml Brahma",
                    price: 5.00,
                    image: brahma,
                  },
                  {
                    name: "Skol",
                    description: "Lata 350ml Skol",
                    price: 7.00,
                    image: skol,
                  },
                  {
                    name: "Heineken lata",
                    description: "Lata 350ml Heineken",
                    price: 8.00,
                    image: heineken,
                  },
                  {
                    name: "Heineken Long neck",
                    description: "Long neck Heineken",
                    price: 9.90,
                    image: heinekenLong,
                  },
                  {
                    name: "Kaiser",
                    description: "Lata 350ml Kaiser",
                    price: 6.00,
                    image: kaiser,
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
                    image: fanta,
                  },
                  {
                    name: "Fanta Uva",
                    description: "Lata 220ml Fanta Uva",
                    price: 4.00,
                    image: fantaUva,
                  },
                  {
                    name: "Fanta Guaraná",
                    description: "Lata 220ml Fanta Guaraná",
                    price: 4.00,
                    image: fantaGuarana,
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
                    image: fanta,
                  },
                  {
                    name: "Fanta Uva",
                    description: "Fanta Uva 310ml",
                    price: 5.50,
                    image: fantaUva,
                  },
                  {
                    name: "Sprite",
                    description: "Sprite 310ml",
                    price: 5.50,
                    image: sprite,
                  },
                  {
                    name: "Mineiro",
                    description: "Mineiro 350ml",
                    price: 5.50,
                    image: mineiro,
                  },
                  {
                    name: "Antártica",
                    description: "Antártica 350ml",
                    price: 5.50,
                    image: antartica,
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
                    image: laranja,
                  },
                  {
                    name: "Maracujá",
                    description: "Suco de Maracujá 500ml",
                    price: 12.00,
                    image: maracuja,
                  },
                  {
                    name: "Goiaba",
                    description: "Suco de Goiaba 500ml",
                    price: 12.00,
                    image: goiaba,
                  },
                  {
                    name: "Laranja/Morango",
                    description: "Suco de Laranja/Morango 500ml",
                    price: 12.00,
                    image: laranjaMorango,
                  },
                  {
                    name: "Morango",
                    description: "Suco de Morango 500ml",
                    price: 12.00,
                    image: morango,
                  },
                  {
                    name: "Abacaxi",
                    description: "Suco de Abacaxi 500ml",
                    price: 12.00,
                    image: abacaxi,
                  },
                  {
                    name: "Acerola",
                    description: "Suco de Acerola 500ml",
                    price: 12.00,
                    image: acerola,
                  },
                  {
                    name: "Cupuaçu",
                    description: "Suco de Cupuaçu 500ml",
                    price: 12.00,
                    image: cupuaçu,
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
            <div data-aos="zoom-in" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Localização</h3>
              <p className="text-gray-600">Av. Bahia - Centro, 450 - Araguari - MG</p>
            </div>

            <div data-aos="zoom-in" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Horário</h3>
              <p className="text-gray-600">Segunda a Sábado: 17h às 22:30h</p>
            </div>

            <div data-aos="zoom-in" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Contato</h3>
              <p className="text-gray-600">(55) 34 8432-0119</p>
            </div>
          </div>
        </section>

        {/* About 
        <section id="sobre" className="bg-gray-100 py-2 md:py-16 max-w-[100dvw] mx-auto z-10 relative">
          <div className="container mx-auto px-4 max-w-6xl 2xl:max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="flip-left" className="relative  rounded-lg overflow-hidden">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/68/9d/2d/fachada-da-nossa-pizzeria.jpg?w=900&h=500&s=1" alt="Nossa Pizzaria" className="object-cover" />
              </div>
              <div>
                <h2 data-aos="fade-right" className="text-3xl font-bold tracking-tight mb-6">Nossa História</h2>
                <p data-aos="fade-right" className="text-muted-foreground mb-4">
                  Fundada em 2005, a Pizzaria Delícia nasceu da paixão do chef Antonio pela culinária italiana. Após
                  anos de estudo e aperfeiçoamento na Itália, ele retornou ao Brasil com o sonho de criar pizzas
                  autênticas com um toque brasileiro.
                </p>
                <p data-aos="fade-right" className="text-muted-foreground mb-4">
                  Nossa missão é proporcionar momentos de felicidade através de pizzas artesanais de alta qualidade,
                  preparadas com ingredientes frescos e técnicas tradicionais.
                </p>
                <p data-aos="fade-right" className="text-muted-foreground mb-6">
                  Hoje, somos reconhecidos como uma das melhores pizzarias da cidade, com clientes fiéis que apreciam
                  nosso compromisso com a excelência e o sabor inigualável.
                </p>
                {/* <Button data-aos="fade-right" className="bg-red-600 hover:bg-red-700">Conheça Nossa Equipe</Button> 
              </div>
            </div>
          </div>
        </section>*/}

        {/* Testimonials */}
        <section className="container mx-auto py-12 md:py-16 px-4 max-w-[100dvw] z-10 relative bg-white">
          <div className="flex flex-col items-center text-center mb-10 ">
            <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight">O Que Nossos Clientes Dizem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Kailane",
                text: "Feijoada deliciosa!",
                rating: 5,
              },
              {
                name: "Larissa",
                text: "O melhor caldo que eu já comi em araguari. Que delícia! Super indico. Saboroso!",
                rating: 5,
              },
              {
                name: "Nicole",
                text: "Os caldos são excelentes. Dá pra ver que são ingredientes de boa qualidade. Pedi 2 torresmos adicionais e veio super sequinho, uma delícia. Parabéns!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card data-aos="fade-up" key={index} className="p-6">
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
        </section>

        {/* Contact/Location */}
        <section id="contato" className="bg-gray-50 py-6 md:py-16 max-w-[100dvw] mx-auto z-10 relative">
          <div className="container mx-auto px-4 max-w-6xl 2xl:max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div data-aos="fade-up" className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="h-10 w-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-black mb-3">
                        Kombi Espeto & Burguer na Brasa
                      </h2>
                      <div id="pedido" className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mr-3"></div>
                        Informações de Contato
                      </h3>

                      <div className="space-y-5">
                        <div className="flex items-start group cursor-pointer">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-300 shadow-md">
                            <MapPin className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-800 font-semibold text-lg">Endereço</p>
                            <p className="text-gray-600">Av. Bahia - Centro, 450</p>
                            <p className="text-gray-600">Araguari - MG</p>
                          </div>
                        </div>

                        <div className="flex items-center group cursor-pointer">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-300 shadow-md">
                            <Phone className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-800 font-semibold text-lg">Telefone</p>
                            <a
                              href="tel:+553484320119"
                              className="text-purple-600 hover:text-indigo-600 transition-colors font-medium text-lg"
                            >
                              (34) 8432-0119
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start group cursor-pointer">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-300 shadow-md">
                            <Clock className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-800 font-semibold text-lg">Horário de Funcionamento</p>
                            <p className="text-gray-600">Segunda a Sábado</p>
                            <p className="text-purple-600 font-bold">17h às 22:30h</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mr-3"></div>
                        Redes Sociais
                      </h3>

                      <div className="flex justify-center gap-6">
                        <a
                          href="https://www.instagram.com/kombi_espeto/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                        >
                          <FaInstagram />
                          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                            Instagram
                          </span>
                        </a>

                        <a
                          href="https://www.facebook.com/kombi_espeto/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                        >
                          <FaFacebook />
                          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                            Facebook
                          </span>
                        </a>

                        <a
                          href="https://wa.me/553484320119"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                        >
                          <FaWhatsapp />
                          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                            WhatsApp
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-10 pt-6 border-t border-purple-200">
                      <div className="text-center">
                        <p className="text-gray-600 mb-4 text-lg">Entre em contato conosco!</p>
                        <a
                          href="https://wa.me/553484320119"
                          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-lg"
                        >
                          <FaWhatsapp />
                          <span className="ml-3">Fazer Pedido</span>
                        </a>
                        <a
                          href="https://www.ifood.com.br/delivery/araguari-mg/kombi--espeto-centro/ac7c69e0-c1d2-44e7-b7f4-7a75d9f0598c?UTM_Medium=share"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-2xl hover:bg-red-50 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 text-lg bg-white"
                        >
                          <img src={logoIfood} alt="iFood" className="w-6 h-6" />
                          <span className="ml-3">Fazer Pedido</span>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mapa */}
              <div data-aos="flip-up" className="relative h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.101735069071!2d-48.20089392495864!3d-18.659430182461264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a431ad5660344d%3A0x37f6cc9835ced63e!2sAv.%20Bahia%2C%20450%20-%20Centro%2C%20Araguari%20-%20MG%2C%2038440-188!5e0!3m2!1spt-BR!2sbr!4v1750871502053!5m2!1spt-BR!2sbr"
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 max-w-[100dvw] flex items-center justify-center z-10 relative w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:mx-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={kombi}
                  alt="Pizzaria Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">Kombi Espeto & Burguer na Brasa </span>
              </div>
              <p className="text-sm">
                O melhor espeto da cidade direto da nossa kombi para você!
              </p>
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