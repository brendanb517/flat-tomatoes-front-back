class User < 
    has_many :comments, dependent: :destroy
    has_many :movies, through: :comments

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :, presence: true, 


    has_secure_password
end
