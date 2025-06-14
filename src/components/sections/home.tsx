"use client"

import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react"
import CardCardapio from "../ui/cardCardapio"
import Header from "./header"
import CardDestaque from "../ui/cardDestaque"

import Hero from "./hero"

//import pizza from '../../assets/image/pizza.webp'

import entrada from '../../assets/image/entrada.jpg'
import coca from '../../assets/image/coca.jpg'

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
                  image: "https://uploads.metroimg.com/wp-content/uploads/2023/09/15160217/confira-6-lugares-para-comer-jantinha-no-DF.jpg",
                },
                {
                  name: "Calda de Vaca atolada",
                  description: "Calda de vaca atolada, mandioca, vinagre e molho da casa.",
                  price: 25.00,
                  image: "https://static.itdg.com.br/images/1200-675/ffb032afadf46833a5b9adf0fd20e0fd/caldo-de-vaca-atolada.jpg",
                },
                {
                  name: "Quatro Queijos",
                  description: "Mussarela, gorgonzola, parmesão e provolone derretidos.",
                  price: 54.90,
                  image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
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
                    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Franqueijo",
                    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.",
                    price: 11.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Kafta com Queijo",
                    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.",
                    price: 11.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Quejo Provolone",
                    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.",
                    price: 12.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Quejo Coalho",
                    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Pão de Alho",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 8.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Cupim Bovino",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Coração",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Linguiça Suína",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Linguiça com Jiló",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Contra Filé",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 15.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Asinha de Frango",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Provolone Bacon",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 14.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Fraldinha",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
                  },
                  {
                    name: "Alcatra",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: 10.00,
                    image: "https://alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png",
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
                    image: "https://uploads.metroimg.com/wp-content/uploads/2023/09/15160217/confira-6-lugares-para-comer-jantinha-no-DF.jpg",
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
                    image: entrada,
                  },
                  {
                    name: "Torresmo",
                    description: "Palitos de massa com alho, parmesão e ervas.",
                    price: 8.00,
                    image: entrada,
                  },
                  {
                    name: "Mandioca",
                    description: "Tomate, mussarela de búfala, manjericão e azeite.",
                    price: 10.00,
                    image: entrada,
                  },
                  {
                    name: "Mandioca c/ Tomate",
                    description: "Porção de batatas fritas crocantes.",
                    price: 12.00,
                    image: entrada,
                  },
                  {
                    name: "Arroz",
                    description: "Porção de batatas fritas crocantes.",
                    price: 10.00,
                    image: entrada,
                  },
                  {
                    name: "Feijão Tropeiro",
                    description: "Porção de batatas fritas crocantes.",
                    price: 12.00,
                    image: entrada,
                  },
                  {
                    name: "Jantinha sem espeto",
                    description: "Porção de batatas fritas crocantes.",
                    price: 15.00,
                    image: entrada,
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
            <TabsContent value="bebidas">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {[
                  {
                    name: "Refrigerante",
                    description: "Lata 350ml (Coca-Cola, Guaraná, Sprite)",
                    price: 6.90,
                    image: coca,
                  },
                  {
                    name: "Suco Natural",
                    description: "Copo 300ml (Laranja, Limão, Abacaxi)",
                    price: 9.90,
                    image: coca,
                  },
                  {
                    name: "Água Mineral",
                    description: "Garrafa 500ml (com ou sem gás)",
                    price: 4.90,
                    image: coca,
                  },
                  {
                    name: "Cerveja",
                    description: "Long neck (Heineken, Stella Artois, Corona)",
                    price: 12.90,
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
                    description: "Lata 350ml (Coca-Cola, Guaraná, Sprite)",
                    price: 15.00,
                    image: coca,
                  },
                  {
                    name: "Caldo de Vaca atolada",
                    description: "Copo 300ml (Laranja, Limão, Abacaxi)",
                    price: 15.00,
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
          </Tabs>
        </section>

        {/* Features */}
        <section className="bg-gray-100 relative z-10 container mx-auto py-12 md:py-16 px-4 max-w-[100dvw]">
           {/* Info Cards */}
           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Localização</h3>
              <p className="text-gray-600">Sempre em movimento pela cidade</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Horário</h3>
              <p className="text-gray-600">Ter-Dom: 18h às 23h</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Contato</h3>
              <p className="text-gray-600">(11) 99999-9999</p>
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

        {/* Testimonials */}
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
        </section>

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
        <section className="bg-red-600 text-white py-12 max-w-[100dvw] mx-auto z-10 relative">
          <div className="container mx-auto text-center px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-4">Faça seu Pedido Agora!</h2>
            <p className="max-w-[600px] mx-auto mb-8">
              Experimente nossas deliciosas pizzas artesanais. Entrega rápida ou venha nos visitar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Phone className="mr-2 h-4 w-4" />
                Ligar Agora
              </Button>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Fazer Pedido Online
              </Button>
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
                  src="/placeholder.svg?height=40&width=40"
                  alt="Pizzaria Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">Pizzaria Delícia</span>
              </div>
              <p className="text-sm">
                Servindo pizzas artesanais de qualidade desde 2005. Nosso compromisso é com o sabor e a satisfação dos
                nossos clientes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">as Rápidos</h3>
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
                <li>Segunda a Sexta: 18h às 23h</li>
                <li>Sábados e Domingos: 18h às 00h</li>
                <li>Feriados: 18h às 23h</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Inscreva-se para receber nossas promoções e novidades.</p>
              <div className="flex gap-2">

              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Pizzaria Delícia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}