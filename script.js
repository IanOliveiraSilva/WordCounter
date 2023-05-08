const text = document.getElementById("text");
const count = document.getElementById("count");

text.addEventListener("input", () => {
    const inputText = text.value;
    const wordCount = inputText.match(/\S+/g)?.length || 0;
    const charCount = inputText.length;

    count.innerHTML = `Palavras: ${wordCount} | Caracteres: ${charCount}`;
});
