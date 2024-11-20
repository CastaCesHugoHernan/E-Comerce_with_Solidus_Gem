document.addEventListener("DOMContentLoaded", function () {
    const avatarImage = document.getElementById("avatar-image");
  
    // Cambiar imagen cuando el chatbot "habla"
    function setAvatarExpression(expression) {
      avatarImage.src = `/assets/chatbot/${expression}.png`;
    }
  
    // Simular respuesta del chatbot
    const sendMessageButton = document.getElementById("send-message");
    sendMessageButton.addEventListener("click", function () {
      setAvatarExpression("thinking"); // Cambiar a "pensando"
      
      // Simular respuesta después de 2 segundos
      setTimeout(() => {
        setAvatarExpression("happy"); // Cambiar a "feliz"
      }, 2000);
    });
  });
  