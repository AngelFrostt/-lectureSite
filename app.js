//пример с поиском и сортировкой

const prepods = [
    { name: "Проектирование и разработка веб-приложений, Дывыдов Д О", category: "prog" },
    { name: "Обеспечение безопасности веб-приложений, Гусев И О", category: "prog" },
    { name: "Численные методы, Гапонова М А", category: "math" },
    { name: "Компьютерные сети, Обрубов Д О", category: "prog" },
    { name: "Математика, Муравьева З А", category: "math" },
    { name: "Численные методы, Аронова И Н", category: "math" },
    { name: "Стандартизация, сертификация и техническое документирование, Коршунова В М", category: "gumtar" },
    { name: "Основы философии, Гасанова О А", category: "gumtar" }
];

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const teatherDiv = document.getElementById("teather");

function teathers() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    //логика фильтрации
    const filteredTeather = prepods.filter(prepod => {
        const matchesSearch = prepod.name.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === "all" || prepod.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    teatherDiv.innerHTML = filteredTeather.map(prepod => 
        `<div class='teather'>${prepod.name}</div>`
    ).join("");
}

searchInput.addEventListener("input", teathers);
categorySelect.addEventListener("change", teathers);

teathers(); 

//пример найти слова, где больше 6 букв

const words = ["яблоко", "трамвай", "гиппопотомонстросескипедалофобия", "клавиатура", "сыр"];
        
        function filterWords() {
            const result = words.filter((word) => word.length > 6);
            document.getElementById("result__one").textContent = `Найдено: ${result.join(", ")}`;
        }


//пример поиск по ф и

const names = ["яблоко", 
  "Антонов Максим ", 
  "Безрукова Ксения ", 
  "Бодрова Арина ", 
  "Васильев Степан ", 
  "Волков Павел ",
  "Выборнов Александр ",
  "Выборнов Дмитрий",
  "Гендеров Максим (он же в академе!)",
  "Еремин Руслан ",
  "Зайцев Артём ",
  "Камардина Эмма ",
  "Миненко Кирилл ",
  "Морозова Ангелина ",
  "Музыка Алексей ",
  "Мухин Андрей ",
  "Наумова Анастасия ",
  "Новикова Элла ",
  "Нуруллина Сафия ",
  "Панин Александр ",
  "Разинков Антон ",
  "Темчура Анастасия ",
  "Утин Кирилл ",
  "Фунин Антон ",
  "Хамидуллова Милена ",
  "Хохлов Илья "
];

function search() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const filteredNames = names.filter(names => names.toLowerCase().includes(input));

  const resultElement = document.getElementById("result__two");
  if (filteredNames.length > 0) {
    resultElement.innerHTML = `Найдено: ${filteredNames.join(", ")}`;
  } else {
    resultElement.textContent = "Такого у нас нету";
  }
}

