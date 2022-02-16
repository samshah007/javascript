fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => {
        const firstUser = user[0];
        console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId' + firstUser.id );
    })
    .then(response => response.json())
    .then(posts => console.log(posts));

const myAsyncFunc = async () => {
    try{
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await userResponse.json();
        const secondUser = users[1];
        console.log(secondUser);
        const secondUserPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId' + secondUser.id );
        const posts = await secondUserPosts.json();
        console.log(posts);
    }
    catch(e){
        console.log('There was a error');
    }
}