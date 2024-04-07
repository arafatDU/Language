t = gets.chomp.to_i
t.times do
  x = gets.chomp.to_i
  ans = 0
  if x <= 45
    if x <= 9
      puts x
    else
      i = 0
      while x > 0
        if x < (9-i)
          ans += (x*(10**i))
        else
          ans += (9-i)*(10**i)
        end
        x = x - (9 - i)
        i += 1
      end
      puts ans

    end
  else
    puts -1
  end
end
