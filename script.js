function formatJSON() {
    try {
        const input = document.getElementById("inputJson").value;
        const parsed = JSON.parse(input);
        const formatted = JSON.stringify(parsed, null, 4);
        document.getElementById("outputJson").value = formatted;
    } catch (error) {
        alert("Invalid JSON!");
    }
}

function minifyJSON() {
    try {
        const input = document.getElementById("inputJson").value;
        const parsed = JSON.parse(input);
        const minified = JSON.stringify(parsed);
        document.getElementById("outputJson").value = minified;
    } catch (error) {
        alert("Invalid JSON!");
    }
}

function clearText() {
    document.getElementById("inputJson").value = "";
    document.getElementById("outputJson").value = "";
}
