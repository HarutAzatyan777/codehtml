// HtmlPage.jsx

import React, { useState } from 'react';
import TagInfoPanel from './TagInfoPanel';
import './HtmlPage.css';

const HtmlPage = () => {
  const [sections, setSections] = useState({
    alphabet: false,
    category: false,
    tags: false,
    // Add more sections as needed
  });

  const [selectedTag, setSelectedTag] = useState(null);

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const showTagInfo = (tag) => {
    setSelectedTag(tag);
  };

  const htmlTags = [
    '<!-->',
    '<!DOCTYPE>',
    '<a>',
    '<abbr>',
    '<acronym>',
    '<address>',
    '<applet>',
    '<area>',
    '<article>',
    '<aside>',
    '<audio>',
    '<b>',
    '<base>',
    '<basefont>',
    '<bdi>',
    '<bdo>',
    '<big>',
    '<blockquote>',
    '<body>',
    '<br>',
    '<button>',
    '<canvas>',
    '<caption>',
    '<center>',
    '<cite>',
    '<code>',
    '<col>',
    '<colgroup>',
    '<data>',
    '<datalist>',
    '<dd>',
    '<del>',
    '<details>',
    '<dfn>',
    '<dialog>',
    '<dir>',
    '<div>',
    '<dl>',
    '<dt>',
    '<em>',
    '<embed>',
    '<fieldset>',
    '<figcaption>',
    '<figure>',
    '<font>',
    '<footer>',
    '<form>',
    '<frame>',
    '<frameset>',
    '<h1> - <h6>',
    '<head>',
    '<header>',
    '<hgroup>',
    '<hr>',
    '<html>',
    '<i>',
    '<iframe>',
    '<img>',
    '<input>',
    '<ins>',
    '<kbd>',
    '<label>',
    '<legend>',
    '<li>',
    '<link>',
    '<main>',
    '<map>',
    '<mark>',
    '<menu>',
    '<meta>',
    '<meter>',
    '<nav>',
    '<noframes>',
    '<noscript>',
    '<object>',
    '<ol>',
    '<optgroup>',
    '<option>',
    '<output>',
    '<p>',
    '<param>',
    '<picture>',
    '<pre>',
    '<progress>',
    '<q>',
    '<rp>',
    '<rt>',
    '<ruby>',
    '<s>',
    '<samp>',
    '<script>',
    '<search>',
    '<section>',
    '<select>',
    '<small>',
    '<source>',
    '<span>',
    '<strike>',
    '<strong>',
    '<style>',
    '<sub>',
    '<summary>',
    '<sup>',
    '<svg>',
    '<table>',
    '<tbody>',
    '<td>',
    '<template>',
    '<textarea>',
    '<tfoot>',
    '<th>',
    '<thead>',
    '<time>',
    '<title>',
    '<tr>',
    '<track>',
    '<tt>',
    '<u>',
    '<ul>',
    '<var>',
    '<video>',
    '<wbr>',
  ];

  return (
    <div className="container">
      <div className="section-content">
        <h1>HTML References</h1>

        {/* Include the rest of your sections and content here... */}

        {/* Include the HTML Tags section */}
        <h2 onClick={() => toggleSection('tags')}>HTML Tags</h2>
        {sections.tags && (
          <div className="section-content">
            {/* Include HTML tags with their descriptions here */}
            <ul>
              {htmlTags.map((tag, index) => (
                <li key={index} onClick={() => showTagInfo(tag)}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Include the rest of your sections and content here... */}
      </div>

      {/* Always display the TagInfoPanel */}
      <div className="side-panel">
        <TagInfoPanel selectedTag={selectedTag} />
      </div>
    </div>
  );
};

export default HtmlPage;
