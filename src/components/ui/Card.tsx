import type { ICardResponse } from '@/types/card.types.ts'

interface CardProps {
  card: ICardResponse
}

export const Card = ({ card }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:shadow-md transition-all duration-200">
      <div className="cursor-pointer">
        <p className="text-sm text-gray-900 whitespace-pre-wrap">
          {card.title}
        </p>

        {/* {(card.description || card.dueDate) && ( */}
        {/*   <div className="flex items-center gap-2 mt-2"> */}
        {/*     {card.description && ( */}
        {/*       <span className="text-xs text-gray-500">📝</span> */}
        {/*     )} */}
        {/*     {card.dueDate && ( */}
        {/*       <span */}
        {/*         className={`text-xs px-2 py-1 rounded ${ */}
        {/*           isDueDatePassed */}
        {/*             ? 'bg-red-100 text-red-700' */}
        {/*             : 'bg-gray-100 text-gray-700' */}
        {/*         }`} */}
        {/*       ></span> */}
        {/*     )} */}
        {/*   </div> */}
        {/* )} */}
      </div>
    </div>
  )
}
