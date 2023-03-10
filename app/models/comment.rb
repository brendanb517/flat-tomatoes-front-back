class Comment < ApplicationRecord
    belongs_to :movie
    belongs_to :user

    validates :text, presence: true
end
