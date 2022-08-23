class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :description, :buyer_id, :seller_id
end
