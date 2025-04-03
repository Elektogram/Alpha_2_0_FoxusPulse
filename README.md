# 🦊 FoxusPulse

Verimlilik odaklı mobil uygulama. Görev takibi, AI destekli planlama ve puan sistemi içerir.

## 🔧 Tech Stack

- 📱 React Native / Expo + TypeScript
- 🎨 Tamagui UI (custom themes & tokens)
- 🔥 Firebase (Auth, Firestore)
- 🤖 ChatGPT API (AI destekli komutlar)

## 📁 Klasör Yapısı

```
Alpha_2_0_FoxusPulse
├─ .tamagui
│  └─ tamagui.config.json
├─ app
│  ├─ (tabs)
│  │  ├─ index.tsx
│  │  ├─ two.tsx
│  │  └─ _layout.tsx
│  ├─ +html.tsx
│  ├─ +not-found.tsx
│  ├─ modal.tsx
│  └─ _layout.tsx
├─ app.json
├─ assets
│  ├─ fonts
│  │  ├─ Manrope-VariableFont_wght.ttf
│  │  ├─ OFL.txt
│  │  ├─ README.txt
│  │  └─ static
│  │     ├─ Manrope-Bold.ttf
│  │     ├─ Manrope-ExtraBold.ttf
│  │     ├─ Manrope-ExtraLight.ttf
│  │     ├─ Manrope-Light.ttf
│  │     ├─ Manrope-Medium.ttf
│  │     ├─ Manrope-Regular.ttf
│  │     └─ Manrope-SemiBold.ttf
│  └─ images
│     ├─ adaptive-icon.png
│     ├─ favicon.png
│     ├─ icon.png
│     └─ splash-icon.png
├─ babel.config.js
├─ components
│  ├─ ui
│  │  ├─ AI
│  │  │  ├─ InputBox.tsx
│  │  │  ├─ ResponseView.tsx
│  │  │  └─ SpeechButton.tsx
│  │  ├─ Calendar
│  │  │  ├─ Day.tsx
│  │  │  ├─ Grid.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ SelectedTasks.tsx
│  │  ├─ Common
│  │  │  ├─ AppHeader.tsx
│  │  │  ├─ BottomTabBar.tsx
│  │  │  ├─ Button.tsx
│  │  │  ├─ EmptyState.tsx
│  │  │  ├─ ThemedText.tsx
│  │  │  └─ ThemedView.tsx
│  │  ├─ Rewards
│  │  │  ├─ Badge.tsx
│  │  │  ├─ Points.tsx
│  │  │  └─ ProgressBar.tsx
│  │  ├─ Settings
│  │  │  ├─ NotificationToggle.tsx
│  │  │  └─ Screen.tsx
│  │  └─ Tasks
│  │     ├─ AddButton.tsx
│  │     ├─ InputForm.tsx
│  │     ├─ TaskItem.tsx
│  │     └─ TaskList.tsx
│  ├─ useColorScheme.ts
│  └─ useColorScheme.web.ts
├─ lib
│  └─ firebase.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ tamagui.config.ts
├─ themes.ts
├─ tokens.ts
├─ tsconfig.json
└─ utils
   └─ formatDate.ts

```

---

## 🔐 Ortam Değişkenleri (.env)

Firebase gibi özel bilgiler `.env` dosyasına yazılır.  
Proje dışına sızmaması için `.gitignore` dosyasına eklenmiştir.

`.env` içeriği örneği:

EXPO_PUBLIC_FIREBASE_API_KEY=...

EXPO_PUBLIC_FIREBASE_PROJECT_ID=...

EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...

EXPO_PUBLIC_FIREBASE_APP_ID=...

> 📌 Not: Expo'da `.env` değişkenleri `EXPO_PUBLIC_` ile başlamak zorundadır!

---

## 🛠️ Projeyi Çalıştırmak

Expo ve bağımlılıkları yükleyin:

```sh
npm install
npx expo start
```

---

## 📌 Notlar

- Font olarak **Manrope** kullanılmıştır (`assets/fonts` içinde)
- UI teması **light/dark** desteği ile cihaz ayarına duyarlıdır
- `components/ui/` içinde tüm tekrar eden bileşenler özelleştirilebilir şekilde tutulur

---

## 🧑‍💻 Katkı Sağlayanlar

- Esma / Takım Lideri
- Mehmet
- İnan
- Burak
- Beyza / Mentör

---

Hazırlayan: FoxusPulse Takımı  
Destekleyen: 🦊 odak + üretkenlik için bir tilki kılavuzun olsun!
"""

readme_path = Path("/mnt/data/README.md")
readme_path.write_text(readme_content, encoding="utf-8")
readme_path.name
