class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :show_id, :text
end
