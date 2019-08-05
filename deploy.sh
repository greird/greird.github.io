#!/usr/bin/env sh

# abort on errors
set -e

gulp build

echo 'www.hubertfauconnier.com' > CNAME

git add -A
git commit -m 'deploy'

git push https://github.com/greird/greird.github.io.git origin:master