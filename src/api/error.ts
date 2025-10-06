export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message
}

export const getDefaultErrorMessage = (status: number): string => {
  const messages: { [key: number]: string } = {
    400: 'Неверный запрос',
    401: 'Требуется авторизация',
    403: 'Доступ запрещен',
    404: 'Ресурс не найден',
    422: 'Ошибка валидации',
    500: 'Внутренняя ошибка сервера',
    502: 'Плохой шлюз',
    503: 'Сервис недоступен',
  }
  return messages[status] || 'Произошла ошибка'
}
