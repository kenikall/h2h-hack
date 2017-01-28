class User < ApplicationRecord
  has_and_belongs_to_many :quizzes
  has_many :responses
end
