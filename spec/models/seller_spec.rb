require 'rails_helper'
has_many :items
has_many :users, through: :items

end
