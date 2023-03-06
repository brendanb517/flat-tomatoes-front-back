class Movie < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments

    validates :name, presence: true
    validates :poster, presence: true
    validates :year, presence: true
    validates :plot, presence: true
    validates :genre, presence: true
    validates :upvotes, presence: true
    validates :downvotes, presence: true
end
