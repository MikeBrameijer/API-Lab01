$(() => {
let awwApi = $.get('https://www.reddit.com/r/aww/.json');
awwApi.then((myFunction)=>{
    console.log(myFunction);
    for(i=1;i<=10;i++){
    $(`main`).append(`<div class="container"><a href="${myFunction.data.children[i].data.url}"><img src="${myFunction.data.children[i].data.thumbnail}" /></a><p>${myFunction.data.children[i].data.title}</p></div>`);
    $(`main`).append(`<br>`);
    }
    
});
// .then(() =>{

// }).then()
// console.log(awwApi.title);


    // $.get('https://dwolverton.github.io/fe-demo/data/blog-posts.json')
    // .done((data) => {

    //     // console.log(data);

    //     console.log(data.title);
    //     console.log(data.language);
    //     console.log(data.posts.length);
    //     console.log(data.posts[0].title);
    //     data.posts.forEach(myfunction => {
    //         console.log(myfunction.title);
            
    //         console.log("tags: ")
    //         myfunction.tags.forEach((tag) =>{
    //             console.log(tag);
    //         });
    //     });


    // }).fail((error) => {
    //         console.error(error);
    // }).always(() =>{
    //     console.log("hello world");
    // });

});