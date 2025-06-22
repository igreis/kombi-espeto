import type React from "react"
import ButtonCardapio from "./buttonCardapio"

interface CardProps {
  title: string
  description: string
  price: number
  image: string
}

const CardCardapio: React.FC<CardProps> = ({ title, description, price, image }) => {
  return (
    <div className="max-h-28 flex flex-row lg:min-h-36 w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Content section with fixed width */}
      <div className="flex flex-col justify-between pt-2 pl-4 lg:p-4 w-2/3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 mr-1">{description}</p>
        </div>
        <div className=" flex items-center justify-between">
          <span className="text-md font-bold text-primary-600">R$ {price.toFixed(2)}</span>
          <ButtonCardapio variant="primary" size="sm">
            Adicionar
          </ButtonCardapio>
        </div>
      </div>

      {/* Image section with fixed width */}
      <div className="w-1/3 h-36">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default CardCardapio