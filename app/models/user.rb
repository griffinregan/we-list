class User < ApplicationRecord
    has_many :items
    has_many :sellers, through: :items
end
