Wakanda Server Documentation
============================

This is the Wakanda Server documentation. It's aimed to be served by Github Pages (`gh-pages` branch) .

# Install

Install dev dependencies with npm.

```bash
npm install
```

Install project dependencies with bower. Dependencies will be stored on `app/lib` directory.

```bash
bower install
```

# Run

```bash
npm run gulp-serve
```

Or if you have `gulp` installed globally, simply execute :

```bash
gulp serve
```

Why gulp ? For [sass](https://github.com/sass/sass) compilation and livereload.  
You can easily avoid gulp and serving yourself `app/` folder (for example with [`http-server`](https://github.com/indexzero/http-server)), but you will have to compile `app/style/application.scss` by hand.

# Writing content

## Where is documentation content ?

All documentation pages are located on `app/documentation/pages`. Directly edit a file to modify its content.  
Home page is not a documentation one, its content is located on `app/home/home.html`.

## How to add a new documentation page ?

There are a few simple steps to add a new page :
- Create its content on `app/documentation/pages` folder (or a subfolder if the page is part of category)
- Add it on the list of documentation pages on `docPagesLinks()` method of `documentationFactory`, located on `app/documentation/documentationFactory.js`

If the page to add is aimed to be a "category", i.e directly on the sidebar menu, add it on the root of the array returned by `docPagesLinks()` method.  
If it is aimed to be part of a category (and so, a child item on the sidebar menu), add it on the `children` property of an existing page (or create a new one). Do not forget to set the `parentPage` property in this case.

Here is an example of a menu with 4 pages, with 2 being sub-pages of another.

```js
//app/documentation/documentationFactory.js

function docPagesLinks() {
  //page property must equals to the part after #/doc/ or after #/doc/the_parent_page/
  return [
    {
      name: 'Quickstart',
      url: '#/doc/quickstart',
      page: 'quickstart'
    },
    {
      name: 'Tutorial',
      url: '#/doc/tutorial',
      page: 'tutorial',
      children: [
        {
          name: 'Step 1',
          url: '#/doc/tutorial/step-1',
          parentPage: 'tutorial',
          page: 'step-1'
        },
        {
          name: 'Step 2',
          url: '#/doc/tutorial/step-2',
          parentPage: 'tutorial',
          page: 'step-2'
        },
      ]
    }
  ];
}
```

**Page will be automatically added to the sidebar menu.** Paging is also automatic, but you have to insert the `doc-pagination` directive at the bottom of the template file. The two variables needed (`currentPage` and `currentSubPage`) are already added to the scope by the `documentationController`.

```js
<doc-pagination page="{{currentPage}}" subpage="{{currentSubPage}}"></doc-pagination>
```

## How to higlight inline code ?

Encapsulate code on `<code></code>` tags.

```html
<p>
  Lorem ipsum dolor <code>amazingFunction()</code> sit amet.
</p>
```

## How to add a highlighted code block ?

There are two options to have highlighted code. Directly on a code block, or on snippet files with tabs to select file to display (like on CodePen !).  

Sometimes, especially with HTML code that you can not include on your DOM (hello `<html>` tag), you will have no choice that uses the second method.

### Directly on a code block

Embed code on a `<pre><code>` block, with the correct `language-x` class for color highlighting. Do not forget to add `prism` directive to the `<code>` tag.

Example :
```js
<pre><code class="language-javascript" prism>
//Some code sample, thanks Prism !
angular.module('step6', ['wakanda']);

function Controller($scope, $wakanda) {
    // Create a proxy of the server model
    $wakanda.init().then(function oninit(ds) {
        $scope.employees = ds.Employee.$find();
    });
}</code>
</pre>
```

### On snippet files
Snippet files are placed on `app/documentation/snippets`. Then, place your snippets on a subfolder.
To load your files, call the [angular-snippets](https://github.com/jbdemonte/angular-snippets) directive, providing the folder path, and list of files to load.  

Example :
```html
<snippets files="['index.html', 'app.js', 'style.css']" path="documentation/snippets/setup"></snippets>
```

This directive rely on [Prism](http://prismjs.com) for syntax highlighting.

# How to deploy documentation to prod repository ?

## Retrieve actual documentation

First step is to retrieve the currently published documentation, and put it on
a `build` folder.  
The following command line will only retrieve the `gh-pages` branch.

```bash
git clone git@github.com:Wakanda/angular-wakanda.git -b gh-pages --single-branch build
```

The `build` directory now contains the published documentation and a git repository
to manipulate it.

## Build

Then we have to build a production version of the website. As it is hosted on Github,
it will not be minified nor uglified. The only step of this build is to compile Sass files
to CSS ones and copy the website on a `build` directory.

```bash
gulp build
```

Production version is ready on `build` directory. To check everything is ok, you can
serve this directory directly (with `http-server` for example).

## Publishing

The previous command has copied our new version on the `build` directory. Add all files to stage and commit them.

```bash
cd build
git add -A
git commit -m "[Commit message here]"
```

And push the coomit on `gh-pages` branch. **Be really careful not to push on `master` branch.**

```bash
git push origin gh-pages
```

# Contribute

Open an issue on this repository if you encounter a bug or have a suggestion.
