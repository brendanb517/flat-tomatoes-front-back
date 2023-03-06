class MovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :poster, :year, :plot, :genre, :upvotes, :downvotes
end
