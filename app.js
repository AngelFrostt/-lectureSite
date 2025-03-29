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
