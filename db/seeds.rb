User.delete_all
Question.delete_all
Quiz.delete_all
Response.delete_all

User.create( name: 'Alex')
User.create( name: 'Kelvin')
User.create( name: 'Mannah')
User.create( name: 'Nick')

User.all.each do |user|
  Quiz.create( name: 'Algorithms', date: Date.new(2017,01,15), user_id: user.id)
  Quiz.create( name: 'Ruby', date: Date.new(2017,01,13), user_id: user.id)
  Quiz.create( name: 'JavaScript', date: Date.new(2017,01,12), user_id: user.id)
  Quiz.create( name: 'JQuery', date: Date.new(2017,01,10), user_id: user.id)
  Quiz.create( name: 'Markdown', date: Date.new(2017,01,10), user_id: user.id)
  Quiz.create( name: 'Ajax', date: Date.new(2017,01,07), user_id: user.id)
  Quiz.create( name: 'API', date: Date.new(2017,01,07), user_id: user.id)
  Quiz.create( name: 'React', date: Date.new(2017,01,05), user_id: user.id)
  Quiz.create( name: 'Ember', date: Date.new(2017,01,03), user_id: user.id)
  Quiz.create( name: 'html', date: Date.new(2017,01,03), user_id: user.id)
end

Quiz.all.each do |quiz|
  Question.create( text: 'Question 1', quiz_id: quiz.id)
  Question.create( text: 'Question 2', quiz_id: quiz.id)
  Question.create( text: 'Question 3', quiz_id: quiz.id)
  Question.create( text: 'Question 4', quiz_id: quiz.id)
  Question.create( text: 'Question 5', quiz_id: quiz.id)
  Question.create( text: 'Question 6', quiz_id: quiz.id)
  Question.create( text: 'Question 7', quiz_id: quiz.id)
  Question.create( text: 'Question 8', quiz_id: quiz.id)
  Question.create( text: 'Question 9', quiz_id: quiz.id)
  Question.create( text: 'Question 10', quiz_id: quiz.id)
end

Question.all.each do |question|
  Response.create( path: 'wwww.google.com', correct: Random.rand(2), question_id: question.id, user_id: User.find_by(name: 'Alex').id)
  Response.create( path: 'wwww.google.com', correct: Random.rand(2), question_id: question.id, user_id: User.find_by(name: 'Nick').id)
  Response.create( path: 'wwww.google.com', correct: Random.rand(2), question_id: question.id, user_id: User.find_by(name: 'Mannah').id)
  Response.create( path: 'wwww.google.com', correct: Random.rand(2), question_id: question.id, user_id: User.find_by(name: 'Kelvin').id)
end
