rm -rf docs

mkdir docs
cat headers.txt index.md styleTweaks.html > docs/index.md

# reveal.js template
# author: Your Name Here
# title:  Your Slide Show Title Here
# theme:  black|white|league|sky|beige|simple|serif|blood|night|moon|solarized
slideshow build -t reveal.js docs/index.md -o docs

# slidy template
# slideshow build -t slidy index.md -o docs

# shower template
# author: Your Name Here
# title: Your Slide Show Title Here
# cover: Your Slide Show Cover Image Here
# lang: Your Language Here
# theme:  ribbon|material
# slideshow build -t shower index.md -o docs

mkdir docs/images
cp -r images/* docs/images

mkdir docs/examples
cp -r examples/* docs/examples
