### About LinkToSelection

Work in progress.

Would you like to bookmark or share a page and its specific part that you selected? You don't even need to modify the webpage.

What types of pages does it work with? See [LinkToSelection](https://github.com/Focus4you/LinkToSelection).

### Development
Clone recursively:
`git clone --recurse-submodules https://github.com/Focus4you/SelectionFirefox.git`
or immediately after clone:
`git submodule update --init --recursive`.

That will leave submodule LinkToSelection in a 'detached HEAD.' You may want to switch it to master:

```
cd SelectionFirefox
cd LinkToSelection
git checkout master
```

For development of Firefox add-on, see [Development Tools](http://selite.github.io/DevelopmentTools).
