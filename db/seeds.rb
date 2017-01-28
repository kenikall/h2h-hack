User.delete_all
Question.delete_all
Quiz.delete_all
Response.delete_all

User.create( name: 'Alex')
User.create( name: 'Kelvin')
User.create( name: 'Mannah')
User.create( name: 'Nick')

Quiz.create( name: 'Algorithms', date: Date.new(2017,01,15), users: User.all)
Quiz.create( name: 'Ruby', date: Date.new(2017,01,13), users: User.all)
Quiz.create( name: 'JavaScript', date: Date.new(2017,01,12), users: User.all)
Quiz.create( name: 'JQuery', date: Date.new(2017,01,10), users: User.all)
Quiz.create( name: 'Markdown', date: Date.new(2017,01,10), users: User.all)
Quiz.create( name: 'Ajax', date: Date.new(2017,01,07), users: User.all)
Quiz.create( name: 'API', date: Date.new(2017,01,07), users: User.all)
Quiz.create( name: 'React', date: Date.new(2017,01,05), users: User.all)
Quiz.create( name: 'Ember', date: Date.new(2017,01,03), users: User.all)
Quiz.create( name: 'html', date: Date.new(2017,01,03), users: User.all)

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

Quiz.create( name: 'New Quiz', date: Date.new(2017,01,03))
Question.create( text: 'Question 1', quiz_id: Quiz.last.id)

