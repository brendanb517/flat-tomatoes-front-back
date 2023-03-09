class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :comments
  hs_many :movies
end
