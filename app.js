
const forumContainer = document.getElementById("forum-container")

const allPost = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    const data = await res.json()

    data.posts.forEach((item) => {
        console.log(item);

        const div = document.createElement("div")
        div.classList=("col-span-2")
        div.innerHTML = `
        <div class="">
        <div class="flex  bg-[#797dfc1a] rounded-lg p-4 gap-2 mb-4">
            <div>
                <img class="absolute left-[26px] lg:left-[64px]" src="./images/Status.png" alt="">
                <img src="./images/Rectangle 4.png" alt="">
            </div>
            <div>
                <span># ${item.category}</span> <span>Author : ${item.author.name}</span>
                <h2 class="text-xl font-bold mb-3">${item.title}</h2>
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
                    <div><img src="./images/Group40.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
`

        forumContainer.appendChild(div)


    })
}
allPost()