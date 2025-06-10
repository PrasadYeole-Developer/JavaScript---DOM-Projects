# JavaScript-DOM Projects
A collection of interactive web projects built with vanilla JavaScript, focusing on DOM manipulation. Perfect for beginners to practice event handling, dynamic UI updates, and creative coding!

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)

## Projects List 

| Project | Description |
|---------|------------|
| **[Background Changer](#)** | Dynamically changes webpage background color | 
| **[Downloading Animation](#)** | Simulates file download progress with animation |
| **[Friend Request Feature](#)** | Mock social media friend request UI | 
| **[IPL Winner Predictor](#)** | Randomly predicts an IPL team as winner |
| **[Music Player](#)** | Audio player with play/pause/seek controls |

## Project Details 

### 1. Background Changer
- **Tech**: `JavaScript` `DOM` `Event Listeners`
- **Features**:
  - Random RGB color generation
  - One-click background switch
- **Code Snippet**:
  ```javascript
  document.getElementById("btn").addEventListener("click", () => {
    document.body.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
  });
  
### 2. Downloading Animation
- **Tech**: CSS Animations setInterval()
- **Features**:
  - Simulated progress bar
  - Percentage counter

How to Run:

Open `index.html` in any browser

### 3. Friend Request Feature
- **Tech**: DOM Manipulation Event Delegation
- **Features**: 
  - Accept/Decline buttons
  - Request removal animation

### 4. IPL Winner Predictor
- **Tech**: Arrays Math.random()
- **Logic**:
```js
const teams = ["MI", "CSK", "RCB", "KKR"];
const winner = teams[Math.floor(Math.random() * teams.length)];
```

How to Use 
Clone the repo:

```bash
git clone https://github.com/PrasadYeole-Developer/JavaScript---DOM-Projects.git
```

Navigate to any project folder:

```bash
cd Background-Changer
```
Open `index.html` in your browser.
