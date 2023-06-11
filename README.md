# ReactAston

https://klimova-movies.netlify.app/ - ссылка на сайт

1 уровень (необходимый минимум)
 - Реализованы Требования к функциональности, описанные в прикрепленном документе: ✔️
 - React
1. Пишем функциональные компоненты c хуками в приоритете над классовыми: https://github.com/ksy336/react-aston/blob/c7a75d660e6f23f855e40d876e79dc052eca4b44/src/pages/MoviePage/MoviePage.tsx#L17-L22
2. Есть четкое разделение на умные и глупые компоненты:  Умный: https://github.com/ksy336/react-aston/blob/c423b4af880c2442358aa3f51799ec913ac2efab/src/components/Movie/Movie.tsx#L17  , Глупый: https://github.com/ksy336/react-aston/blob/c423b4af880c2442358aa3f51799ec913ac2efab/src/components/Button/Button.tsx#L9
3. Есть рендеринг списков: ✔️ Рендер списка
4. Реализована хотя бы одна форма: ✔️Две формы регистрации и логина
5. Есть применение Контекст API: ✔️ FeatureFlagProvider
6. Есть применение предохранителя: ✔️ ErrorBoundary
7. Поиск не должен триггерить много запросов к серверу: ✔️ Поиск при нажатии кнопки или 'Enter'
8. Используется HOC Require Auth
9. Используется AuthorizationContext для Auth страницы
10. Используется Axios для асинхронных запросов.

- Redux
1. Используем Modern Redux with Redux Toolkit: ✔️
2. Используем слайсы: ✔️ Слайсы

2 уровень (необязательный)
1. Использование TypeScript: ✔️
2. Используется Notification из бибилиоткеи ANTD - при регистрации

