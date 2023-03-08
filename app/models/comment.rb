class Comment < ApplicationRecord
    belongs_to :movie, dependent: :destroy
    belongs_to :user, dependent: :destroy

    validates :text, presence: true
end
