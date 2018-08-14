class Note < ApplicationRecord
  belongs_to :user, optional: true
end
