// TagInfoPanel.jsx

import React from 'react';
import './TagInfoPanel.css'; // Import the CSS file

const TagInfoPanel = ({ selectedTag }) => {
  const getTagInfo = (tag) => {
    switch (tag) {
      case '<!-->':
        return (
          <div>
            <p>This is a comment. Comments are not displayed in the browser.</p>
            <p>
              To add comments to your HTML code, use the syntax:
              <br />
              <code>{'<!-- Your comment here -->'}</code>
            </p>
          </div>
        );
      case '<!DOCTYPE>':
        return (
          <div>
            <p>
              This declaration defines the document type and version of HTML.
            </p>
            <p>
              Ensure it's placed at the very beginning of your HTML document:
              <br />
              <code>{'<!DOCTYPE html>'}</code>
            </p>
          </div>
        );
      case '<a>':
        return <p>This is an anchor tag used to create hyperlinks.</p>;
      case '<abbr>':
        return <p>This is an abbreviation or acronym, typically styled differently.</p>;
      case '<acronym>':
        return <p>This tag is obsolete. Use  instead.</p>;
        case '<address>':
          return <p>This tag defines contact information for the author/owner of a document.</p>;
        case '<applet>':
          return <p>This tag is obsolete. Use  "&lt;embed&gt;" or {'<object>'} instead.</p>;
      case '<area>':
    return <p>This tag is obsolete. Use {'<embed>'} or {'<object>'} instead.</p>;
  case '<article>':
    return <p>This tag defines an article or a piece of content that is part of a larger document.</p>;
  case '<aside>':
    return <p>This tag defines content that is aside from the content it is placed in.</p>;
  case '<audio>':
    return <p>This tag embeds sound content in documents.</p>;
  case '<b>':
    return <p>This tag is used to make the text bold.</p>;
  case '<base>':
    return <p>This tag specifies the base URL/target for all relative URLs in a document.</p>;
  case '<basefont>':
    return <p>This tag is obsolete. Use CSS to style fonts instead.</p>;
  case '<bdi>':
    return <p>This tag isolates a part of text that might be formatted in a different direction from other text.</p>;
  case '<bdo>':
    return <p>This tag overrides the current text direction.</p>;
  case '<big>':
    return <p>This tag increases the text font size by one size.</p>;
  case '<blockquote>':
    return <p>This tag defines a section that is quoted from another source.</p>;
  case '<body>':
    return <p>This tag defines the document's body.</p>;
  case '<br>':
    return <p>This tag produces a line break in the text.</p>;
  case '<button>':
    return <p>This tag defines a clickable button.</p>;
  case '<canvas>':
    return <p>This tag is used to draw graphics, on the fly, via JavaScript.</p>;
  case '<caption>':
    return <p>This tag defines a table caption.</p>;
  case '<center>':
    return <p>This tag is obsolete. Use CSS to center text and other elements instead.</p>;
  case '<cite>':
    return <p>This tag defines the title of a creative work.</p>;
  case '<code>':
    return <p>This tag defines a piece of computer code.</p>;
  case '<col>':
    return <p>This tag defines a column within a table and is used for defining common semantics on all common cells.</p>;
  case '<colgroup>':
    return <p>This tag defines a group of columns within a table.</p>;
  case '<data>':
    return <p>This tag links a piece of content with a machine-readable translation.</p>;
  case '<datalist>':
    return <p>This tag contains a set of {'<option>'} elements that represent the permissible or suggested options available to users in other controls.</p>;
  case '<dd>':
    return <p>This tag is used to describe a term/name in a description list.</p>;
  case '<del>':
    return <p>This tag defines text that has been deleted from a document.</p>;
  case '<details>':
    return <p>This tag defines additional details that the user can view or hide.</p>;
  case '<dfn>':
    return <p>This tag represents the defining instance of a term.</p>;
  case '<dialog>':
    return <p>This tag defines a dialog box or window.</p>;
  case '<dir>':
    return <p>This tag is obsolete. Use {'<ul>'} instead.</p>;
  case '<div>':
    return <p>This tag defines a division or a section in an HTML document.</p>;
  case '<dl>':
    return <p>This tag defines a description list.</p>;
  case '<dt>':
    return <p>This tag is used to define the term/name in a description list.</p>;
  case '<em>':
    return <p>This tag defines emphasized text.</p>;
  case '<embed>':
    return <p>This tag embeds external content at the specified point in the document.</p>;
  case '<fieldset>':
    return <p>This tag is used to group related elements within a form.</p>;
  case '<figcaption>':
    return <p>This tag is used to add a caption to an {'<figure>'} element.</p>;
  case '<figure>':
    return <p>This tag is used to group any content that is referenced from the main content, and that could affect the flow of the document.</p>;
  case '<font>':
    return <p>This tag is obsolete. Use CSS to style fonts instead.</p>;
  case '<footer>':
    return <p>This tag defines a footer for a document or section.</p>;
  case '<form>':
    return <p>This tag defines an HTML form for user input.</p>;
  case '<frame>':
    return <p>This tag is obsolete. Use {'<iframe>'} instead.</p>;
  case '<frameset>':
    return <p>This tag is used to contain {'<frame>'} elements.</p>;
  case '<h1> - <h6>':
    return <p>These tags define HTML headings.</p>;
  case '<head>':
    return <p>This tag contains meta-information about the HTML document.</p>;
  case '<header>':
    return <p>This tag defines a header for a document or section.</p>;
  case '<hgroup>':
    return <p>This tag is used to group header elements.</p>;
  case '<hr>':
    return <p>This tag defines a thematic break in the content.</p>;
  case '<html>':
    return <p>This tag defines the root of an HTML document.</p>;
  case '<i>':
    return <p>This tag defines italic text.</p>;
  case '<iframe>':
    return <p>This tag is used to embed another document within the current HTML document.</p>;
  case '<img>':
    return <p>This tag is used to embed images in a document.</p>;
  case '<input>':
    return <p>This tag is used to create interactive controls within forms.</p>;
  case '<ins>':
    return <p>This tag defines text that has been inserted into a document.</p>;
  case '<kbd>':
    return <p>This tag defines keyboard input.</p>;
  case '<label>':
    return <p>This tag defines a label for an {'<input>'}, {'<meter>'}, {'<output>'}, {'<progress>'}, {'<select>'}, or {'<textarea>'} element.</p>;
  case '<legend>':
    return <p>This tag defines a caption for the content of its parent {'<fieldset>'}.</p>;
  case '<li>':
    return <p>This tag defines a list item within an ordered or unordered list.</p>;
  case '<link>':
    return <p>This tag defines the relationship between the current document and an external resource.</p>;
  case '<main>':
    return <p>This tag defines the main content within a document.</p>;
  case '<map>':
    return <p>This tag defines a client-side image map.</p>;
  case '<mark>':
    return <p>This tag is used to highlight parts of text.</p>;
  case '<menu>':
    return <p>This tag is used to define a command list or dropdown list.</p>;
  case '<meta>':
    return <p>This tag provides metadata about the HTML document.</p>;
  case '<meter>':
    return <p>This tag defines a scalar measurement within a known range.</p>;
  case '<nav>':
    return <p>This tag defines navigation links in a document.</p>;
  case '<noframes>':
    return <p>This tag is used to provide alternate content for browsers that do not support the {'<frameset>'} element.</p>;
  case '<noscript>':
    return <p>This tag defines alternate content to be displayed for browsers that do not support the script element or have the script element disabled.</p>;
  case '<object>':
    return <p>This tag embeds external content at the specified point in the document.</p>;
  case '<ol>':
    return <p>This tag defines an ordered list.</p>;
  case '<optgroup>':
    return <p>This tag defines a group of options within a {'<select>'} element.</p>;
  case '<option>':
    return <p>This tag defines an option in a {'<select>'} element.</p>;
  case '<output>':
    return <p>This tag represents the result of a calculation or user action.</p>;
  case '<p>':
    return <p>This tag defines a paragraph in an HTML document.</p>;
  case '<param>':
    return <p>This tag defines parameters for an object.</p>;
  case '<picture>':
    return <p>This tag defines a container for multiple image sources.</p>;
  case '<pre>':
    return <p>This tag defines preformatted text.</p>;
  case '<progress>':
    return <p>This tag represents the progress of a task.</p>;
  case '<q>':
    return <p>This tag defines a short quotation.</p>;
  case '<rp>':
    return <p>This tag provides parentheses around the text of ruby annotations.</p>;
  case '<rt>':
    return <p>This tag defines the pronunciation of characters presented in a ruby annotation.</p>;
  case '<ruby>':
    return <p>This tag represents a ruby annotation.</p>;
  case '<s>':
    return <p>This tag defines text that is no longer correct or relevant.</p>;
  case '<samp>':
    return <p>This tag represents sample output from a computer program.</p>;
  case '<script>':
    return <p>This tag is used to embed or reference an executable script within an HTML or XHTML document.</p>;
  case '<search>':
    return <p>This tag represents a search field.</p>;
  case '<section>':
    return <p>This tag defines a section in an HTML document.</p>;
  case '<select>':
    return <p>This tag defines a dropdown list.</p>;
  case '<small>':
    return <p>This tag defines smaller text.</p>;
  case '<source>':
    return <p>This tag defines multiple media resources for {'<video>'} or {'<audio>'} elements.</p>;
  case '<span>':
    return <p>This tag is used to group inline-elements in a document.</p>;
  case '<strike>':
    return <p>This tag is obsolete. Use {'<del>'} or {'<s>'} instead.</p>;
  case '<strong>':
    return <p>This tag defines strong importance or importance.</p>;
  case '<style>':
    return <p>This tag is used to embed CSS within an HTML document.</p>;
  case '<sub>':
    return <p>This tag defines subscript text.</p>;
  case '<summary>':
    return <p>This tag defines a visible heading for the {'<details>'} element.</p>;
  case '<sup>':
    return <p>This tag defines superscript text.</p>;
  case '<svg>':
    return <p>This tag defines an SVG graphic.</p>;
  case '<table>':
    return <p>This tag defines a table.</p>;
  case '<tbody>':
    return <p>This tag groups the body content in an HTML table.</p>;
  case '<td>':
    return <p>This tag defines a data cell in an HTML table.</p>;
  case '<template>':
    return <p>This tag is used to declare fragments of HTML that can be cloned and inserted in the document by script.</p>;
  case '<textarea>':
    return <p>This tag defines a multiline text input control.</p>;
  case '<tfoot>':
    return <p>This tag groups the footer content in an HTML table.</p>;
  case '<th>':
    return <p>This tag defines a header cell in an HTML table.</p>;
  case '<thead>':
    return <p>This tag groups the header content in an HTML table.</p>;
  case '<time>':
    return <p>This tag represents a specific period in time.</p>;
  case '<title>':
    return <p>This tag defines the title of the document.</p>;
  case '<tr>':
    return <p>This tag defines a row in an HTML table.</p>;
  case '<track>':
    return <p>This tag is used to specify subtitles, captions, or other files associated with media elements.</p>;
  case '<tt>':
    return <p>This tag defines teletype text.</p>;
  case '<u>':
    return <p>This tag defines underlined text.</p>;
  case '<ul>':
    return <p>This tag defines an unordered list.</p>;
  case '<var>':
    return <p>This tag represents the name of a variable in a mathematical expression or a programming context.</p>;
  case '<video>':
    return <p>This tag embeds video content in a document.</p>;
  case '<wbr>':
    return <p>This tag defines a possible line-break in the text.</p>;
  default:
    return <p>No additional information available for {tag}.</p>;
}

    };

  return (
    <div className="tag-info-panel">
      <h3>{selectedTag}</h3>
      {getTagInfo(selectedTag)}
    </div>
  );
};

export default TagInfoPanel;
