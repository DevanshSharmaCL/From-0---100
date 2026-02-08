const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description: "Passionate about building interactive and scalable web applications using modern JavaScript frameworks.",
    tags: ["JavaScript", "React", "UI/UX"]
  },
  {
    fullName: "Sofia Williams",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "Digital Marketer",
    description: "Specializes in performance marketing, SEO strategy, and building strong brand presence online.",
    tags: ["SEO", "Branding", "Analytics"]
  },
  {
    fullName: "Rohan Kapoor",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    profession: "Backend Engineer",
    description: "Designs robust APIs and scalable backend systems with a strong focus on performance and security.",
    tags: ["Node.js", "Databases", "APIs"]
  },
  {
    fullName: "Emily Chen",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    profession: "Product Designer",
    description: "Creates user-centered digital experiences with clean design systems and intuitive interfaces.",
    tags: ["Figma", "Prototyping", "Design Systems"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    profession: "Mobile App Developer",
    description: "Builds cross-platform mobile apps with smooth performance and engaging user experiences.",
    tags: ["Flutter", "Android", "iOS"]
  }
];


let main = document.querySelector('main')
let img = document.querySelector('img')
let fullName = document.querySelector('h3')


let sum = ''
users.forEach(function(detail,index){
    sum += `<div class="card">
            <img src="${detail.image}">
            <h3>${detail.fullName}</h3>
            <h4>${detail.profession}</h4>
            <p>${detail.description}</p>
        </div>`
})

main.innerHTML = sum