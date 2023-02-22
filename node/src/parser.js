function peopleToHtml(rows) {
  lines = rows.reduce(
    (html, row) => html + `<li>${row.id}: ${row.name}</li>\n`,
    ""
  );

  return `<ul>\n${lines}</ul>`;
}

module.exports = { peopleToHtml };
