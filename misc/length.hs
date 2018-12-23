{-
Generic function that returns the length of an array as seen in the talk:
Working hard to keep things lazy
https://www.youtube.com/watch?v=cu6lRZPzjGI
-}

-- No tail recursion, takes lots of memory
lengthRecursion :: [a] -> Int
lengthRecursion [] = 0
lengthRecursion (_:xs) = 1 + lengthRecursion xs

-- Tail recursion
lengthTailRecur :: [a] -> Int
lengthTailRecur = go 0
  where
    go acc [] = acc
    go acc (_:xs) = go (acc + 1) xs

main :: IO ()
main = return ()
