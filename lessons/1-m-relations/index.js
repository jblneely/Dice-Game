var db = require('./models');

module.exports =

    // db.author.create({
    //     name: 'bowman'
    // })

    // db.author.find({
    //     where: { name: 'reno' }
    // }).then(function(author) {
    //     console.log(author.name);
    //     author.createPost()
    // });

    db.author.findById(2).then(function(author) {
            console.log(post.title);
            author.addPost({
                where:
            })


            db.author.findOne({
                    where: { name 'reno' },
                    include[db
                    }]


            })
    })


//ways to add a post to an author/


db.post.create({
        title: 'blah',
        content: 'more blah'

    }).then(function(post) {
            db.author.find({
                where: { name: "Connor" }
            }).then(function(author) {
                    author.addPost(post);

                }

            })
