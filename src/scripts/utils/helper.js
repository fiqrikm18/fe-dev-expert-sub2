/**
 * convert Object HtmlDivElement to string
 *
 * @param node html element need to convert to string
 * @returns {string|string}
 */
function outerHTML(node) {
  return node.outerHTML || new XMLSerializer().serializeToString(node);
}

export default outerHTML;
