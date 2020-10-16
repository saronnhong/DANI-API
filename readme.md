Deployed => https://speechboard-api.herokuapp.com/

Create new profile
https://speechboard-api.herokuapp.com/posts/

-include in body {
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
        imageUrl: req.body.imageUrl,
        coverImageUrl: req.body.coverImageUrl,
        userId: req.body.userId
}