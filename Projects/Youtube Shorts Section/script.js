const reels = [
  {
    username: "cyberlight",
    likeCount: 12450,
    isLiked: false,
    commentCount: 342,
    caption: "Late night coding hits different 💻🌙",
    video: "./Videos/206294_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "darkvibes",
    likeCount: 8930,
    isLiked: true,
    commentCount: 120,
    caption: "Moody edits + synthwave 🔥",
    video: "./Videos/214669_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/45.jpg",
    shareCount: 98,
    isFollowed: false
  },
  {
    username: "travelwithme",
    likeCount: 45231,
    isLiked: false,
    commentCount: 1023,
    caption: "Somewhere in the mountains 🏔️",
    video: "./Videos/228847_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 540,
    isFollowed: true
  },
  {
    username: "fitnesspro",
    likeCount: 22340,
    isLiked: true,
    commentCount: 876,
    caption: "Push your limits every day 💪",
    video: "./Videos/229521_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/75.jpg",
    shareCount: 320,
    isFollowed: false
  },
  {
    username: "foodiegram",
    likeCount: 18900,
    isLiked: false,
    commentCount: 430,
    caption: "Street food therapy 🍜",
    video: "./Videos/258799_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/68.jpg",
    shareCount: 145,
    isFollowed: true
  },
  {
    username: "techdaily",
    likeCount: 9900,
    isLiked: false,
    commentCount: 210,
    caption: "New setup reveal 🖥️✨",
    video: "./Videos/264272_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/12.jpg",
    shareCount: 88,
    isFollowed: false
  },
  {
    username: "artlover",
    likeCount: 15670,
    isLiked: true,
    commentCount: 512,
    caption: "Digital art process 🎨",
    video: "./Videos/283431_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/25.jpg",
    shareCount: 199,
    isFollowed: true
  },
  {
    username: "speedrider",
    likeCount: 30780,
    isLiked: false,
    commentCount: 999,
    caption: "Night ride vibes 🏍️",
    video: "./Videos/284568_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/90.jpg",
    shareCount: 410,
    isFollowed: false
  },
  {
    username: "minimalmind",
    likeCount: 11220,
    isLiked: true,
    commentCount: 256,
    caption: "Minimal lifestyle 🌿",
    video: "./Videos/307864_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/14.jpg",
    shareCount: 77,
    isFollowed: true
  },
  {
    username: "gamerszone",
    likeCount: 54000,
    isLiked: false,
    commentCount: 2045,
    caption: "Clutch moment 🎮🔥",
    video: "./Videos/326081_small.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    shareCount: 890,
    isFollowed: false
  }
];

let sum = ''
reels.forEach(function(details){
 
    sum += `<div class="reel">
                    <video autoplay loop muted src="${details.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${details.userProfile}">
                            <h4>${details.username}</h4>
                            <button>${details.isFollowed?'unfollow':' Follow'}</button>
                        </div>
                        <h3>${details.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon">${details.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6>${details.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment"><i class="ri-chat-4-line"></i></h4>
                            <h6>${details.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${details.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                            <h6></h6>
                        </div>
                    </div>
                </div>`

})


let allreel = document.querySelector('.all-reel')
allreel.innerHTML = sum


let likeIcon = document.querySelectorAll(".like i")
let likeCountElem = document.querySelectorAll('.like h6')

 

likeIcon.forEach(function(heart,index){
  heart.addEventListener("click", function(){
    
    
        if(reels[index].isLiked == true){
          reels[index].isLiked = false
          reels[index].likeCount--
          heart.classList.add("ri-heart-line")
          heart.classList.remove("ri-heart-fill")
          
          
          // console.log("-1")
          
        }
        else if(reels[index].isLiked == false){
          reels[index].isLiked = true
          reels[index].likeCount++
          heart.classList.remove("ri-heart-line")
          heart.classList.add("ri-heart-fill")

          // console.log("+1")
        
        }
        likeCountElem[index].innerHTML = reels[index].likeCount
     })
})

