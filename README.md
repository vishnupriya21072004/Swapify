
## 👥 Team Name: Miniminds

### 👩‍💻 Team Members
- Aneeta Biju – College of Engineering Karunagappally  
- Vishnupriya V – College of Engineering Karunagappally
- project name : Swapify

# 📌 Project Description

Swapify is a peer-to-peer Skill Exchange Platform that allows users to share and learn skills without monetary transactions. Users can register, log in, add their skills, browse other users’ skills, and connect for mutual learning.  

The platform promotes collaborative growth, knowledge sharing, and community-driven learning by enabling individuals to exchange expertise in various domains such as technology, arts, academics, and more.


# 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend & Database:** Supabase (PostgreSQL)  
- **Version Control:** Git & GitHub  
- **Deployment:** Vercel  


# ✨ Features 

1. ✅ User Registration & Login Authentication  
2. ✅ Secure Authentication using Supabase  
3. ✅ Add New Skills  
4. ✅ Browse Available Skills  
5. ✅ Skill Categorization  
6. ✅ User-Specific Skill Management  
7. ✅ Responsive UI Design  
8. ✅ Database Integration with Foreign Key Relationships  



# ⚙ Installation Commands

Clone the repository:

```bash
git clone https://github.com/vishnupriya21072004/Swapify.git
cd Swapify
```

If using Node.js (optional future enhancement):

```bash
npm install
```

---

# ▶ Run Commands

### Option 1: Run Locally
Open `index.html` directly in your browser.

### Option 2: Using Live Server (Recommended)
1. Open project in VS Code  
2. Install **Live Server** extension  
3. Right click `index.html`  
4. Click **Open with Live Server**

### Option 3: Deployed Version
Access the live application through the Vercel deployment link.

---

# 📸 Screenshots 

![Home page]<img width="1920" height="2989" alt="screencapture-swapify-zeta-vercel-app-2026-02-21-10_46_29" src="https://github.com/user-attachments/assets/de3c6057-4da2-42d8-95a8-ca75af17cf47" />
![Register page]<img width="1914" height="969" alt="Screenshot 2026-02-21 104700" src="https://github.com/user-attachments/assets/2f71647c-6a2e-4ad5-931f-d2ffb86022cf" />
![Login page]<img width="1594" height="842" alt="Screenshot 2026-02-21 104722" src="https://github.com/user-attachments/assets/ff212ced-9e4f-44a3-9d52-dd7fb833299c" />
![Browse Skills Page]<img width="1917" height="968" alt="Screenshot 2026-02-21 104828" src="https://github.com/user-attachments/assets/8b4d0756-cebd-417a-89d1-e84c6ce90a60" />



# 🎥 Demo Video Link

https://github.com/user-attachments/assets/dadf69c9-06cd-4c72-9e03-ddfb7478c0e7

# 🏗 Architecture Diagram

## Architecture Overview
<img width="1536" height="1024" alt="ChatGPT Image Feb 21, 2026, 11_13_51 AM" src="https://github.com/user-attachments/assets/5a1f257d-edbd-4c54-a9ff-a3e4f765d1e3" />


# 📡 API Documentation (Backend: Supabase)

## 🔐 Authentication APIs Used

- User Sign Up  
- User Login  
- Session Handling  
- Logout  

## 🗄 Database Tables

### 1️⃣ users Table

| Column Name | Type | Description |
|-------------|------|------------|
| id | UUID (Primary Key) | Unique User ID |
| name | Text | User Name |
| email | Text | User Email |
| phone | Text | Contact Number |


### 2️⃣ skills Table

| Column Name | Type | Description |
|-------------|------|------------|
| id | UUID (Primary Key) | Unique Skill ID |
| skill_name | Text | Name of Skill |
| category | Text | Skill Category |
| description | Text | Skill Description |
| added_by | UUID (Foreign Key → users.id) | Skill Owner |
| created_at | Timestamp | Skill Creation Time |

---

# 👩‍💻 Team Members

- **Aneeta Biju**  
  College of Engineering Karunagappally  

- **Vishnupriya V**  
  College of Engineering Karunagappally  

---

# 📄 License Info

This project is developed for academic and hackathon purposes.

MIT License

Copyright (c) 2026 Miniminds

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
