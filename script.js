fetch('https://favqs.com/api/qotd')
    .then(data=> data.json())
    .then(quotedata =>{
        const quotetext=quotedata["quote"]["body"];
        const quoteElement=document.getElementById('quoteElement')
        quoteElement.innerHTML=quotetext + "-"+quotedata["quote"]["author"]
    })