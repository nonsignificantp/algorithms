any' :: (a -> Bool) -> [a] -> Bool
any' p []     = False
any' p (x:xs) = x || any' p xs

main :: IO ()
main = return ()
