readInt :: String -> Int
readInt = read

palindromic :: Int -> Int
palidnromic = readInt . reverse . show

isPalindrome :: Int -> Bool
isPalindrome n
  | n == palindromic n = True
  | otherwise = False

palindromes = [x | x <- [1..], isPalindrome n]
