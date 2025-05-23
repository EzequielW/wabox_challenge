# 📄 WhatsApp Templates Viewer

A frontend application built with **Vue 3**, **TypeScript**, **Pinia**, and **Tailwind CSS**, for displaying and managing WhatsApp Business API message templates.

---

## 🔧 Tech Stack

- **Vue 3** (Composition API)
- **TypeScript**
- **Pinia** for state management
- **Axios** for API calls
- **Tailwind CSS** for styling
- **Moment.js** for date formatting

---

## 🚀 Features

- Fetch WhatsApp message templates from an API
- Infinite scrolling with pagination metadata support
- Filter templates by status (`draft`, `pending`, `rejected`, etc.)
- Highlight dynamic variables like `{{name}}` in messages

---

## 🏗 Project Structure

```
src/  
├── api/                # Axios setup and API functions  
│   ├── axios.ts  
│   └── templates.ts  
├── components/         # Reusable UI components  
│   ├── common/  
│   │   ├── Badge.vue  
│   │   ├── ChatBubble.vue  
│   │   └── WhatsappButtonGroup.vue  
│   ├── TemplateCard.vue  
│   └── StatusFilter.vue  
├── composables/        # Reusable logic (highlight variables, date formatting)  
│   └── useTemplateUtils.ts  
├── store/              # Pinia stores  
│   └── templateStore.ts  
├── types/              # TypeScript type definitions  
│   ├── pagination.ts  
│   └── template.ts  
├── views/  
│   └── TemplatesView.vue  
└── main.ts  
```

---

## ⚙️ Setup

1. **Create environment file**

```
VITE_API_BASE_URL=
VITE_API_TENANT=
```

2. **Install dependencies**

```
    npm install
```

3. **Run development server**

```
    npm run dev
```

4. **Build for production**

```
    npm run build
```

### Requirements

- Node.js version 22.15 or higher  
- npm or yarn package manager  
