# ReactAston

https://klimova-movies.netlify.app/ - ссылка на сайт

1 уровень (необходимый минимум)
 - Реализованы Требования к функциональности, описанные в прикрепленном документе: ✔️
 - React
1. Пишем функциональные компоненты c хуками в приоритете над классовыми: https://github.com/ksy336/react-aston/blob/c7a75d660e6f23f855e40d876e79dc052eca4b44/src/pages/MoviePage/MoviePage.tsx#L17-L22
2. Есть четкое разделение на умные и глупые компоненты:  Умный: https://github.com/ksy336/react-aston/blob/c423b4af880c2442358aa3f51799ec913ac2efab/src/components/Movie/Movie.tsx#L17   Глупый: https://github.com/ksy336/react-aston/blob/c423b4af880c2442358aa3f51799ec913ac2efab/src/components/Button/Button.tsx#L9
3. Есть рендеринг списков:  Рендер списка: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/pages/MoviePage/MoviePage.tsx#L58
4. Реализована хотя бы одна форма: ✔️Две формы регистрации и логина: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/pages/SignUp/SignUp.tsx#LL36C9-L36C9, https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/pages/SignIn/SignIn.tsx#L13
5. Есть применение Контекст API: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/store/context/context.tsx#L4
6. Поиск не должен триггерить много запросов к серверу: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/pages/MoviePage/MoviePage.tsx#L43 
7. Используется HOC Require Auth: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/hoc/RequireAuth.tsx#L9
8. Используется Axios для асинхронных запросов: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/api/movies-api.ts#L5

- Redux
1. Используем Modern Redux with Redux Toolkit: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/store/store.ts#L28
2. Используем слайсы: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/store/userSlice/userSlice.ts#L7

2 уровень (необязательный)
1. Использование TypeScript: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/pages/MoviePage/MoviePage.tsx#L16
2. Используется Notification из бибилиоткеи ANTD - при регистрации: https://github.com/ksy336/react-aston/blob/849a0e35df1a2a7642aa13512edcc57011647e06/src/helpers/notification.ts#L10

