// let main_text_area = document.querySelector(".Main_textarea");
let send_button = document.querySelector(".sendButton");

send_button.addEventListener("click", () => {
    // main_text_area.innerHTML
    // run(main_text_area.innerHTML);
if((document.querySelector(".Main_textarea").value) != ""){
    const utterance = new SpeechSynthesisUtterance("");
    // Optional: Set properties like language, pitch, rate, volume
    utterance.lang = 'en-US';  // Language
    utterance.pitch = 1;       // Pitch (0-2)
    utterance.rate = 1;        // Speed of speech (0.1-10)
    utterance.volume = 1;      // Volume (0-1)
    window.speechSynthesis.speak(utterance);
}
});

// const generativeAI = window.google.generativeai({
//     apiKey: "AIzaSyANOLwAhrItMbthvQRY9XE1P9HatdsKVCc",
//   });

// export async function run(prompt) {
//   // For text-only input, use the gemini-pro model
//   const response = await generativeAI.generateText({
//     prompt: prompt,
//     maxLength: 200,
//   });
//   console.log(response.text);

  const utterance = new SpeechSynthesisUtterance("Hello there, How can i assist you today! Please type your question and i will try to answer it for you.");
        // Optional: Set properties like language, pitch, rate, volume
        utterance.lang = 'en-US';  // Language
        utterance.pitch = 1;       // Pitch (0-2)
        utterance.rate = 1;        // Speed of speech (0.1-10)
        utterance.volume = 1;      // Volume (0-1)
        
        // Speak the text
    window.speechSynthesis.speak(utterance);

//   console.log(text);
// }

// // run();