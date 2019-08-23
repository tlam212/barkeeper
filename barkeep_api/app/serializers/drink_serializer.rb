class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe, :image
  has_many :reviews
end
