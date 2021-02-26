let newsUL = document.getElementById("newsUL")

function nullCheck(label) {
    if(label == null){
        return ""

    }else{
        return label 
    }

}

function nullCheckImage(label) {
    if(label == null){
        return "https://tinyurl.com/y5fcqdr6"

    }else{
        return label 
    }

}

function displayNews () {
    for(let index = 0; index < news.articles.length; index++){
        let article = news.articles[index]
        console.log(article.author)

        let newsarticleItems = `
                        <li id="newsarticle-items">
                            <i class= "authorName">${nullCheck(article.author)}</i>
                            <b class="title">${nullCheck(article.title)}</b>
                            <i class="discription">${nullCheck(article.descritption)}</i>
                            <img class="images" src="${nullCheckImage(article.urlToImage)}">
                            <i class="publishedAt">${nullCheck(article.publishedAt)}</i>      
                        </li>

        `
        newsUL.insertAdjacentHTML("beforeend" , newsarticleItems)
    }
}

displayNews()