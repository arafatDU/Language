puts "Conditional in Ruby"

# Conditional in Ruby
puts "Hello" == "Hello"
puts "Hello" == "hello"
puts "Hello".eql?("Hello")

# multiline comment
=begin

if conditional [then]
   code...
[elsif conditional [then]
   code...]...
[else
   code...]
end

=end



x = 1
if x > 2
  puts "x is greater than 2"
elsif x <= 2 and x != 0
  puts "x is 1"
else
  puts "I can't guess the number"
end



# Ruby if modifier
$debug = 1
print "debug\n" if $debug

# Ruby unless statement
x = 1
unless x >= 2
  puts "x is less than 2"
else
  puts "x is greater than 2"
end

# Ruby unless modifier
$var =  1
print "1 -- Value is set\n" if $var
print "2 -- Value is set\n" unless $var

# Ruby case statement
$age =  5
case $age
when 0 .. 2
  puts "baby"
when 3 .. 6
  puts "little child"
when 7 .. 12
  puts "child"
when 13 .. 18
  puts "youth"
else
  puts "adult"
end

# Ruby case statement modifier
$age =  5
case $age
when 0 .. 2 then puts "baby"
when 3 .. 6 then puts "little child"
when 7 .. 12 then puts "child"
when 13 .. 18 then puts "youth"
else puts "adult"
end
