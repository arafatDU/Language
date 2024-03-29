# This is an example of next statement in Ruby
for t in 0...10

  if t == 5 then
    # using next statement
     next
  end

  puts t
end



# This is an example of redo statement in Ruby
val = 0
# using while loop which should give
# output as 0,1,2,3 but here it will
# output as 0,1,2,3,4
while(val < 4)
# Control returns here when
# redo will execute
  puts val
  val += 1

  redo if val == 4
end


# This is an example of retry statement in Ruby
var = 7

# Iterate 7 times from 0 to 7-1
var.times do |val|
  puts val
  if val == 6
    # Decrement val and user won't
    # reach 6  next time
    var = var - 1
    # Restart the iteration
    # using retry statement
    retry
  end

end
