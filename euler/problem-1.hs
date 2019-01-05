{-
Solution for problem 1 of the euler project.
https://projecteuler.net/problem=1
-}

euler1 :: Int -> Int
euler1 x = sum [x | x <- [3..x-1], x `mod` 3 || x `mod` 5]
