const forumContainer = document.getElementById("forum-container")

document.getElementById("loading-spinner").classList.remove("hidden")

const allPost = async (input) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${input}`)
    const data = await res.json()

    setTimeout(() => {

        data.posts.forEach((item) => {
            //------------------------------------------------------
            let verified = ""
            if (item.isActive) {
                verified = `<img class="absolute left-[26px] lg:left-[64px]" src="./images/Status.png" alt="">`
            } else {
                verified = `<img class="absolute left-[26px] lg:left-[64px]" src="./images/Status2.png" alt="">`
            }
            // ---------------------------------------------------------------
            document.getElementById("loading-spinner").classList.add("hidden")

            const div = document.createElement("div")

            div.classList = ("col-span-2")
            div.innerHTML = `
        <div id="post-container">
        <div class="flex  bg-[#797dfc1a] rounded-lg p-4 gap-2 mb-4">
            <div>
                ${verified}
               <div> <img class="rounded-xl w-[72px]" src="${item.image}" alt=""></div>
            </div>
            <div>
                <span># ${item.category}</span> <span>Author : ${item.author.name}</span>
                <h2 id="title-cat" class="text-xl font-bold mb-3">${item.title}</h2>
                <p class="text-[#12132d99]">${item.description}</p>
                <hr class="disabled: py-2" />
                <div class="flex justify-between lg:w-[700px]">
                    <div class="flex gap-3 text-[#12132d99]">
                        <img src="./images/Group13.png" alt="">
                        <span>${item.comment_count}</span>
                        <img src="./images/Group16.png" alt="">
                        <span>${item.view_count}</span>
                        <img src="./images/Group18.png" alt="">
                        <span>${item.posted_time}</span>
                    </div>
                    <div onclick="titleBtn('${item.title}','${item.view_count}')" ><img src="./images/Group40.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
    `
            forumContainer.appendChild(div)
        })
    }, 2000);
}

// input btn -------------------

function searchBtn() {
    const input = document.getElementById("input").value;
    allPost(input)

}

// ------------------------------------------------
let count1 = 1;
const titleContainer = document.getElementById("title-container")

const titleBtn = (a, b = 0) => {
    document.getElementById("count").innerText = count1++
    const div = document.createElement("div")
    div.classList = ("flex justify-between shadow-2xl p-3 rounded-lg")
    div.innerHTML = `
                <div class='mb-3 '>
                <p>${a}</p>
                 </div>
                  <div class="flex gap-2 items-center">
                   <div><img src="./images/Group16.png" alt=""></div>
                    <span>${b}</span>
                </div>
`
    titleContainer.appendChild(div)
}

// ---------------------------------

const latestPostCon = document.getElementById("latest-post")
const latestPost = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const data = await res.json()

    let date = ""
    data.forEach((item) => {
        // -----------------------------------------------------------------
        if (item.author.posted_date) {
            date = `<span>${item.author.posted_date}</span>`
        } else {
            date = "Unknown"
        }
        // ----------------------------------------------------------------
        const div = document.createElement("div")
        div.innerHTML = `
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="${item.cover_image}" alt="Shoes"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <div class="flex gap-2 text-[#12132d99] "><img src="./images/Frame2.png" alt="">
                        ${date}
                        </div>
                        <h2 class="card-title font-bold">${item.title}</h2>
                        <p class="text-[#12132d99]">${item.description} </p>
                        <div class="card-actions">
                            <div><img class="rounded-xl w-[72px]"  src="${item.profile_image}" alt=""></div>
                            <div>
                                <h4 class="font-bold">${item.author.name}</h4>
                                <p class="text-[#12132d99]">${item.author.designation}</p>
                            </div>
                        </div>
                    </div>
                </div>
`
        latestPostCon.appendChild(div)
    })
}





latestPost()
allPost('Comedy')