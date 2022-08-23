require 'rails_helper'
has_many :items
has_many :sellers, through: :items

end
