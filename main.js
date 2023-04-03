let chatcomponent = document.querySelector(".wrapper");

chatcomponent.innerHTML += ` 
       <div> 
         <div class="badge">5</div>
         <svg class="bubble" viewBox="0 0 77 75" fill="none" >
                <ellipse cx="38.5" cy="37.5" rx="38.5" ry="37.5" fill="#0024E4"/>
                <g clip-path="url(#clip0_0_1)">
                <path d="M38.246 34.636C37.8132 34.6396 37.3908 34.8264 37.0321 35.1728C36.6735 35.5191 36.3946 36.0095 36.2308 36.582C36.0669 37.1545 36.0254 37.7836 36.1114 38.3898C36.1974 38.9961 36.4072 39.5523 36.7142 39.9884C37.0211 40.4245 37.4116 40.7209 37.8363 40.8402C38.2611 40.9595 38.701 40.8964 39.1007 40.6588C39.5003 40.4213 39.8418 40.0199 40.082 39.5053C40.3222 38.9907 40.4504 38.386 40.4504 37.7674C40.4486 36.9344 40.2154 36.1366 39.802 35.5493C39.3886 34.9621 38.8289 34.6335 38.246 34.636ZM31.1511 34.636C30.7183 34.6396 30.2959 34.8264 29.9372 35.1728C29.5786 35.5191 29.2998 36.0095 29.1359 36.582C28.972 37.1545 28.9305 37.7836 29.0165 38.3898C29.1026 38.9961 29.3123 39.5523 29.6193 39.9884C29.9263 40.4245 30.3167 40.7209 30.7415 40.8402C31.1662 40.9595 31.6061 40.8964 32.0058 40.6588C32.4054 40.4213 32.7469 40.0199 32.9871 39.5053C33.2273 38.9907 33.3555 38.386 33.3555 37.7674C33.3538 36.9345 33.1206 36.1367 32.7072 35.5494C32.2939 34.9622 31.7342 34.6336 31.1514 34.636H31.1511ZM45.3424 34.636C44.9095 34.6396 44.4871 34.8264 44.1285 35.1728C43.7698 35.5191 43.491 36.0095 43.3271 36.582C43.1633 37.1545 43.1217 37.7836 43.2078 38.3898C43.2938 38.9961 43.5035 39.5523 43.8105 39.9884C44.1175 40.4245 44.508 40.7209 44.9327 40.8402C45.3574 40.9595 45.7974 40.8964 46.197 40.6588C46.5967 40.4213 46.9382 40.0199 47.1784 39.5053C47.4186 38.9907 47.5468 38.386 47.5468 37.7674C47.5459 37.355 47.4882 36.9468 47.3769 36.5662C47.2657 36.1856 47.1031 35.84 46.8984 35.5493C46.6937 35.2585 46.4509 35.0282 46.1839 34.8714C45.917 34.7147 45.631 34.6347 45.3424 34.636ZM55.2223 29.5578C54.2244 27.3389 52.8257 25.3747 51.0675 23.7179C47.6703 20.5218 43.2066 18.7609 38.4986 18.7609C36.9472 18.7583 35.3987 18.9536 33.8716 19.3444C32.9175 18.0332 31.8484 16.9043 30.6913 15.9858C26.4033 12.926 22.6246 14.0653 20.7153 15.0484C20.5706 15.1215 20.4411 15.2452 20.3385 15.4083C20.236 15.5713 20.1637 15.7685 20.1282 15.9818C20.0927 16.1951 20.0952 16.4177 20.1354 16.6292C20.1756 16.8408 20.2523 17.0346 20.3584 17.1929C21.705 19.1827 23.9327 23.1154 23.3852 26.6911C21.2563 29.803 20.102 33.5553 20.102 37.4623C20.102 41.4437 21.2563 45.196 23.3852 48.3079C23.9329 51.8839 21.7052 55.8184 20.3587 57.8081C20.2527 57.9663 20.1762 58.1599 20.1361 58.3713C20.096 58.5827 20.0936 58.8051 20.1291 59.0181C20.1645 59.2312 20.2368 59.4281 20.3393 59.591C20.4417 59.7539 20.5711 59.8775 20.7155 59.9506C22.6249 60.9336 26.4036 62.0754 30.6929 59.0143C31.8501 58.0956 32.9191 56.9666 33.8733 55.6555C35.4003 56.0464 36.9487 56.2418 38.5 56.2394C43.2093 56.2394 47.6729 54.4807 51.0689 51.2847C52.8271 49.6279 54.2258 47.6655 55.2236 45.4447C56.3355 42.9732 56.8982 40.3118 56.8982 37.5387C56.8968 34.691 56.3341 32.0317 55.2223 29.5582V29.5578ZM38.3065 51.6276C36.3672 51.6358 34.4355 51.2808 32.5608 50.5719L31.2678 52.3521C30.5501 53.336 29.7486 54.1867 28.8822 54.8843C27.8278 55.6389 26.6831 56.102 25.5084 56.2493C25.5715 56.0868 25.6292 55.9223 25.6909 55.7577C26.9867 52.3502 27.3363 49.2879 26.7396 46.5708C24.6203 44.1876 23.3493 41.1365 23.3493 37.8134C23.3493 30.1851 30.0462 24.0008 38.3065 24.0008C46.5667 24.0008 53.2649 30.1855 53.2649 37.8134C53.2649 45.4427 46.5681 51.6276 38.3065 51.6276Z" fill="#FBFBFB"/>
                </g>
                <defs>
                <clipPath id="clip0_0_1">
                <rect width="37" height="47" fill="white" transform="translate(20 14)"/>
                </clipPath>
                </defs>
            </svg>
       </div>
        <div class="livechat"  >

            <div class="head">
                <h4>Live chat</h4>
                <svg class="exit" viewBox="0 0 21 21" fill="none" >
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#5C59F1"/>
                    <path d="M14.7355 7.41211C15.0871 7.0459 15.0871 6.45117 14.7355 6.08496C14.3839 5.71875 13.813 5.71875 13.4614 6.08496L10.4999 9.17285L7.53551 6.08789C7.18394 5.72168 6.61301 5.72168 6.26144 6.08789C5.90988 6.4541 5.90988 7.04883 6.26144 7.41504L9.22582 10.5L6.26426 13.5879C5.91269 13.9541 5.91269 14.5488 6.26426 14.915C6.61582 15.2813 7.18676 15.2813 7.53832 14.915L10.4999 11.8271L13.4643 14.9121C13.8158 15.2783 14.3868 15.2783 14.7383 14.9121C15.0899 14.5459 15.0899 13.9512 14.7383 13.585L11.7739 10.5L14.7355 7.41211Z" fill="white"/>
                </svg>      
                    
            </div>
            <div class="content">
                <div class="chat">
                 
                </div>
                <form class="send-container">
                    <input type="text" name="message" plyaceholder="Your message..." >
                    <input type="submit" value="Send">
                </form>
            </div>
        </div>`;

