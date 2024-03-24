puts "Welcome to the Simple Calculator Program!"

puts "Please enter the first number:"
num1 = gets.chomp.to_f

puts "Please enter the second number:"
num2 = gets.chomp.to_f

puts "Select operation: (+) Addition, (-) Subtraction, (*) Multiplication, (/) Division"
operation = gets.chomp

result = case operation
when "+"
  num1 + num2
when "-"
  num1 - num2
when "*"
  num1 * num2
when "/"
  if num2 == 0
    "Error: Division by zero"
  else
    num1 / num2
  end
else
  "Invalid operation selected"
end

puts "Result: #{result}"
