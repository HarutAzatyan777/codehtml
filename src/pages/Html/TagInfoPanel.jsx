// TagInfoPanel.jsx

import React,{useState} from 'react';
import './TagInfoPanel.css'; // Import the CSS file
import HtmlTutorial from './HtmlTutorial/HtmlTutorial';

const TagInfoPanel = ({ selectedTag}) => {

    
      const [isCopied, setIsCopied] = useState(false);
    


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
                <p>
                  <strong>Definition and Usage:</strong>
                  <br />
                  The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers.
                  <br />
                  You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.
                </p>
                <p>
                  <strong>Browser Support:</strong>
                  <br />
                  <strong>Browser Support:</strong>
        <br />
        <table>
          <tr>
            <th>Element</th>
            <th>&lt;!--...--&gt;</th>
            <th>Chrome</th>
            <th>Mozilla</th>
            <th>Opera</th>
            <th>Safari</th>
            <th>Edge</th>
          </tr>
          <tr>
            <td>&lt;!--...--&gt;</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
                </p>
                <p>
                  <strong>Tips and Notes:</strong>
                  <br />
                  You can use the comment tag to "hide" scripts from browsers without support for scripts (so they don't show them as plain text):
                  <br />
                  <code>
                    {'<script type="text/javascript">'}
                    <br />
                    {'<!--'}
                    <br />
                    {'function displayMsg() {'}
                    <br />
                    {'  alert("Hello World!");'}
                    <br />
                    {'}'}
                    <br />
                    {'//-->'}
                    <br />
                    {'</script>'}
                  </code>
                  <br />
                  Note: The two forward slashes at the end of the comment line (//) are the JavaScript comment symbols. This prevents JavaScript from executing the --&gt; tag.
                </p>
              </div>
            );

            case 'Tutorial':
                return (
                  <div>
                  <HtmlTutorial />
                  </div>
                );
          
        case '<!DOCTYPE>':
            const codeExample = `<!DOCTYPE html>
            <html>
            <head>
              <title>Title of the document</title>
            </head>
            <body>
              The content of the document......
            </body>
            </html>`;
            const handleCopyCode = () => {
                navigator.clipboard.writeText(codeExample);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              };
            return (
                <div>
                <p>
                  This declaration defines the document type and version of HTML.
                </p>
                <p>
                  Ensure it's placed at the very beginning of your HTML document:
                  <br />
                  <code>{'<!DOCTYPE html>'}</code>
                  <button onClick={handleCopyCode}>
                    {isCopied ? 'Copied!' : 'Copy Code'}
                  </button>
                </p>
                <p>
                  <strong>Example:</strong>
                  <br />
                  <code>{codeExample}</code>
                  <button onClick={handleCopyCode}>
                    {isCopied ? 'Copied!' : 'Copy Code'}
                  </button>
                </p>
                <p>
                  <strong>Definition and Usage:</strong>
                  <br />
                  All HTML documents must start with a <code>{'<!DOCTYPE>'}</code> declaration.
                  <br />
                  The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.
                  <br />
                  In HTML 5, the declaration is simple: <code>{'<!DOCTYPE html>'}</code>
                </p>
                <p>
                  <strong>Browser Support:</strong>
                  <br />
                  <strong>Browser Support:</strong>
        <br />
        <table>
          <tr>
            <th>Element</th>
            <th>&lt;!--...--&gt;</th>
            <th>Chrome</th>
            <th>Mozilla</th>
            <th>Opera</th>
            <th>Safari</th>
            <th>Edge</th>
          </tr>
          <tr>
            <td>&lt;!--...--&gt;</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
                </p>
                <p>
                  <strong>Older HTML Documents:</strong>
                  <br />
                  In older documents (HTML 4 or XHTML), the declaration is more complicated because the declaration must refer to a DTD (Document Type Definition).
                  <br />
                  HTML 4.01: <code>{'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">'}</code>
                  <br />
                  XHTML 1.1: <code>{'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'}</code>
                </p>
                <p>
                  <strong>HTML Elements and Doctypes:</strong>
                  <br />
                  Look at our table of all HTML elements, and what Doctype each element appears in.
                </p>
                <p>
                  <strong>Tips and Notes:</strong>
                  <br />
                  Tip: The <code>{'<!DOCTYPE>'}</code> declaration is NOT case sensitive.
                </p>
                <p>
                  <strong>Examples:</strong>
                  <br />
                  <code>{'<!DOCTYPE html>'}</code>
                  <br />
                  <code>{'<!DocType html>'}</code>
                  <br />
                  <code>{'<!Doctype html>'}</code>
                  <br />
                  <code>{'<!doctype html>'}</code>
                </p>
              </div>
            );
          
            case '<a>':
                // Return JSX explaining the anchor tag and providing an example
                return (
                  <div>
                    <p>
                      The <code>&lt;a&gt;</code> tag defines a hyperlink, which is used to link from one page to another.
                    </p>
                    <p>
                      The most important attribute of the <code>&lt;a&gt;</code> element is the <code>href</code> attribute, which indicates the link's destination.
                    </p>
                    <p>
                      By default, links will appear as follows in all browsers:
                      <br />
                      - An unvisited link is underlined and blue.
                      <br />
                      - A visited link is underlined and purple.
                      <br />
                      - An active link is underlined and red.
                    </p>
                    <p>
                      <strong>Definition and Usage:</strong>
                      <br />
                      The <code>&lt;a&gt;</code> tag defines a hyperlink, which is used to link from one page to another.
                      <br />
                      The most important attribute of the <code>&lt;a&gt;</code> element is the <code>href</code> attribute, which indicates the link's destination.
                    </p>
                    <p>
                      <strong>Browser Support:</strong>
                      <br />
                      <strong>Browser Support:</strong>
        <br />
        <table>
          <tr>
            <th>Element</th>
            <th>&lt;!--...--&gt;</th>
            <th>Chrome</th>
            <th>Mozilla</th>
            <th>Opera</th>
            <th>Safari</th>
            <th>Edge</th>
          </tr>
          <tr>
            <td>&lt;!--...--&gt;</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
                    </p>
                    <p>
                      <strong>Attributes:</strong>
                      <br />
                      <table>
                        <tr>
                          <th>Attribute</th>
                          <th>Value</th>
                          <th>Description</th>
                        </tr>
                        <tr>
                          <td>download</td>
                          <td>filename</td>
                          <td>Specifies that the target will be downloaded when a user clicks on the hyperlink</td>
                        </tr>
                        <tr>
                          <td>href</td>
                          <td>URL</td>
                          <td>Specifies the URL of the page the link goes to</td>
                        </tr>
                        <tr>
                          <td>hreflang</td>
                          <td>language_code</td>
                          <td>Specifies the language of the linked document</td>
                        </tr>
                       {' <!-- Add the rest of the attribute information here -->'}
                      </table>
                    </p>
                    <p>
                      <strong>Global Attributes:</strong>
                      <br />
                      The <code>&lt;a&gt;</code> tag also supports the Global Attributes in HTML.
                    </p>
                    <p>
                      <strong>Event Attributes:</strong>
                      <br />
                      The <code>&lt;a&gt;</code> tag also supports the Event Attributes in HTML.
                    </p>
                    <p>
                      <strong>Example:</strong>
                      <br />
                      <code>{'<a href="https://example.com">Link Text</a>'}</code>
                    </p>
                  </div>
                );
              
      
                case '<abbr>':
                    // Return JSX explaining the abbreviation tag and providing an example
                    return (
                      <div>
                        <p>Definition and Usage:</p>
                        <p>The &lt;abbr&gt; tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
                        <p>Example:</p>
                        <p>The &lt;abbr title="World Health Organization"&gt;WHO&lt;/abbr&gt; was founded in 1948.</p>
                        <p>More "Try it Yourself" examples below.</p>
                        <p>Browser Support:</p>
                        <table>
                          <thead>
                            <tr>
                              <th>Element</th>
                              <th>Chrome</th>
                              <th>Firefox</th>
                              <th>IE</th>
                              <th>Edge</th>
                              <th>Safari</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>&lt;abbr&gt;</td>
                              <td>Yes</td>
                              <td>Yes</td>
                              <td>Yes</td>
                              <td>Yes</td>
                              <td>Yes</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>Global Attributes:</p>
                        <p>The &lt;abbr&gt; tag supports the Global Attributes in HTML.</p>
                        <p>Event Attributes:</p>
                        <p>The &lt;abbr&gt; tag supports the Event Attributes in HTML.</p>
                        <p>More Examples:</p>
                        <p>The &lt;abbr&gt; tag can also be used with &lt;dfn&gt; to define an abbreviation:</p>
                        <p><dfn><abbr title="Cascading Style Sheets">CSS</abbr></dfn> is a language that describes the style of an HTML document.</p>
                        <p>Related Pages:</p>
                        <p>HTML DOM reference: Abbreviation Object</p>
                        <p>Default CSS Settings:</p>
                        <p>Most browsers will display the &lt;abbr&gt; element with the following default values:</p>
                        <pre>{`abbr {
              display: inline;
            }`}</pre>
                      </div>
                    )
      case '<acronym>':
          // Return JSX explaining the acronym tag and providing an example
          return (
                    <div>
              <p>Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.</p>
              <p>The &lt;acronym&gt; HTML element allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.</p>
              <p>Warning: Don't use this element. Use the &lt;abbr&gt; element instead.</p>
              <p>Attributes:</p>
              <p>This element only has global attributes, which are common to all elements.</p>
              <p>DOM Interface:</p>
              <p>This element implements the HTMLElement interface.</p>
              <p>Examples:</p>
              <p>HTML:</p>
              <pre>{`<p>
    The &lt;acronym title="World Wide Web"&gt;WWW&lt;/acronym&gt; is only a component of the
    Internet.
  </p>`}</pre>
              <p>Result:</p>
              <p>The <acronym title="World Wide Web">WWW</acronym> is only a component of the Internet.</p>
              <p>Default styling:</p>
              <p>Though the purpose of this tag is purely for the convenience of the author, its default styling varies from one browser to another:</p>
              <ul>
                <li>Opera, Firefox, Chrome, and some others add a dotted underline to the content of the element.</li>
                <li>A few browsers not only add a dotted underline, but also put it in small caps; to avoid this styling, adding something like font-variant: none in the CSS takes care of this case.</li>
              </ul>
              <p>It is therefore recommended that web authors either explicitly style this element, or accept some cross-browser variation.</p>
              <p>Specifications:</p>
              <p>HTML Standard</p>
              <p>Browser Compatibility:</p>
              <p>... (Compatibility data)</p>
              <p>See also:</p>
              <p>The &lt;abbr&gt; HTML element</p>
            </div>
          );
       
          case '<address>':
            // Return JSX explaining the address tag and providing an example
            return (
                <div>
                    <p>This tag defines contact information for the author/owner of a document.</p>
                    <p>Example:</p>
                    <p>{'<address>'}</p>
                    <p>&nbsp;&nbsp; John Doe</p>
                    <p>&nbsp;&nbsp; 123 Main Street</p>
                    <p>&nbsp;&nbsp; City, State ZIP</p>
                    <p>{'</address>'}</p>
                </div>
            );
        
        case '<applet>':
            // Return JSX explaining the applet tag and providing an example
            return (
                <div>
                    <p>This tag is obsolete. Use {'<embed>'} or {'<object>'} instead.</p>
                    <p>Example:</p>
                    <p>{'<object data="example.app" type="application/x-java-applet">'}</p>
                    <p>&nbsp;&nbsp; Your browser does not support Java applets.</p>
                    <p>{'</object>'}</p>
                </div>
            );
        
        case '<area>':
            // Return JSX explaining the area tag and providing an example
            return (
                <div>
                    <p>This tag is obsolete. Use {'<embed>'} or {'<object>'} instead.</p>
                    <p>Example:</p>
                    <p>{'<object>'}</p>
                    <p>&nbsp;&nbsp; {'<param name="src" value="example.mp3"/>'}</p>
                    <p>{'</object>'}</p>
                </div>
            );
            case '<article>':
              // Return JSX explaining the article tag and providing an example
              return (
                  <div>
                      <p>This tag defines an article or a piece of content that is part of a larger document.</p>
                      <p>Example:</p>
                      <p>{'<article>'}</p>
                      <p>&nbsp;&nbsp; <h1>Article Title</h1></p>
                      <p>&nbsp;&nbsp; <p>Article content goes here.</p></p>
                      <p>{'</article>'}</p>
                  </div>
              );
          
          case '<aside>':
              // Return JSX explaining the aside tag and providing an example
              return (
                  <div>
                      <p>This tag defines content that is aside from the content it is placed in.</p>
                      <p>Example:</p>
                      <p>{'<aside>'}</p>
                      <p>&nbsp;&nbsp; <p>Related information or sidebar content goes here.</p></p>
                      <p>{'</aside>'}</p>
                  </div>
              );
          
          case '<audio>':
              // Return JSX explaining the audio tag and providing an example
              return (
                  <div>
                      <p>This tag embeds sound content in documents.</p>
                      <p>Example:</p>
                      <p>{'<audio controls>'}</p>
                      <p>&nbsp;&nbsp; {'<source src="audio.mp3" type="audio/mpeg">'}</p>
                      <p>{'</audio>'}</p>
                  </div>
              );
          
          case '<b>':
              // Return JSX explaining the b tag and providing an example
              return (
                  <div>
                      <p>This tag is used to make the text bold.</p>
                      <p>Example:</p>
                      <p>{'<b>This text will be bold</b>'}</p>
                  </div>
              );
          
          case '<base>':
              // Return JSX explaining the base tag and providing an example
              return (
                  <div>
                      <p>This tag specifies the base URL/target for all relative URLs in a document.</p>
                      <p>Example:</p>
                      <p>{'<base href="https://example.com/">'}</p>
                  </div>
              );
          
          case '<basefont>':
              // Return JSX explaining the basefont tag and providing an example
              return (
                  <div>
                      <p>This tag is obsolete. Use CSS to style fonts instead.</p>
                      <p>Example:</p>
                      <p>{'<style> body { font-family: Arial, sans-serif; } </style>'}</p>
                  </div>
              );
          
          case '<bdi>':
              // Return JSX explaining the bdi tag and providing an example
              return (
                  <div>
                      <p>This tag isolates a part of text that might be formatted in a different direction from other text.</p>
                      <p>Example:</p>
                      <p>{'<p>This text <bdi>سلام</bdi> is in Arabic.</p>'}</p>
                  </div>
              );
          
          case '<bdo>':
              // Return JSX explaining the bdo tag and providing an example
              return (
                  <div>
                      <p>This tag overrides the current text direction.</p>
                      <p>Example:</p>
                      <p>{'<p>This text is in English <bdo dir="rtl">سلام</bdo> in Arabic.</p>'}</p>
                  </div>
              );
          
              case '<big>':
                // Return JSX explaining the big tag and providing an example
                return (
                    <div>
                        <p>This tag increases the text font size by one size.</p>
                        <p>Example:</p>
                        <p>{'<big>This text will be rendered with a bigger font size.</big>'}</p>
                    </div>
                );
            
            case '<blockquote>':
                // Return JSX explaining the blockquote tag and providing an example
                return (
                    <div>
                        <p>This tag defines a section that is quoted from another source.</p>
                        <p>Example:</p>
                        <p>{'<blockquote>'}</p>
                        <p>&nbsp;&nbsp; Quoted text goes here.</p>
                        <p>{'</blockquote>'}</p>
                    </div>
                );
            
            case '<body>':
                // Return JSX explaining the body tag and providing an example
                return (
                    <div>
                        <p>This tag defines the document's body.</p>
                        <p>Example:</p>
                        <p>{'<body>'}</p>
                        <p>&nbsp;&nbsp; Document content goes here.</p>
                        <p>{'</body>'}</p>
                    </div>
                );
            
            case '<br>':
                // Return JSX explaining the br tag and providing an example
                return (
                    <div>
                        <p>This tag produces a line break in the text.</p>
                        <p>Example:</p>
                        <p>{'This is the first line.<br/>This is the second line.'}</p>
                    </div>
                );
            
            case '<button>':
                // Return JSX explaining the button tag and providing an example
                return (
                    <div>
                        <p>This tag defines a clickable button.</p>
                        <p>Example:</p>
                        <p>{'<button type="button">Click Me</button>'}</p>
                    </div>
                );
            
            case '<canvas>':
                // Return JSX explaining the canvas tag and providing an example
                return (
                    <div>
                        <p>This tag is used to draw graphics, on the fly, via JavaScript.</p>
                        <p>Example:</p>
                        <p>{'<canvas id="myCanvas" width="200" height="100"></canvas>'}</p>
                    </div>
                );
            
            case '<caption>':
                // Return JSX explaining the caption tag and providing an example
                return (
                    <div>
                        <p>This tag defines a table caption.</p>
                        <p>Example:</p>
                        <p>{'<caption>Table Caption</caption>'}</p>
                    </div>
                );
            
            case '<center>':
                // Return JSX explaining the center tag and providing an example
                return (
                    <div>
                        <p>This tag is obsolete. Use CSS to center text and other elements instead.</p>
                        <p>Example:</p>
                        <p>{'<div style="text-align: center;">Centered Text</div>'}</p>
                    </div>
                );
            
            case '<cite>':
                // Return JSX explaining the cite tag and providing an example
                return (
                    <div>
                        <p>This tag defines the title of a creative work.</p>
                        <p>Example:</p>
                        <p>{'<cite>Book Title</cite>'}</p>
                    </div>
                );
            
            case '<code>':
                // Return JSX explaining the code tag and providing an example
                return (
                    <div>
                        <p>This tag defines a piece of computer code.</p>
                        <p>Example:</p>
                        <p>{'<code>console.log("Hello, world!");</code>'}</p>
                    </div>
                );
            
            case '<col>':
                // Return JSX explaining the col tag and providing an example
                return (
                    <div>
                        <p>This tag defines a column within a table and is used for defining common semantics on all common cells.</p>
                        <p>Example:</p>
                        <p>{'<col span="2" style="background-color: yellow;">'}</p>
                    </div>
                );
            
            case '<colgroup>':
                // Return JSX explaining the colgroup tag and providing an example
                return (
                    <div>
                        <p>This tag defines a group of columns within a table.</p>
                        <p>Example:</p>
                        <p>{'<colgroup>'}</p>
                        <p>&nbsp;&nbsp; {'<col style="background-color: yellow;">'}</p>
                        <p>&nbsp;&nbsp; {'<col style="background-color: green;">'}</p>
                        <p>{'</colgroup>'}</p>
                    </div>
                );
            
                case '<data>':
                  // Return JSX explaining the data tag and providing an example
                  return (
                      <div>
                          <p>This tag links a piece of content with a machine-readable translation.</p>
                          <p>Example:</p>
                          <p>{'<data value="12345">Product Code</data>'}</p>
                      </div>
                  );
              
              case '<datalist>':
                  // Return JSX explaining the datalist tag and providing an example
                  return (
                      <div>
                          <p>This tag contains a set of {'<option>'} elements that represent the permissible or suggested options available to users in other controls.</p>
                          <p>Example:</p>
                          <p>{'<datalist id="browsers">'}</p>
                          <p>&nbsp;&nbsp; {'<option value="Chrome">'}</p>
                          <p>&nbsp;&nbsp; {'<option value="Firefox">'}</p>
                          <p>&nbsp;&nbsp; {'<option value="Safari">'}</p>
                          <p>{'</datalist>'}</p>
                      </div>
                  );
              
              case '<dd>':
                  // Return JSX explaining the dd tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to describe a term/name in a description list.</p>
                          <p>Example:</p>
                          <p>{'<dl>'}</p>
                          <p>&nbsp;&nbsp; {'<dt>Term</dt>'}</p>
                          <p>&nbsp;&nbsp; {'<dd>Description</dd>'}</p>
                          <p>{'</dl>'}</p>
                      </div>
                  );
              
              case '<del>':
                  // Return JSX explaining the del tag and providing an example
                  return (
                      <div>
                          <p>This tag defines text that has been deleted from a document.</p>
                          <p>Example:</p>
                          <p>{'<del>Deleted text</del>'}</p>
                      </div>
                  );
              
              case '<details>':
                  // Return JSX explaining the details tag and providing an example
                  return (
                      <div>
                          <p>This tag defines additional details that the user can view or hide.</p>
                          <p>Example:</p>
                          <p>{'<details>'}</p>
                          <p>&nbsp;&nbsp; {'<summary>Summary</summary>'}</p>
                          <p>&nbsp;&nbsp; Additional details go here.</p>
                          <p>{'</details>'}</p>
                      </div>
                  );
              
              case '<dfn>':
                  // Return JSX explaining the dfn tag and providing an example
                  return (
                      <div>
                          <p>This tag represents the defining instance of a term.</p>
                          <p>Example:</p>
                          <p>{'<dfn>Definition</dfn>'}</p>
                      </div>
                  );
              
              case '<dialog>':
                  // Return JSX explaining the dialog tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a dialog box or window.</p>
                          <p>Example:</p>
                          <p>{'<dialog>'}</p>
                          <p>&nbsp;&nbsp; Dialog content goes here.</p>
                          <p>{'</dialog>'}</p>
                      </div>
                  );
              
              case '<dir>':
                  // Return JSX explaining the dir tag and providing an example
                  return (
                      <div>
                          <p>This tag is obsolete. Use {'<ul>'} instead.</p>
                          <p>Example:</p>
                          <p>{'<ul>'}</p>
                          <p>&nbsp;&nbsp; <li>List item 1</li></p>
                          <p>&nbsp;&nbsp; <li>List item 2</li></p>
                          <p>{'</ul>'}</p>
                      </div>
                  );
              
              case '<div>':
                  // Return JSX explaining the div tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a division or a section in an HTML document.</p>
                          <p>Example:</p>
                          <p>{'<div>'}</p>
                          <p>&nbsp;&nbsp; Division content goes here.</p>
                          <p>{'</div>'}</p>
                      </div>
                  );
              
              case '<dl>':
                  // Return JSX explaining the dl tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a description list.</p>
                          <p>Example:</p>
                          <p>{'<dl>'}</p>
                          <p>&nbsp;&nbsp; {'<dt>Term</dt>'}</p>
                          <p>&nbsp;&nbsp; {'<dd>Description</dd>'}</p>
                          <p>{'</dl>'}</p>
                      </div>
                  );
              
              case '<dt>':
                  // Return JSX explaining the dt tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to define the term/name in a description list.</p>
                          <p>Example:</p>
                          <p>{'<dl>'}</p>
                          <p>&nbsp;&nbsp; {'<dt>Term</dt>'}</p>
                          <p>&nbsp;&nbsp; {'<dd>Description</dd>'}</p>
                          <p>{'</dl>'}</p>
                      </div>
                  );
              
              case '<em>':
                  // Return JSX explaining the em tag and providing an example
                  return (
                      <div>
                          <p>This tag defines emphasized text.</p>
                          <p>Example:</p>
                          <p>{'<em>Emphasized text</em>'}</p>
                      </div>
                  );
              
              case '<embed>':
                  // Return JSX explaining the embed tag and providing an example
                  return (
                      <div>
                          <p>This tag embeds external content at the specified point in the document.</p>
                          <p>Example:</p>
                          <p>{'<embed src="video.mp4">'}</p>
                      </div>
                  );
              
              case '<fieldset>':
                  // Return JSX explaining the fieldset tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to group related elements within a form.</p>
                          <p>Example:</p>
                          <p>{'<fieldset>'}</p>
                          <p>&nbsp;&nbsp; Form elements go here.</p>
                          <p>{'</fieldset>'}</p>
                      </div>
                  );
              
              case '<figcaption>':
                  // Return JSX explaining the figcaption tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to add a caption to an {'<figure>'} element.</p>
                          <p>Example:</p>
                          <p>{'<figure>'}</p>
                          <p>&nbsp;&nbsp; Figure content goes here.</p>
                          <p>&nbsp;&nbsp; {'<figcaption>Caption</figcaption>'}</p>
                          <p>{'</figure>'}</p>
                      </div>
                  );
              
              case '<figure>':
                  // Return JSX explaining the figure tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to group any content that is referenced from the main content, and that could affect the flow of the document.</p>
                          <p>Example:</p>
                          <p>{'<figure>'}</p>
                          <p>&nbsp;&nbsp; Figure content goes here.</p>
                          <p>{'</figure>'}</p>
                      </div>
                  );
              
              case '<font>':
                  // Return JSX explaining the font tag and providing an example
                  return (
                      <div>
                          <p>This tag is obsolete. Use CSS to style fonts instead.</p>
                          <p>Example:</p>
                          <p>{'<span style="font-family: Arial;">Text with custom font</span>'}</p>
                      </div>
                  );
              
              case '<footer>':
                  // Return JSX explaining the footer tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a footer for a document or section.</p>
                          <p>Example:</p>
                          <p>{'<footer>Footer content</footer>'}</p>
                      </div>
                  );
              
              case '<form>':
                  // Return JSX explaining the form tag and providing an example
                  return (
                      <div>
                          <p>This tag defines an HTML form for user input.</p>
                          <p>Example:</p>
                          <p>{'<form action="/submit" method="post">'}</p>
                          <p>&nbsp;&nbsp; Form elements go here.</p>
                          <p>{'</form>'}</p>
                      </div>
                  );
              
              case '<frame>':
                  // Return JSX explaining the frame tag and providing an example
                  return (
                      <div>
                          <p>This tag is obsolete. Use  {'<frame>'} instead.</p>
                          <p>Example:</p>
                          <p>{'<iframe src="page.html"></iframe>'}</p>
                      </div>
                  );
              
              case '<frameset>':
                  // Return JSX explaining the frameset tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to contain {'<frame>'} elements.</p>
                          <p>Example:</p>
                          <p>{'<frameset>'}</p>
                          <p>&nbsp;&nbsp; {'<frame src="page1.html">'}</p>
                          <p>&nbsp;&nbsp; {'<frame src="page2.html">'}</p>
                          <p>{'</frameset>'}</p>
                      </div>
                  );
              
              case '<h1> - <h6>':
                  // Return JSX explaining the h1-h6 tags and providing an example
                  return (
                      <div>
                          <p>These tags define HTML headings.</p>
                          <p>Example:</p>
                          <p>{'<h1>Heading 1</h1>'}</p>
                          <p>{'<h2>Heading 2</h2>'}</p>
                          <p>{'<h3>Heading 3</h3>'}</p>
                          <p>{'<h4>Heading 4</h4>'}</p>
                          <p>{'<h5>Heading 5</h5>'}</p>
                          <p>{'<h6>Heading 6</h6>'}</p>
                      </div>
                  );
              
              case '<head>':
                  // Return JSX explaining the head tag and providing an example
                  return (
                      <div>
                          <p>This tag contains meta-information about the HTML document.</p>
                          <p>Example:</p>
                          <p>{'<head>'}</p>
                          <p>&nbsp;&nbsp; Meta tags, title, and other elements go here.</p>
                          <p>{'</head>'}</p>
                      </div>
                  );
              
              case '<header>':
                  // Return JSX explaining the header tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a header for a document or section.</p>
                          <p>Example:</p>
                          <p>{'<header>Header content</header>'}</p>
                      </div>
                  );
              
              case '<hgroup>':
                  // Return JSX explaining the hgroup tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to group header elements.</p>
                          <p>Example:</p>
                          <p>{'<hgroup>'}</p>
                          <p>&nbsp;&nbsp; {'<h1>Main Heading</h1>'}</p>
                          <p>&nbsp;&nbsp; {'<h2>Sub Heading</h2>'}</p>
                          <p>{'</hgroup>'}</p>
                      </div>
                  );
              
              case '<hr>':
                  // Return JSX explaining the hr tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a thematic break in the content.</p>
                          <p>Example:</p>
                          <p>{'<hr>'}</p>
                      </div>
                  );
              
              case '<html>':
                  // Return JSX explaining the html tag and providing an example
                  return (
                      <div>
                          <p>This tag defines the root of an HTML document.</p>
                          <p>Example:</p>
                          <p>{'<html>'}</p>
                          <p>&nbsp;&nbsp; {'<head>'}</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp; Meta tags, title, and other elements go here.</p>
                          <p>&nbsp;&nbsp; {'</head>'}</p>
                          <p>&nbsp;&nbsp; {'<body>'}</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp; Document content goes here.</p>
                          <p>&nbsp;&nbsp; {'</body>'}</p>
                          <p>{'</html>'}</p>
                      </div>
                  );
              
              case '<i>':
                  // Return JSX explaining the i tag and providing an example
                  return (
                      <div>
                          <p>This tag defines italic text.</p>
                          <p>Example:</p>
                          <p>{'<i>Italicized text</i>'}</p>
                      </div>
                  );
              
              case '<iframe>':
                  // Return JSX explaining the iframe tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to embed another document within the current HTML document.</p>
                          <p>Example:</p>
                          <p>{'<iframe src="page.html"></iframe>'}</p>
                      </div>
                  );
              
              case '<img>':
                  // Return JSX explaining the img tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to embed images in a document.</p>
                          <p>Example:</p>
                          <p>{'<img src="image.jpg" alt="Description">'}</p>
                      </div>
                  );
              
              case '<input>':
                  // Return JSX explaining the input tag and providing an example
                  return (
                      <div>
                          <p>This tag is used to create interactive controls within forms.</p>
                          <p>Example:</p>
                          <p>{'<input type="text" name="fname">'}</p>
                      </div>
                  );
              
              case '<ins>':
                  // Return JSX explaining the ins tag and providing an example
                  return (
                      <div>
                          <p>This tag defines text that has been inserted into a document.</p>
                          <p>Example:</p>
                          <p>{'<ins>Inserted text</ins>'}</p>
                      </div>
                  );
              
              case '<kbd>':
                  // Return JSX explaining the kbd tag and providing an example
                  return (
                      <div>
                          <p>This tag defines keyboard input.</p>
                          <p>Example:</p>
                          <p>{'<kbd>Ctrl</kbd>'}</p>
                      </div>
                  );
              
              case '<label>':
                  // Return JSX explaining the label tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a label for an input, meter, output, progress, select, or textarea element.</p>
                          <p>Example:</p>
                          <p>{'<label for="username">Username:</label>'}</p>
                          <p>{'<input type="text" id="username" name="username">'}</p>
                      </div>
                  );
              
              case '<legend>':
                  // Return JSX explaining the legend tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a caption for the content of its parent fieldset.</p>
                          <p>Example:</p>
                          <p>{'<fieldset>'}</p>
                          <p>&nbsp;&nbsp; {'<legend>Personal Information</legend>'}</p>
                          <p>&nbsp;&nbsp; Form elements go here.</p>
                          <p>{'</fieldset>'}</p>
                      </div>
                  );
              
              case '<li>':
                  // Return JSX explaining the li tag and providing an example
                  return (
                      <div>
                          <p>This tag defines a list item within an ordered or unordered list.</p>
                          <p>Example:</p>
                          <p>{'<ul>'}</p>
                          <p>&nbsp;&nbsp; {'<li>List item 1</li>'}</p>
                          <p>&nbsp;&nbsp; {'<li>List item 2</li>'}</p>
                          <p>{'</ul>'}</p>
                      </div>
                  );
              
              case '<link>':
                  // Return JSX explaining the link tag and providing an example
                  return (
                      <div>
                          <p>This tag defines the relationship between the current document and an external resource.</p>
                          <p>Example:</p>
                          <p>{'<link rel="stylesheet" href="styles.css">'}</p>
                      </div>
                  );
              
              case '<main>':
                  // Return JSX explaining the main tag and providing an example
                  return (
                      <div>
                          <p>This tag defines the main content within a document.</p>
                          <p>Example:</p>
                          <p>{'<main>Main content goes here.</main>'}</p>
                      </div>
                  );
              
                  case '<map>':
                    // Return JSX explaining the map tag and providing an example
                    return (
                        <div>
                            <p>This tag defines a client-side image map.</p>
                            <p>Example:</p>
                            <p>{'<map name="image-map">'}</p>
                            <p>&nbsp;&nbsp; {'<area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun"> '}</p>
                            <p>{'</map>'}</p>
                            <p>{'<img src="planets.jpg" usemap="#image-map">'}</p>
                        </div>
                    );
                
                case '<mark>':
                    // Return JSX explaining the mark tag and providing an example
                    return (
                        <div>
                            <p>This tag is used to highlight parts of text.</p>
                            <p>Example:</p>
                            <p>{'<p>Visit <mark>OpenAI</mark> for AI-related content.</p>'}</p>
                        </div>
                    );
                
                case '<menu>':
                    // Return JSX explaining the menu tag and providing an example
                    return (
                        <div>
                            <p>This tag is used to define a command list or dropdown list.</p>
                            <p>Example:</p>
                            <p>{'<menu>'}</p>
                            <p>&nbsp;&nbsp; {'<li><a href="#home">Home</a></li>'}</p>
                            <p>&nbsp;&nbsp; {'<li><a href="#about">About</a></li>'}</p>
                            <p>&nbsp;&nbsp; {'<li><a href="#contact">Contact</a></li>'}</p>
                            <p>{'</menu>'}</p>
                        </div>
                    );
                
                case '<meta>':
                    // Return JSX explaining the meta tag and providing an example
                    return (
                        <div>
                            <p>This tag provides metadata about the HTML document.</p>
                            <p>Example:</p>
                            <p>{'<meta charset="UTF-8">'}</p>
                            <p>{'<meta name="description" content="A description of the page">'}</p>
                        </div>
                    );
                
                case '<meter>':
                    // Return JSX explaining the meter tag and providing an example
                    return (
                        <div>
                            <p>This tag defines a scalar measurement within a known range.</p>
                            <p>Example:</p>
                            <p>{'<meter value="5" min="0" max="10">5 out of 10</meter>'}</p>
                        </div>
                    );
                
                case '<nav>':
                    // Return JSX explaining the nav tag and providing an example
                    return (
                        <div>
                            <p>This tag defines navigation links in a document.</p>
                            <p>Example:</p>
                            <p>{'<nav>'}</p>
                            <p>&nbsp;&nbsp; {'<a href="#home">Home</a>'}</p>
                            <p>&nbsp;&nbsp; {'<a href="#about">About</a>'}</p>
                            <p>&nbsp;&nbsp; {'<a href="#contact">Contact</a>'}</p>
                            <p>{'</nav>'}</p>
                        </div>
                    );
                
                case '<noframes>':
                    // Return JSX explaining the noframes tag and providing an example
                    return (
                        <div>
                            <p>This tag is used to provide alternate content for browsers that do not support the {'<frameset>'} element.</p>
                            <p>Example:</p>
                            <p>{'<noframes>'}</p>
                            <p>&nbsp;&nbsp; {'<p>Your browser does not support frames.</p>'}</p>
                            <p>{'</noframes>'}</p>
                        </div>
                    );
                
                case '<noscript>':
                    // Return JSX explaining the noscript tag and providing an example
                    return (
                        <div>
                            <p>This tag defines alternate content to be displayed for browsers that do not support the script element or have the script element disabled.</p>
                            <p>Example:</p>
                            <p>{'<noscript>'}</p>
                            <p>&nbsp;&nbsp; {'<p>Please enable JavaScript to view this website.</p>'}</p>
                            <p>{'</noscript>'}</p>
                        </div>
                    );
                
                case '<object>':
                    // Return JSX explaining the object tag and providing an example
                    return (
                        <div>
                            <p>This tag embeds external content at the specified point in the document.</p>
                            <p>Example:</p>
                            <p>{'<object data="image.svg" type="image/svg+xml"></object>'}</p>
                        </div>
                    );
                
                case '<ol>':
                    // Return JSX explaining the ol tag and providing an example
                    return (
                        <div>
                            <p>This tag defines an ordered list.</p>
                            <p>Example:</p>
                            <p>{'<ol>'}</p>
                            <p>&nbsp;&nbsp; {'<li>Item 1</li>'}</p>
                            <p>&nbsp;&nbsp; {'<li>Item 2</li>'}</p>
                            <p>{'</ol>'}</p>
                        </div>
                    );
                
                case '<optgroup>':
                    // Return JSX explaining the optgroup tag and providing an example
                    return (
                        <div>
                            <p>This tag defines a group of options within a {'<select>'} element.</p>
                            <p>Example:</p>
                            <p>{'<select>'}</p>
                            <p>&nbsp;&nbsp; {'<optgroup label="Group 1">'}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<option value="1">Option 1</option>'}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<option value="2">Option 2</option>'}</p>
                            <p>&nbsp;&nbsp; {'</optgroup>'}</p>
                            <p>{'</select>'}</p>
                        </div>
                    );
                
                case '<option>':
                    // Return JSX explaining the option tag and providing an example
                    return (
                        <div>
                            <p>This tag defines an option in a {'<select>'} element.</p>
                            <p>Example:</p>
                            <p>{'<select>'}</p>
                            <p>&nbsp;&nbsp; {'<option value="1">Option 1</option>'}</p>
                            <p>&nbsp;&nbsp; {'<option value="2">Option 2</option>'}</p>
                            <p>{'</select>'}</p>
                        </div>
                    );
                
                case '<output>':
                    // Return JSX explaining the output tag and providing an example
                    return (
                        <div>
                            <p>This tag represents the result of a calculation or user action.</p>
                            <p>Example:</p>
                            <p>{'<output for="x"></output>'}</p>
                        </div>
                    );
                
                case '<p>':
                    // Return JSX explaining the p tag and providing an example
                    return (
                        <div>
                            <p>This tag defines a paragraph in an HTML document.</p>
                            <p>Example:</p>
                            <p>{'<p>This is a paragraph.</p>'}</p>
                        </div>
                    );
                
                case '<param>':
                    // Return JSX explaining the param tag and providing an example
                    return (
                        <div>
                            <p>This tag defines parameters for an object.</p>
                            <p>Example:</p>
                            <p>{'<object>'}</p>
                            <p>&nbsp;&nbsp; {'<param name="autoplay" value="true">'}</p>
                            <p>&nbsp;&nbsp; {'<param name="loop" value="true">'}</p>
                            <p>{'</object>'}</p>
                        </div>
                    );
                
                case '<picture>':
                    // Return JSX explaining the picture tag and providing an example
                    return (
                        <div>
                            <p>This tag defines a container for multiple image sources.</p>
                            <p>Example:</p>
                            <p>{'<picture>'}</p>
                            <p>&nbsp;&nbsp; {'<source srcset="image.jpg" media="(min-width: 800px)">'}</p>
                            <p>&nbsp;&nbsp; {'<img src="image-small.jpg" alt="Description">'}</p>
                            <p>{'</picture>'}</p>
                        </div>
                    );
                
                case '<pre>':
                    // Return JSX explaining the pre tag and providing an example
                    return (
                        <div>
                            <p>This tag defines preformatted text.</p>
                            <p>Example:</p>
                            <p>{'<pre>'}</p>
                            <p>&nbsp;&nbsp; {'Line 1'}</p>
                            <p>&nbsp;&nbsp; {'Line 2'}</p>
                            <p>{'</pre>'}</p>
                        </div>
                    );
                
                case '<progress>':
                    // Return JSX explaining the progress tag and providing an example
                    return (
                        <div>
                            <p>This tag represents the progress of a task.</p>
                            <p>Example:</p>
                            <p>{'<progress max="100" value="70">70%</progress>'}</p>
                        </div>
                    );
                
                case '<q>':
                    // Return JSX explaining the q tag and providing an example
                    return (
                        <div>
                            <p>This tag defines a short quotation.</p>
                            <p>Example:</p>
                            <p>{'<q>Here is a short quotation.</q>'}</p>
                        </div>
                    );
                
                case '<rp>':
                    // Return JSX explaining the rp tag and providing an example
                    return (
                        <div>
                            <p>This tag provides parentheses around the text of ruby annotations.</p>
                            <p>Example:</p>
                            <p>{'<ruby>'}</p>
                            <p>&nbsp;&nbsp; {'漢 <rp>(</rp><rt>kan</rt><rp>)</rp>'}</p>
                            <p>{'</ruby>'}</p>
                        </div>
                    );
                
                case '<rt>':
                    // Return JSX explaining the rt tag and providing an example
                    return (
                        <div>
                            <p>This tag defines the pronunciation of characters presented in a ruby annotation.</p>
                            <p>Example:</p>
                            <p>{'<ruby>'}</p>
                            <p>&nbsp;&nbsp; {'漢 <rp>(</rp><rt>kan</rt><rp>)</rp>'}</p>
                            <p>{'</ruby>'}</p>
                        </div>
                    );
                
                case '<ruby>':
                    // Return JSX explaining the ruby tag and providing an example
                    return (
                        <div>
                            <p>This tag represents a ruby annotation.</p>
                            <p>Example:</p>
                            <p>{'<ruby>'}</p>
                            <p>&nbsp;&nbsp; {'漢 <rp>(</rp><rt>kan</rt><rp>)</rp>'}</p>
                            <p>{'</ruby>'}</p>
                        </div>
                    );
                
                    case '<s>':
                      // Return JSX explaining the s tag and providing an example
                      return (
                          <div>
                              <p>This tag defines text that is no longer correct or relevant.</p>
                              <p>Example:</p>
                              <p>{'<s>This text is no longer relevant.</s>'}</p>
                          </div>
                      );
                  
                  case '<samp>':
                      // Return JSX explaining the samp tag and providing an example
                      return (
                          <div>
                              <p>This tag represents sample output from a computer program.</p>
                              <p>Example:</p>
                              <p>{'<samp>Sample output</samp>'}</p>
                          </div>
                      );
                  
                  case '<script>':
                      // Return JSX explaining the script tag and providing an example
                      return (
                          <div>
                              <p>This tag is used to embed or reference an executable script within an HTML or XHTML document.</p>
                              <p>Example:</p>
                              <p>{'<script type="text/javascript">alert("Hello, World!");</script>'}</p>
                          </div>
                      );
                  
                  case '<search>':
                      // Return JSX explaining the search tag and providing an example
                      return (
                          <div>
                              <p>This tag represents a search field.</p>
                              <p>Example:</p>
                              <p>{'<search>'}</p>
                          </div>
                      );
                  
                  case '<section>':
                      // Return JSX explaining the section tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a section in an HTML document.</p>
                              <p>Example:</p>
                              <p>{'<section>'}</p>
                              <p>&nbsp;&nbsp; {'<h2>Section Title</h2>'}</p>
                              <p>&nbsp;&nbsp; {'<p>Section content goes here.</p>'}</p>
                              <p>{'</section>'}</p>
                          </div>
                      );
                  
                  case '<select>':
                      // Return JSX explaining the select tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a dropdown list.</p>
                              <p>Example:</p>
                              <p>{'<select>'}</p>
                              <p>&nbsp;&nbsp; {'<option value="1">Option 1</option>'}</p>
                              <p>&nbsp;&nbsp; {'<option value="2">Option 2</option>'}</p>
                              <p>{'</select>'}</p>
                          </div>
                      );
                  
                  case '<small>':
                      // Return JSX explaining the small tag and providing an example
                      return (
                          <div>
                              <p>This tag defines smaller text.</p>
                              <p>Example:</p>
                              <p>{'<small>Small text</small>'}</p>
                          </div>
                      );
                  
                  case '<source>':
                      // Return JSX explaining the source tag and providing an example
                      return (
                          <div>
                              <p>This tag defines multiple media resources for {'<video>'} or {'<audio>'} elements.</p>
                              <p>Example:</p>
                              <p>{'<video>'}</p>
                              <p>&nbsp;&nbsp; {'<source src="movie.mp4" type="video/mp4">'}</p>
                              <p>{'</video>'}</p>
                          </div>
                      );
                  
                  case '<span>':
                      // Return JSX explaining the span tag and providing an example
                      return (
                          <div>
                              <p>This tag is used to group inline-elements in a document.</p>
                              <p>Example:</p>
                              <p>{'<span style="color: red;">Red text</span>'}</p>
                          </div>
                      );
                  
                  case '<strike>':
                      // Return JSX explaining the strike tag and providing an example
                      return (
                          <div>
                              <p>This tag is obsolete. Use {'<del>'} or {'<s>'} instead.</p>
                              <p>Example:</p>
                              <p>{'<del>This text has been deleted.</del>'}</p>
                          </div>
                      );
                  
                  case '<strong>':
                      // Return JSX explaining the strong tag and providing an example
                      return (
                          <div>
                              <p>This tag defines strong importance or importance.</p>
                              <p>Example:</p>
                              <p>{'<strong>Important text</strong>'}</p>
                          </div>
                      );
                  
                  case '<style>':
                      // Return JSX explaining the style tag and providing an example
                      return (
                          <div>
                              <p>This tag is used to embed CSS within an HTML document.</p>
                              <p>Example:</p>
                              <p>{'<style>'}</p>
                              <p>&nbsp;&nbsp; {'body { color: blue; }'}</p>
                              <p>{'</style>'}</p>
                          </div>
                      );
                  
                  case '<sub>':
                      // Return JSX explaining the sub tag and providing an example
                      return (
                          <div>
                              <p>This tag defines subscript text.</p>
                              <p>Example:</p>
                              <p>{'H<sub>2</sub>O'}</p>
                          </div>
                      );
                  
                  case '<summary>':
                      // Return JSX explaining the summary tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a visible heading for the {'<details>'} element.</p>
                              <p>Example:</p>
                              <p>{'<details>'}</p>
                              <p>&nbsp;&nbsp; {'<summary>Click to expand</summary>'}</p>
                              <p>&nbsp;&nbsp; {'<p>Additional content</p>'}</p>
                              <p>{'</details>'}</p>
                          </div>
                      );
                  
                  case '<sup>':
                      // Return JSX explaining the sup tag and providing an example
                      return (
                          <div>
                              <p>This tag defines superscript text.</p>
                              <p>Example:</p>
                              <p>{'x<sup>2</sup>'}</p>
                          </div>
                      );
                  
                  case '<svg>':
                      // Return JSX explaining the svg tag and providing an example
                      return (
                          <div>
                              <p>This tag defines an SVG graphic.</p>
                              <p>Example:</p>
                              <p>{'<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="red" /></svg>'}</p>
                          </div>
                      );
                  
                  case '<table>':
                      // Return JSX explaining the table tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a table.</p>
                              <p>Example:</p>
                              <p>{'<table>'}</p>
                              <p>&nbsp;&nbsp; {'<tr>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<td>Cell 1</td>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<td>Cell 2</td>'}</p>
                              <p>&nbsp;&nbsp; {'</tr>'}</p>
                              <p>{'</table>'}</p>
                          </div>
                      );
                  
                  case '<tbody>':
                      // Return JSX explaining the tbody tag and providing an example
                      return (
                          <div>
                              <p>This tag groups the body content in an HTML table.</p>
                              <p>Example:</p>
                              <p>{'<tbody>'}</p>
                              <p>&nbsp;&nbsp; {'<tr>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<td>Cell 1</td>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<td>Cell 2</td>'}</p>
                              <p>&nbsp;&nbsp; {'</tr>'}</p>
                              <p>{'</tbody>'}</p>
                          </div>
                      );
                  
                  case '<td>':
                      // Return JSX explaining the td tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a data cell in an HTML table.</p>
                              <p>Example:</p>
                              <p>{'<td>Data</td>'}</p>
                          </div>
                      );
                  
                  case '<template>':
                      // Return JSX explaining the template tag and providing an example
                      return (
                          <div>
                              <p>This tag is used to declare fragments of HTML that can be cloned and inserted in the document by script.</p>
                              <p>Example:</p>
                              <p>{'<template id="myTemplate">'}</p>
                              <p>&nbsp;&nbsp; {'<p>This is a template.</p>'}</p>
                              <p>{'</template>'}</p>
                          </div>
                      );
                  
                  case '<textarea>':
                      // Return JSX explaining the textarea tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a multiline text input control.</p>
                              <p>Example:</p>
                              <p>{'<textarea rows="4" cols="50"></textarea>'}</p>
                          </div>
                      );
                  
                  case '<tfoot>':
                      // Return JSX explaining the tfoot tag and providing an example
                      return (
                          <div>
                              <p>This tag groups the footer content in an HTML table.</p>
                              <p>Example:</p>
                              <p>{'<tfoot>'}</p>
                              <p>&nbsp;&nbsp; {'<tr>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<td>Footer 1</td>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<td>Footer 2</td>'}</p>
                              <p>&nbsp;&nbsp; {'</tr>'}</p>
                              <p>{'</tfoot>'}</p>
                          </div>
                      );
                  
                  case '<th>':
                      // Return JSX explaining the th tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a header cell in an HTML table.</p>
                              <p>Example:</p>
                              <p>{'<th>Header</th>'}</p>
                          </div>
                      );
                  
                  case '<thead>':
                      // Return JSX explaining the thead tag and providing an example
                      return (
                          <div>
                              <p>This tag groups the header content in an HTML table.</p>
                              <p>Example:</p>
                              <p>{'<thead>'}</p>
                              <p>&nbsp;&nbsp; {'<tr>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<th>Header 1</th>'}</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp; {'<th>Header 2</th>'}</p>
                              <p>&nbsp;&nbsp; {'</tr>'}</p>
                              <p>{'</thead>'}</p>
                          </div>
                      );
                  
                  case '<time>':
                      // Return JSX explaining the time tag and providing an example
                      return (
                          <div>
                              <p>This tag represents a specific period in time.</p>
                              <p>Example:</p>
                              <p>{'<time datetime="2024-03-05">March 5, 2024</time>'}</p>
                          </div>
                      );
                  
                  case '<title>':
                      // Return JSX explaining the title tag and providing an example
                      return (
                          <div>
                              <p>This tag defines the title of the document.</p>
                              <p>Example:</p>
                              <p>{'<title>Document Title</title>'}</p>
                          </div>
                      );
                  
                  case '<tr>':
                      // Return JSX explaining the tr tag and providing an example
                      return (
                          <div>
                              <p>This tag defines a row in an HTML table.</p>
                              <p>Example:</p>
                              <p>{'<tr>'}</p>
                              <p>&nbsp;&nbsp; {'<td>Cell 1</td>'}</p>
                              <p>&nbsp;&nbsp; {'<td>Cell 2</td>'}</p>
                              <p>{'</tr>'}</p>
                          </div>
                      );
                  
                  case '<track>':
                      // Return JSX explaining the track tag and providing an example
                      return (
                          <div>
                              <p>This tag is used to specify subtitles, captions, or other files associated with media elements.</p>
                              <p>Example:</p>
                              <p>{'<track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English">'}</p>
                          </div>
                      );
                  
                  case '<tt>':
                      // Return JSX explaining the tt tag and providing an example
                      return (
                          <div>
                              <p>This tag defines teletype text.</p>
                              <p>Example:</p>
                              <p>{'<tt>Teletype text</tt>'}</p>
                          </div>
                      );
                  
  case '<u>':
    // Return JSX explaining the u tag and providing an example
    return (
        <div>
            <p>This tag defines underlined text.</p>
            <p>Example:</p>
            <p>{'<u>Underlined text</u>'}</p>
        </div>
    );

