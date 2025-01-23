import QuestionStructure from "@/types/question-answer";

export const questions: QuestionStructure[] = [
  {
    question: "Що таке Server Components і Client Components у Next.js?",
    answer:
      "Server Components виконуються на сервері, не можуть використовувати React хуки або браузерні API. Client Components виконуються на клієнті, можуть використовувати React хуки та браузерні API.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як позначити компонент як Client Component?",
    answer: "Додайте директиву `'use client'` на початку файлу компонента.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Чи робить `'use client'` весь додаток клієнтським?",
    answer:
      "Ні. `'use client'` позначає лише конкретний компонент і його дочірні компоненти (які також позначені як Client Components) як клієнтські. Server Components залишаються серверними.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question:
      "Як працює передача даних між Server Components і Client Components?",
    answer:
      "Server Components передають дані до Client Components через пропси. Дані мають бути серіалізованими (наприклад, об’єкти, масиви, рядки, числа). Не можна передавати функції, класи або об’єкти з `null` прототипом.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Що таке `queryKey` у React Query?",
    answer:
      "`queryKey` — це унікальний ідентифікатор для запиту. Він використовується для кешування, інвалідації та управління станом запитів. `queryKey` завжди є масивом.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Чому `queryKey` має бути масивом?",
    answer:
      "Масив дозволяє створювати унікальні та ієрархічні ключі для запитів. Наприклад, `['posts', 'list']` для отримання списку постів або `['posts', 'detail', postId]` для отримання конкретного посту.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як працює `useQuery` у React Query?",
    answer:
      "`useQuery` використовується для отримання даних на клієнті. Він приймає `queryKey` та `queryFn` (функцію для отримання даних).",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як працює `useQueryClient` у React Query?",
    answer:
      "`useQueryClient` використовується для доступу до клієнта React Query. Він дозволяє інвалідувати запити, оновлювати дані або працювати з кешем.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як працює `prefetchQuery` у React Query?",
    answer:
      "`prefetchQuery` використовується для попереднього отримання даних на сервері (наприклад, у `getServerSideProps` або `getStaticProps`).",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як передати попередньо отримані дані з сервера на клієнт?",
    answer:
      "Використовуйте `dehydrate` для серіалізації даних на сервері та `Hydrate` для їх відновлення на клієнті.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як створити `Providers` компонент для React Query?",
    answer:
      "`Providers` компонент обгортає додаток і надає доступ до React Query. Він має бути позначений як Client Component (`'use client'`).",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як використовувати `Providers` у `layout.tsx`?",
    answer: "Обгорніть `children` у `Providers` компонент.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Чи можна використовувати React Query Devtools?",
    answer:
      "Так, ви можете додати `ReactQueryDevtools` до `Providers` компонента для налагодження.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як працює динамічний імпорт у Next.js?",
    answer:
      "Динамічний імпорт (`dynamic`) дозволяє завантажувати компоненти лише тоді, коли вони потрібні. Це зменшує розмір клієнтського JavaScript.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як забезпечити безпеку додатку при використанні React Query?",
    answer:
      "Завжди перевіряйте права доступу на сервері. Не покладайтеся лише на клієнтські перевірки. Використовуйте захищені API-ендпоінти.",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
  {
    question: "Як працює Next.js Middleware?",
    answer:
      "Middleware дозволяє перехоплювати запити до сервера та виконувати логіку (наприклад, перевірку автентифікації).",
    lastRepeatTime: 1737659082,
    repeatCount: 0,
  },
];
