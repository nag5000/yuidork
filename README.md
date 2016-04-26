# Yuidork

View YUIDoc (and probably JSDoc) documentation generated realtime from any GitHub sources.

Allows viewing docs for *any* branch/tag/commit, does not require generated docs to be uploaded.

**Work in progress! See the roadmap below.**

## Live demos:

* [emberjs/ember.js](https://lolmaus.github.io/yuidork/#/emberjs/ember.js/master)
* [emberjs/data](https://lolmaus.github.io/yuidork/#/emberjs/data/master)
* [simplabs/ember-simple-auth](https://lolmaus.github.io/yuidork/#/simplabs/ember-simple-auth/master)
* [cibernox/ember-cpm](https://lolmaus.github.io/yuidork/#/cibernox/ember-cpm/master)
* [yui/yuidoc](https://lolmaus.github.io/yuidork/#/yui/yuidoc/master)


## Roadmap

> #### Legend
>
> :white_circle: -- not implemented yet, planned  
> :radio_button: -- in progress (leaf) or partially implemented (branch)  
> :black_circle: -- implemented   
> :no_entry:     -- blocked, has to be figured out  

* :radio_button: Parsing
  * :black_circle: Models and relationships
    * :black_circle: Version (git tag/branch/commit/etc)
    * :black_circle: File
    * :black_circle: Module
    * :black_circle: Class
    * :black_circle: Class Item
    * :black_circle: Namespace
    * :no_entry: Project (conflicts with the multiple versions feature, need overriding?)
    * :no_entry: Element (don't know what that is, need a reference project)
    * :no_entry: For     (don't know what that is, need a reference project)
  * :black_circle: Parse YUIDoc JSON format and populate store 
  * :black_circle: Generate documentation live for any project on GitHub
    * :black_circle: Port YUIDoc.DocParser (aww yiss! :sunglasses:)
    * :black_circle: Custom AJAX service
    * :black_circle: Loading screen with stages display
  * :white_circle: Display documentation from existing JSON files
* :radio_button: UI
  * :black_circle: Menu
  * :black_circle: Module page
  * :white_circle: Class page
  * :white_circle: Namespace page
  * :white_circle: Class Item component (method/property/event/etc)
  * :white_circle: Class Items component (navigate/filter class items)
  * :white_circle: Reload model when changing URL params
  * :white_circle: Versions switcher
  * :white_circle: Project switcher
  * :white_circle: Search options
  * :white_circle: Linking to viewed project
* :white_circle: Configuration
  * :white_circle: Source
    * :white_circle: Via query params
    * :white_circle: Via dotfile
  * :white_circle: Options
    * :white_circle: Versions
    * :white_circle: Extensions
    * :white_circle: Path to JSDoc's `data.json`
    * :white_circle: Project info: name, desc, URL
    * :white_circle: Disable/enable project switcher
    * :white_circle: Hide menu sections
* :white_circle: Styling
* :white_circle: Authentication
  * :white_circle: GitHub auth
  * :white_circle: Error handling
    * :white_circle: API limit
    * :white_circle: Network failure
* :white_circle: Advanced features
  * Parsing docs from file system
    * :white_circle: Figure out how to serve and access files on disk
    * :white_circle: Implement
    * :no_entry: Livereloading (would be a fantastic feature, but it's too tricky to implement)
* :white_circle: Some tests maybe
* :white_circle: Document with YUIDoc :trollface:
* :no_entry: Support JSDoc (need to figure out how different YUIDoc and JSDoc formats are)



## Project structure

Yuidork is distributed as an Ember addon, you can use it to build your own app or to include documentation into an existing Ember app.

But the Yuidork addon also bundles a dummy app which aims to be a universal and fully functional YUIDoc@GitHub viewer.



## License

This software is free to use under the MIT license. See the [LICENSE]](https://github.com/lolmaus/yuidork/blob/gen-1/LICENSE.md) file for license text and copyright information.

Includes code ported from [YUIDoc](https://github.com/yui/yuidoc) (distributed under Yahoo Inc. BSD license).

This software tries to adhere to the [YUIDoc format](http://yui.github.io/yuidoc/syntax/index.html), but it's not endorsed by or affiliated with Yahoo or YUIDoc.