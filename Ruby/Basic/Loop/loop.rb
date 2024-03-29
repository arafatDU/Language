# Looping using 'while' loop
counter = 0
while counter < 5 do
  puts "Counter: #{counter}"
  counter += 1
end


x = 4
while x >= 1
  puts "Arafat"
  x = x - 1
end


# Looping using 'for' loop
for i in 0..4 do
  puts "Index: #{i}"
end


arr = ["GFG", "G4G", "Geeks", "Sudo"]
for i in arr do
  puts i
end

# Looping using 'each' loop
array = [1, 2, 3, 4, 5]
array.each do |element|
  puts "Element: #{element}"
end


# Looping using 'times' loop
5.times do |i|
  puts "Index: #{i}"
end


# Ruby 'until' loop
var = 7

until var == 11 do
  puts var * 10
  var = var + 1
end
