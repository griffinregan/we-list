class User < ApplicationRecord
    has_many :items
    has_many :sellers, through: :items

    validates :name, presence: true
    validates :password, presence: true

    has_secure_password

end
