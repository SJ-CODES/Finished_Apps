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
                            <br>
                            <b class="title">${nullCheck(article.title)}</b>
                            <br>
                            <i class="description">${nullCheck(article.description)}</i>
                            <br>
                            <i class="publishedAt">${nullCheck(article.publishedAt)}</i>  
                            <br> 
                            <img class="images" src="${nullCheckImage(article.urlToImage)}">
                            <br>
                              
                        </li>

        `
        newsUL.insertAdjacentHTML("beforeend" , newsarticleItems)
    }
}

displayNews()