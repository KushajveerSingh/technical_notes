## Sidebar
In the sidebar, by default pages are sorted alphabatically in `pages/` and are capitalized (home -> Home).
```
pages/
    - contact.md
    - index.mdx
    - about/
        - legal.md
        - index.mdx
```

Create `_meta.json` is any directory inside `pages/` to provide a custom name to a page and also specify the order of pages in sidebar.
```json
// pages/_meta.json
{
    "index": "My Homepage",
    "contact": "Contact Us",
    "about": "About us"
}
```

Another way to do above is using `title`
```json
// pages/_meta.json
{
    "index": "My Homepage",
    "about": {
        "title": "About us",
        "...extra configuration...": "..." // Passeed to the theme

    }
}
```

**Folders with index page**. For a folder `dir`, create `dir.mdx`. Example
```
pages/
    - dir/
        - about.mdx
    - dir.mdx
```

**External links**
```json
{
    "github_link": {
        "title": "Github",
        "href": "...",
        "newWindow": true // optional
    }
}
```

**Hidden routes**
```json
{
    "index": {
        "display": "hidden"
    }
}
```

**Add folders to top navbar**. You can create separate docs, where user has to click the folder in top navbar.
```
pages/
    - index.mdx
    - about.mdx
    - fruits/
        - apple.mdx
    - frameworks/
        - react.mdx
```

Now adding `"type": "page"`, would make them show in top navbar (as sub-docs).
```json
{
    "index": {
        "title": "Home",
        "type": "page"
    },
    "fruits": {
        "title": "Fruits",
        "type": "page"
    }
}
```

**Add menus to top navbar**. Add `"type": "menu"` and `"items"`.
```json
{
    "company": {
        "title": "Company",
        "type": "menu",
        "items": {
            "about": {
                "title": "About",
                "href": "/about"
            },
            "contact": {
                "title": "Contact Us",
                "href": "mail@example.com"
            }
        }
    }
}
```

**Create separator line in sidebar** between items.
```json
{
    "index": "My Homepage",
    "---": {
        "type": "separator"
    }
}
```


## Markown

# Heading 1
## Heading 2
### Heading 3
#### 4
##### 5
###### 6

> Block quote

* Unordered
* List

1. Ordered
2. List

A paragraph, introducing a thematic break:

```
some.code()
```

---

a [link](https://example.com), an ![image](./image.png), some *emphasis*, something **strong**, and finally a little `code()`.

~~strikethrough~~

- [ ] Task list 1
- [ ] Item 2

| Syntax | Description | Test Text |
| :----- | :---------: | --------: |
| header | Else     | else      |

Autolinks https://nextjs.org


### Syntax highlighting
Nextra uses Shiki to do this. To view list of supported languages visit [link](https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages).

**Inline code with language**
`let x = 1{:jsx}`

**Highlight specific lines**
```js {1,4-5} ```

**Highlight specific substring**
```js /useState/ ```
```js /useState/1/ ```
```js /useState/1-3/ ```
```js /useState/1,3/ ```

**Disable copy button**
```js copy=false ```

**Add line numbers**
To add line numbers
```js showLineNumbers ```

To modify colors used by shiki, define global CSS file in `pages/_app.js`.

**Dynamic content**
You can change the code inside code blocks dynamically based on user interactions. The only limitation is that the updated content would not be re-highlighted as Shiki works at build-time. Check this [link](https://github.com/shuding/nextra/blob/main/docs/pages/docs/guide/syntax-highlighting.mdx#with-dynamic-content) on how to do it and working [example](https://nextra.site/docs/guide/syntax-highlighting#with-dynamic-content).

### LaTeX
Supported through [KaTeX](https://katex.org/docs/supported.html)

### MDX
Parser to convert markdown string to javascript string.

```md
# Hello, world!

<div className="note">
 > This is a markdown quote
</div>
```



## Nextra builtin components
```tsx
import { Callout } from 'nextra-theme-docs';

<Callout>
Default callout (mud background)
</Callout>

<Callout theme="info">
Today is Friday (blue background)
</Callout>

<Callout type="warning">
This API will be deprected soon. (yellow background)
</Callout>

<Callout type="error">
This is a dangerous feature that can cause everything to explode. (red background)
</Callout>
```

Tabs component. If you want to show installation instructions with npm/yarn/pnpm, then you can use this. Here the user will click on yarn and it will show content for yarn only.

```tsx
import { Tab, Tabs } from 'nextra-theme-docs';

<Tabs items={['pnpm', 'npm', 'yarn']} defaultIndex="1">
    <Tab>
        **pNPM**: Fast, disk space efficient package manager.
    </Tab>
    
    <Tab>
        **npm** is a package manager for the JavaScript programming language.
    </Tab>

    <Tab>
        **Yarn** is a software packaging system.
    </Tab>
</Tabs>
```