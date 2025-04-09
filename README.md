# 🪪 Smart Student ID Generator

A ReactJS web app for generating smart student ID cards with QR codes and downloadable images — built as part of the Unity Internship Assignment.

## 🚀 Live Demo

🌐 [Click here to view the deployed site](https://idgenerator2903.netlify.app/)  

---

## 📸 Features

✅ Fill in student details using a form  
✅ Upload student photo with live preview  
✅ Generate smart ID card with:
- Student info
- QR code (containing full student JSON data)
- Allergy display
- Rack & Bus route info

✅ Template switching between 2 designs  
✅ Download ID card as PNG  
✅ (Bonus) Save cards to localStorage and view/download older ones

---

## 💻 Tech Stack

- **ReactJS (v18+)**
- **TailwindCSS** for UI styling
- `qrcode.react` for generating QR codes
- `html-to-image` for downloading ID card as PNG
- `localStorage` for saving card history (bonus feature)

---

## 🧠 Thought Process

This project simulates a real-world student ID generator with features like live previews, dynamic QR encoding, and responsive template design. Care was taken to ensure:
- Clean, intuitive UX
- Modular, reusable components
- Scalable structure for additional templates or data fields

---


## 📁 Folder Structure

```bash
smart-student-id-generator/
│
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
