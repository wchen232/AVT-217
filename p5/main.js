$(document).ready(function(){
  console.log("Document is ready");

  var links = [
  'https://www.youtube.com/embed/P5l2wBEWNKc',
  'https://www.youtube.com/embed/hLym7dcWw68',
  'https://www.youtube.com/embed/ys099qG3HVY',
  'https://www.youtube.com/embed/92wik18z78Y',
  'https://www.youtube.com/embed/O2yRtgaldgg',
  'https://www.youtube.com/embed/W8gaZvgO9ac',
  'https://www.youtube.com/embed/JBSbyOzun0Y',
  'https://www.youtube.com/embed/9EocrqxkvDk',
  'https://www.youtube.com/embed/zN91WQzqQYc',
  'https://www.youtube.com/embed/8kaW5xJ8WlI'
  ];

  randomVideo();

  function randomVideo() {
    // Make sure we do not display the same video twice in a row
    var random = Math.floor(Math.random() * links.length);
    document.getElementById("video").src = links[random];
  }
});
