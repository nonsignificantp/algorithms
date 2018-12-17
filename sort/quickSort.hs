qsort :: (Ord a) => [a] -> [a]
qsort [] = []
qsort (x:xs) =
  let small = qsort (filter (<=x) xs)
      biggs = qsort (filter (>x) xs)
  in small ++ [x] ++ biggs
