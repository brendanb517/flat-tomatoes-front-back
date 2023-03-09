class MovieCommentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :poster, :year, :plot, :genre, :upvotes, :downvotes
  has_many :comments
end
