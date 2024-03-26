my_string = "This is my string"

puts my_string

puts "Size method: " + my_string.size.to_s
puts "Length method: " + my_string.length.to_s

puts "Upcase method: " + my_string.upcase
puts "Downcase method: " + my_string.downcase
puts "Capitalize method: " + my_string.capitalize
puts "Swapcase method: " + my_string.swapcase
puts "Reverse method: " + my_string.reverse
puts "Reverse method: " + my_string.reverse.upcase
puts "Include method: " + my_string.include?("my").to_s
puts "Include method: " + my_string.include?("your").to_s
puts "Split method: " + my_string.split(" ").to_s
puts "Split method: " + my_string.split("i").to_s
puts "Split method: " + my_string.split("i").join("I")
puts "Split method: " + my_string.split("i").join("I").split("I").join("i")
puts "Concat method: " + my_string.concat(" - Concatenated")
