


User.create(name: "ellazondo", email: "e@gmail.com", password: "batterypark123")
User.create(name: "bob", email: "b@gmail.com", password: "rubyonrails4")
User.create(name: "chris", email: "c@gmail.com", password: "flatironschool321")

Movie.create(name: "Dazed and conused", poster: "https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_SX300.jpg", year: 1993, plot: "The adventures of high school and junior high students on the last day of school in May 1976.", genre: "comedy", upvotes: 10, downvotes: 1)
Movie.create(name: "Rocky Horror Picture Show", poster: "https://m.media-amazon.com/images/M/MV5BOGIzYjM3Yz…DNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg", year: 1975, plot: "A newly-engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.", genre: "Comedy, Horror, Musical", upvotes: 20, downvotes: 5)
Movie.create(name: "The Big Lebowski", poster: "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg", year: 1998, plot: "Ultimate L.A. slacker Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's miss...", genre: "Comedy, Crime", upvotes: 14, downvotes: 2)

Comment.create(user_id: 1, movie_id: 3, text: "OMG, loved it!")
Comment.create(user_id: 2, movie_id: 2, text: "What a gas!")
Comment.create(user_id: 3, movie_id: 1, text: "I am still laughing!")


