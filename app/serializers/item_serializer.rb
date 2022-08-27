class ItemSerializer < ActiveModel::Serializer
    attributes :id, :name, :price, :image, :description, :user_id, :seller_id
  end