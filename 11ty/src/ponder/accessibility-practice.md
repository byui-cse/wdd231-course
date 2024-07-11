---
title: Accessibility Practice
layout: prove
time: 60 minutes
---

- - -

## Introduction

Definition of web accessibility:
> "Accessibility is the inclusive practice of eliminating barriers for people with disabilities, ensuring equal access to information and functionality on websites."

You may be wondering, why do I need to worry about accessibility? Web accessibility doesn't just help people with disabilities. It often results in a better overall user experience. Designing for accessibility means creating clear and well-organized content, which benefits all users, not just those with disabilities. Accessible websites also tend to have better SEO. Search engines prioritize websites that are user-friendly and provide a positive experience for all visitors. And if that's not enough, many countries, including the United States with the Americans with Disabilities Act (ADA), have laws requiring accessibility for digital content. Non-compliance can lead to legal issues and discrimination claims.

What does accessibility look like for a website? Well, at BYU-Idaho we start with this [HTML Checklist](https://webmailbyui.sharepoint.com/sites/digitalaccessibilityhub/SitePages/HTML.aspx), created by the Accessibility Services office. If you can answer "yes" to all of the questions, then your website is probably accessible. Go ahead and take a look at the questions on that page. Eventually, you'll need to know how to do all of those things in order to make an accessible website.

For the purposes of this class, though, you'll just be expected to implement these accessibility concepts:

- Headings
- Link Text
- Color Contrast and Fonts
- Alt Text
- Semantic Elements

## **01** Headings

Headings should:

- Provide structure and navigation points.
- Be in a hierarchical, logical order.
- Provide an outline for the content.
- Break content into logical chunks.
- Be descriptive to the content they contain.

Headings should **not** be used just to style content.

### Heading Levels

There are six heading levels in HTML. If more than six heading levels are needed, you'll need to split the content at major sections. Only use one heading level 1 on a page.

### Skipping Levels

When closing sub-sections, you can skip up to a higher level, but when adding a new sub-section, you should never skip a level (e.g., heading 4 may proceed heading 2, but heading 2 should never directly proceed heading 4).

#### Incorrect Heading Structure Example

<pre>
 &#x2022; H1
 &#x2022; H1
         - H3
     &#9900; H2
            &#x2022; H4

</pre>

#### Correct Heading Structure Example

- H1
    - H2
        - H3
            - H4
    - H2
        - H3
        - H3
    - H2
    - H2

#### Additional Heading Help

- Heading 1 – Main content description/title
- Heading 2 – Sub-section of Heading 1 (broad main idea)
- Heading 3 – Sub-section of Heading 2 (specific idea)
- Heading 4 – Sub-section of Heading 3 (examples, details)
- Heading 2 – Next broad main idea

## 02 Link Text

When you're adding links to your website, the text you use for those links should be meaningful. Instead of generic phrases like "click here", use words that tell people what they'll find when they click. Imagine someone coming across your link without the surrounding text. Would they still understand where the link goes?

### Link Text Example 1:

[Here](https://webaim.org/intro/) is a great resource for getting started with web accessibility.

<details>
<summary>Answer 1</summary>

**Why it's bad:** This link text doesn't tell users where the link will take them or what they'll find when they click. It's generic and doesn't offer any context.
</details>

### Link Text Example 2:

[WebAIM: Introduction to Web Accessibility](https://webaim.org/intro/) is a great resource for getting started with web accessibility.

<details>
<summary>Answer 2</summary>

**Why it's good:** This link text is descriptive and specific. It clearly informs users about the content they'll access by clicking the link.
</details>

### Links vs. Buttons:

Links and buttons are not interchangeable elements.
A **link** takes you to a new page. A **button** does an action on the current page. It's important to be clear whether something is a link or a button. It's like knowing whether you're opening a door to a different room or flicking on a light switch in the room you're in.

### Other considerations:

- If you have multiple links going to the same place on a webpage, they should all have the same link text. Otherwise, they should all be unique.
- Links should be visually distinct (underlined and a different color)
- Links should look consistent throughout the content
- Link text should short while still being descriptive. Don't link to entire sentences or paragraphs.

## 03 Color Contrast and Fonts

### Contrast

Sufficient contrast should be present between text and background (4.5:1). With large text or adjacent important visual elements (informational images, graphics, etc.) contrast should be at least 3:1. Logos, incidental icons, and decorative elements have no required contrast ratio. Use a color contrast checker to find these numbers.

Keep in mind that some color combinations may be difficult to differentiate between for some colorblindness or visual impairments. You may find it helpful to test your digital content in grayscale to verify color is not the only means used to communicate information and that contrast is sufficient.

### Changing Your Screen to grayscale

#### Mac Instructions

1. Open settings
2. Accessibility
3. Display
4. Scroll to "Color Filters"
5. Toggle on color filters and make sure the filter type is "Grayscale"

#### Windows Instructions

1. Windows button
2. Settings
3. Accessibility
4. Color Filters
5. Toggle Grayscale

### Fonts

The choice of typefaces and fonts significantly affects text readability on websites.

- Users often scan text in patterns, and interruptions can hinder comprehension.
- To enhance readability, use simple and familiar fonts, avoid complexity, and limit font variations.
- Consider adequate spacing, contrast between text and background, and font size.
- Real text is more adaptable than text within images, making it more accessible.
- Embedded fonts should prioritize readability.

Please read: [Typefaces and Fonts](https://webaim.org/techniques/fonts/)

## Sensory Characteristics

Color should never be the only means of conveying information. Watch this short video about the [Use of Color Alone to Convey Information](https://www.youtube.com/watch?v=8_eVF0LPs0s).

A classic example where we use more than one sensory characteristic is with links. Accessible links, like the ones you often see, are underlined and have a distinct color. Even if the color isn't visible, the presence of the underline makes it clear that it's a link.

### Tools

[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - color contrast checker (has eye drop color picker feature)
[Adobe Color](https://color.adobe.com/create/color-accessibility) - color-blind safe palettes and color contrast checker

## 04 Alt Text

Alt text is a short text alternative to the image. In general, alt text is limited to approximately 250 characters or less.

Alt text is <strong>not</strong>:
    - repetitive
    - additional
    - source or filename

Alt text goes in the alt attribute of an image tag.

```html
<img src="" alt="">
```

Now, let's talk about decorative images. These are the ones that don't really convey important information. For these, you can use empty alt text `alt=""`. This tells assistive technology to skip these images.

On the flip side, there are images that serve a specific function, like buttons or icons. For these, the alt text should describe that function. For example, a logo that takes you to the home page should have alt text that says "Home". It shouldn't describe the logo. Alt text for images that are links should follow the same rules as the link text section.

Pay attention to the purpose and context of the image. These may change the way a description is written and where the description is provided. The same image can have different alt text depending on its context.

Use the [POET Training Tool](https://poet.diagramcenter.org/) to practice when and how to write alt text.

## 05 Semantic Elements

Whenever you can, opt for the actual HTML tags that represent the content or action you're including. For example, instead of dressing up a div to look like a button, just use the button tag.

### Why Semantic?

Using semantic HTML elements brings inherent accessibility features to your web content. These elements, like headings, buttons, and lists, are designed with accessibility in mind from the start. Here's why it matters:

**Clear Structure:** Semantic elements provide a structured format, making content easy to understand, not just visually but also for assistive technology.

**Defined Roles:** Each element has a specific role, enabling assistive technologies to interpret their purpose accurately. For example, a button element is recognized as something clickable.

Like we talked about earlier with the definition of accessibility, having equivalent effecviveness and ease of use is easier when you use semantic elements. For example, when you open an article, what's your first instinct? Probably skimming through the headings, right? Using semantic headings ensures that users with assistive technology can also enjoy a similar skimming experience.

### Keyboard accessibility

By incorporating semantic HTML elements, you're also enhancing the keyboard-friendliness of your web content. Semantic elements naturally support keyboard navigation and add keyboard focus to clickable elements, allowing users who rely on keyboards to smoothly traverse your content, whether it's links, buttons, or headings. By just using the semantic elements, you save yourself a lot of time trying to replicate the same keyboard focus and navigation.
### Screen reader

Using a screen reader and keyboard navigation puts yourself in the shoes of users with visual impairments. It helps you catch and fix accessibility issues, making your websites more user-friendly for everyone. Plus, it's a cool way to expand your skills and create websites that work well for a diverse audience. You should be able to navigate any website using the Tab (and Shift + Tab), Enter, and arrow keys. If you want to try it, here are the instructions for Mac and Windows.

#### Mac Instructions

1. Open settings
2. Accessibility
3. Voice Over
4. Toggle on

#### Windows Instructions

1. Open settings
2. Accessibility
3. Narrator
4. Toggle on

## Activity

### Comparison: Exploring the Good and Not-So-Good

First we'll look at a bad example. Open a new tab and search for any news site. If you don't want to find your own, here's [NBC News](https://www.nbcnews.com/). Right click on the page and select inspect (or use F12), then navigate to the lighthouse tab. Double check that the settings include an accessibility report and that you're testing "Desktop" if that's applicable. Begin the assessment by selecting the "Analyze page load" button. Once it loads, scroll to the accessibility section and take note of the errors. Do you see any of the issues we've talked about so far? Do they have good heading structure? Alt text? Link text? Semantic elements? Color contrast?

For both of these examples, you can try using your computer's built-in screen reader and see how it goes.

Now let's look at a good example of web accessibility. [WebAIM](https://webaim.org/) is a reputable source for web accessibility resources and is known for its high accessibility standards. Use the Lighthouse tool like before to evaluate the accessibility of the WebAIM website

### Practice

The second part of the activity focuses on hands-on practice. Pick a past website project, such as your WDD130 final project or any other site you've created. Run the Lighthouse tool on your chosen project and check its accessibility score. The goal is to have a lighthouse score of at least 95%.

Go through and remediate your site, focusing especially on the errors that fall into the 5 categories of accessibility we've talked about. Run the lighthouse tool again and see your accessibility score go up! Try to get as close to 95% or higher as possible.