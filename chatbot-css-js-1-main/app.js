const chatBody = document.querySelector(".chat-body");//va returner le premier element de la classe donnee
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const entrainel =document.querySelector(".entrain");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  const ma =existe(userInput);
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  toggletloading(false);
  setTimeout(() => {
    renderChatbotResponse(ma);
    setScrollPosition();
    toggletloading(true);
  }, 1200);
  
};

const renderChatbotResponse = (ma) => {
  var you =getChatbotResponse(ma);
  renderMessageEle(you);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  var d =new Date();
  var date=d.getHours()+":"+d.getMinutes();
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className );
  messageEle.append(txtNode);
  messageEle.append('\r\r');
  chatBody.append(messageEle);
  chatBody.append(date);
};

const getChatbotResponse = (ma) => {
  if(responseObj[ma] == undefined){
return "Please try something else"
  }
  else{
  return  responseObj[ma];
  }
   
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};
function existe (userInput){
    var tab=userInput.split(" ");
    
    for(i=0;i<table.length;i++){
      if(tab.includes(table[i])){
          var resu=table[i];
          break;
      }
     
    } 
    return resu;
    
  };
  const toggletloading=(show)=>entrainel.classList.toggle("hide",show);