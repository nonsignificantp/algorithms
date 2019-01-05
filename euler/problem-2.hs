{-
Solution for problem 2 of the euler project.
https://projecteuler.net/problem=2
-}

euler2 = sum . filter even . take 1000 $ fibs
  where
    fibs = 1 : 1 : zipWith (+) fibs (tail fibs)
