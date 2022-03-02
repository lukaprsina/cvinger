#a -> the one powerfull
#b -> the other

function git-merge-ours($a, $b) {
    git checkout $a
    git merge -s ours $b
    git checkout $b
    git merge $a
}