let form = document.querySelector(".send-container");
let bubbe = document.querySelector(".bubble");
let exit = document.querySelector(".exit");
let livechat = document.querySelector(".livechat");
let chat = document.querySelector(".chat");
const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
const socket = io("http://localhost:5001");

let con = socket?.on("connection", () => "connected");

bubbe.addEventListener("click", () => {
  livechat.classList.remove("animate-exit");
  livechat.classList.add("animate-chat");
});

exit.addEventListener("click", () => {
  livechat.classList.add("exit-chat");
  livechat.classList.remove("animate-badge")
  livechat.classList.remove("animate-chat");
});
function getMessage(obj) {
 
  let message = document.createElement("div");

  if (obj.answer) {
    
      message.innerHTML = `
              <div class="messageoOperator">
                  <div class="name">${obj?.user}</div>
                  <div class="msg">${obj.answer}</div>
              </div>`;
  
      chat.appendChild(message);
  } 
  chat.scrollTop = chat.scrollHeight;
  // a.addEventListener('click', () => {
  //   console.log(obj.role)
  // })
}
socket.on("chatbot", function ({data}) {
  console.log("mess", data);
  livechat.classList.add("animate-badge")
  getMessage(data);
  //
});
const userConfig = {key:'', style:''}
const Chatclient = async (e) => {
    userConfig.key = e
}
const handleSubmit = async (e) => {
  e.preventDefault();
  socket.emit("joinRoom", uint32.toString(16));
  const data = new FormData(form).get("message");
  if (!userConfig.key) return console.log("please add your chat key")
  if (data) {
    let message = document.createElement("div");

    let value = {key:userConfig.key, user: uint32.toString(16), message: data, respond:'' };
    console.log('value', value)
    message.innerHTML = `
             <div class="messageUser">
                <div class="name">Me</div>
                <div class="msg">${value.message}</div>
             </div>
            `;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
    socket.emit("chatbot", value);
  }
  form.reset();
};
form.addEventListener("submit", handleSubmit);
