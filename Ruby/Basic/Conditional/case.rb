# Ruby case statement

# hardcoded input
str = "two"

# using case statement
case str

when "one"
  puts 'Input is 1'

when "two"
  puts 'Input is 2'

when "three"
  puts 'Input is 3'

 when "four"
  puts 'Input is 4'

else
  puts "Default!"

end




marks = 70

case marks

# using range operators ..
when 0..32
  puts "You fail!"

when 33..40
  puts "You got C grade!"

when 41..60
  puts "You got B grade!"

else
 puts  "You got A grade!"

end





choice = "5"

# using 'case' statement
case choice

    # here 'when' statement contains
    # the two values
    when "1","2"
        puts "You order Espresso!"

    when "3","4"
        puts "You order Short Macchiato!"

    when "5","6"
        puts "You order Ristretto!"

    when "7","8"
        puts "You order Cappuccino!"

else
    "No Order!"
end




str = "GeeksforGeeks"
# str = "12345"
case

    # using match keyword to check
    when str.match(/\d/)
          puts 'String contains numbers'

    when str.match(/[a-zA-Z]/)
          puts 'String contains letters'
else
    puts 'String does not contain numbers & letters'
end
