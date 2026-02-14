function checkVibe() {
    let text = document.getElementById("text").value;

    fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText =
            "Vibe: " + data.sentiment;
    });
}
