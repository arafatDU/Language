my_string = "This is my string"

puts my_string
puts my_string.class
# puts my_string.methods
puts my_string[0]
puts my_string[0, 3]
puts my_string[0..3]
puts my_string[0, my_string.length]
puts my_string[-1]


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
puts "Empty method: " + my_string.empty?.to_s
