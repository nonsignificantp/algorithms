import Data.List

-- Similar to the one shown in learnyouahaskell.com

counter :: (Ord a) => [a] -> [(a, Int)]
counter = map (\l@(x:xs) -> (x, length l)) . group . sort