case '<ul>':
    // Return JSX explaining the ul tag and providing an example
    return (
        <div>
            <p>This tag defines an unordered list.</p>
            <p>Example:</p>
            <p>{'<ul>'}</p>
            <p>&nbsp;&nbsp; {'<li>Item 1</li>'}</p>
            <p>&nbsp;&nbsp; {'<li>Item 2</li>'}</p>
            <p>{'</ul>'}</p>
        </div>
    );

case '<var>':
    // Return JSX explaining the var tag and providing an example
    return (
        <div>
            <p>This tag represents the name of a variable in a mathematical expression or a programming context.</p>
            <p>Example:</p>
            <p>{'Let <var>x</var> be a variable.'}</p>
        </div>
    );

case '<video>':
    // Return JSX explaining the video tag and providing an example
    return (
        <div>
            <p>This tag embeds video content in a document.</p>
            <p>Example:</p>
            <p>{'<video width="320" height="240" controls>'}</p>
            <p>&nbsp;&nbsp; {'<source src="movie.mp4" type="video/mp4">'}</p>
            <p>{'</video>'}</p>
        </div>
    );

case '<wbr>':
    // Return JSX explaining the wbr tag and providing an example
    return (
        <div>
            <p>This tag defines a possible line-break in the text.</p>
            <p>Example:</p>
            <p>{'This is a very long word: supercalifragilisticexpialidocious<wbr />'}</p>
        </div>
    );

default:
    return <p>{tag}</p>;

}

    };
    

  
    return (
        <div>
        <div className="tag-info-panel">
          <h3>{selectedTag}</h3>
          {getTagInfo(selectedTag)}
    
          {/* Example of copied state */}
          {isCopied && <div>Copied!</div>}
        
        </div>
     
        </div>
            
      );
    };
    
    export default TagInfoPanel;