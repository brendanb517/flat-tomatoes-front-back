class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :movies, through: :comments

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true


    has_secure_password
end
