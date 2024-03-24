import React, { useState,useEffect } from 'react';
import TagInfoPanel from '../TagInfoPanel';
import './HtmlTag.css';


const HtmlPage = () => {
  const [sections, setSections] = useState({
    alphabet: false,
    category: false,
    tags: true,
    tutorial: false, 
  });

  const [selectedTag, setSelectedTag] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
    
  };

  const showTagInfo = (tag) => {
    setSelectedTag(tag);
    window.scrollTo(0, 0);
  };



  useEffect(() => {
    // Scroll to the top when the page is rendered
    window.scrollTo(0, 0);
  }, [])

  const htmlTags = [
    'Tutorial',
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
    '<table>', // Checkered pattern could be created with a table
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



  // Function to filter HTML tags based on the search term
  const filteredHtmlTags = htmlTags.filter(tag =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );



  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);


  };

  return (
    <div className="container">
      <div className="section-content">
        <h1>HTML References</h1>

        <input
          type="text"
          placeholder="Search HTML tags..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />



<div>

        <h2 onClick={() => toggleSection('tags')}>HTML Tags</h2>
        {sections.tags && (
          <div className="section-content">
            {/* Display filtered HTML tags */}
            <ul>
              {filteredHtmlTags.map((tag, index) => (
                <li key={index} onClick={() => showTagInfo(tag)}>
                  {tag}
                </li>
              ))}
            </ul>

          </div>
          
        )}
</div>


    

      </div>

   
      <div className="side-panel">
        <TagInfoPanel selectedTag={selectedTag}  />

      </div>
    </div>
  );
};

export default HtmlPage;
