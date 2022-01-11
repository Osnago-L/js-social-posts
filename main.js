const date = new Date()
const dd = date.getDate()
const mm = (date.getMonth() + 1)
const yyyy = date.getFullYear();

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=15",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=171"
        },
        "likes": 80,
        "created": date
        
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=10",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=112"
        },
        "likes": 120,
        "created": date
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=20",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=234"
        },
        "likes": 78,
        "created": date
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": ""
        },
        "likes": 56,
        "created": date
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=29",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=534"
        },
        "likes": 95,
        "created": date
    }
];



for (let i = 0; i < posts.length; i++) {
    createPosts(i)
    const noProfileDefault = document.querySelectorAll(".post-meta__icon");
        if(posts[i].author.image == ""){
            let defaultName = posts[i].author.name.split(" ");
            
            noProfileDefault[i].classList.add("profile-pic-default");
            noProfileDefault[i].innerHTML=`<span>${defaultName[0].charAt(0)}${defaultName[1].charAt(0)}</span>`;
            
        };
    
}

const likesbuttons = document.querySelectorAll(".like-button");
const likesTot = document.querySelectorAll(".js-likes-counter");
const dateFormat = document.querySelectorAll(".post-meta__time");


 for (let i = 0; i < posts.length; i++) {
    likesbuttons[i].addEventListener("click",function(){

        if(this.classList.contains("like-button--liked")){

            this.classList.remove("like-button--liked");
            likesTot[i].innerHTML--;
            dateFormat[i].innerHTML= `${mm}/${dd}/${yyyy}`;

        }else{

            this.classList.add("like-button--liked");
            likesTot[i].innerHTML++;
            dateFormat[i].innerHTML= `${dd}/${mm}/${yyyy}`;
        }
    }); 
 }
