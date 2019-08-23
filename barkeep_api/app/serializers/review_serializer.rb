class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :comment
  belongs_to :drink
end
