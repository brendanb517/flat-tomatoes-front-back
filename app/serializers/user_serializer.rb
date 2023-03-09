class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password

  has_many :comments
  has_many :movies
end
