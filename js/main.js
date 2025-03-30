const btnDarkMode = document.querySelector(".dark-mode-btn");


// 1. Проверка темной теми на уровне системних настроек

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}

// 2. Проверка темной теми в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove("dark");
}


// Если меняються системние настройки, меняем тему

window

.matchMedia("(prefers-color-scheme: dark)")
.addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

      alert('Change!!!')

    if (newColorScheme ==='dark') {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light")
    }  
    
});

// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
    
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
const darkModeBtn = document.querySelector('.dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
const projects = [
    {
      title: "Designer",
      description: "Creative design project",
      img: "./img/designer.jpg",
      link: "https://ritashaykhlislamova.github.io/designer/",
    },
    {
      title: "Simple Starter",
      description: "Basic project setup",
      img: "./img/simple-starter.jpg",
      link: "https://ritashaykhlislamova.github.io/simple-starter-main/",
    },
    {
      title: "Robot",
      description: "Fun AI project",
      img: "./img/robot.jpg",
      link: "https://ritashaykhlislamova.github.io/robot/",
    },
    {
      title: "Recipe",
      description: "Recipe sharing website",
      img: "./img/recipe.jpg",
      link: "https://ritashaykhlislamova.github.io/recipe/",
    },
    {
      title: "Test 1",
      description: "Testing new ideas",
      img: "./img/test-1.jpg",
      link: "https://ritashaykhlislamova.github.io/test-1/",
    },
    {
      title: "Travel HTML Project",
      description: "Travel website using HTML, CSS, and JS",
      img: "./img/travel.jpg",
      link: "https://ritashaykhlislamova.github.io/travel-html-project/",
    }
  ];
  
  const projectList = document.getElementById("projects-list");
  
  projects.forEach(project => {
    const li = document.createElement("li");
    li.classList.add("project");
  
    li.innerHTML = `
      <a href="${project.link}" target="_blank">
        <img src="${project.img}" alt="${project.title}" class="project__img">
        <h3 class="project__title">${project.title}</h3>
      </a>
    `;
  
    projectList.appendChild(li);
  });
  