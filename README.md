# DashStack - Современный Дашборд

## 📊 О проекте

DashStack - это современный, адаптивный дашборд, разработанный с использованием Next.js и Tailwind CSS. Он предоставляет элегантный интерфейс для визуализации и анализа данных о продажах, заказах и других бизнес-метриках.

### ✨ Особенности

- **Современный дизайн** - Чистый и интуитивно понятный интерфейс
- **Адаптивность** - Полная поддержка мобильных устройств и планшетов
- **Интерактивные графики** - Визуализация данных с помощью Recharts
- **Управление состоянием** - Эффективное управление данными с MobX
- **Светлая тема** - Оптимизированный для чтения интерфейс
- **Боковое меню** - Удобная навигация по разделам

## 🚀 Технологии

- **Next.js** - React-фреймворк для серверного рендеринга
- **Tailwind CSS** - Утилитарный CSS-фреймворк
- **MobX** - Библиотека для управления состоянием
- **Recharts** - Библиотека для создания графиков
- **DaisyUI** - Компоненты для Tailwind CSS

## 🛠️ Установка и запуск

1. **Установка зависимостей**
   ```bash
   npm install
   # или
   yarn install
   # или
   bun install
   ```

2. **Запуск в режиме разработки**
   ```bash
   npm run dev
   # или
   yarn dev
   # или
   bun dev
   ```

3. **Сборка для продакшена**
   ```bash
   npm run build
   # или
   yarn build
   # или
   bun build
   ```

4. **Запуск продакшен-версии**
   ```bash
   npm run start
   # или
   yarn start
   # или
   bun start
   ```

## 📋 Структура проекта

```
dashstack/
├── src/
│   ├── app/              # Основные страницы приложения
│   ├── assets/           # Статические ресурсы (изображения, иконки)
│   ├── lib/              # Утилиты и хранилища данных
│   │   └── store/        # MobX хранилища
│   └── shared/           # Общие компоненты
│       ├── NavigationTopBar/  # Верхняя навигационная панель
│       └── Sidebar_menu/      # Боковое меню
├── public/               # Публичные статические файлы
└── ...                   # Конфигурационные файлы
```

## 🔍 Основные функции

- **Дашборд продаж** - Визуализация данных о продажах с фильтрацией по месяцам
- **Детали сделок** - Таблица с информацией о продуктах, количестве и статусе
- **Адаптивный интерфейс** - Оптимизация для различных устройств
- **Боковая навигация** - Удобный доступ к различным разделам

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта! Если у вас есть идеи по улучшению DashStack, пожалуйста, создайте issue или отправьте pull request.

---

<div align="center">
  <p>Создано с ❤️</p>
</div>
