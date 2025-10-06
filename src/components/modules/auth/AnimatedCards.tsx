const AnimatedCards = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-center">
      <div className="relative w-80 h-64">
        {/* Колонка 1 */}
        <div className="absolute left-0 top-8 w-24 space-y-3">
          <div className="bg-white rounded-lg shadow-md p-3 h-16 w-full animate-float delay-75">
            <div className="bg-blue-200 rounded h-2 w-3/4 mb-2"></div>
            <div className="bg-gray-200 rounded h-1 w-1/2"></div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 h-20 w-full animate-float delay-150">
            <div className="bg-green-200 rounded h-2 w-4/5 mb-2"></div>
            <div className="bg-gray-200 rounded h-1 w-2/3 mb-1"></div>
            <div className="bg-gray-200 rounded h-1 w-1/2"></div>
          </div>
        </div>

        {/* Колонка 2 */}
        <div className="absolute left-32 top-4 w-24 space-y-3">
          <div className="bg-white rounded-lg shadow-md p-3 h-20 w-full animate-float delay-300">
            <div className="bg-yellow-200 rounded h-2 w-3/4 mb-2"></div>
            <div className="bg-gray-200 rounded h-1 w-2/3 mb-1"></div>
            <div className="bg-gray-200 rounded h-1 w-1/2"></div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 h-16 w-full animate-float delay-500">
            <div className="bg-red-200 rounded h-2 w-4/5 mb-2"></div>
            <div className="bg-gray-200 rounded h-1 w-1/2"></div>
          </div>
        </div>

        {/* Колонка 3 */}
        <div className="absolute left-64 top-12 w-24 space-y-3">
          <div className="bg-white rounded-lg shadow-md p-3 h-24 w-full animate-float delay-700">
            <div className="bg-purple-200 rounded h-2 w-3/4 mb-2"></div>
            <div className="bg-gray-200 rounded h-1 w-2/3 mb-1"></div>
            <div className="bg-gray-200 rounded h-1 w-2/3 mb-1"></div>
            <div className="bg-gray-200 rounded h-1 w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnimatedCards
