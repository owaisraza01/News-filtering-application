const cardDiv = document.getElementById("cardDiv");
const inputData = document.getElementById("inputField");

const searchNews = () => {
    console.log(inputData);
    const API_KEY = `https://newsapi.org/v2/everything?q=${inputData.value}&from=2024-11-07&sortBy=publishedAt&apiKey=d76a14cbf73641aa8316133df126655a`;

    cardDiv.innerHTML = `
        <div class="d-flex justify-content-center my-3">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`;

    fetch(API_KEY)
        .then((res) => res.json())
        .then((data) => {
            cardDiv.innerHTML = "";
            console.log(data);
            data.articles.map((e) => {
                console.log(e);
                cardDiv.innerHTML += `
                <div class="card" style="width: 18rem;">
                  <img src=${e.urlToImage} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.description}</p>
                  </div>
                </div>`;
            });
        })
        .catch((err) => {
            cardDiv.innerHTML = "<p>Failed to load news. Please try again.</p>";
            console.log(err);
        });
};
