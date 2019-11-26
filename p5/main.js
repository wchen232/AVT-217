$(document).ready(function(){
  console.log("Document is ready");

  var links = [
  'http://www.youtube.com/embed/P5l2wBEWNKc',
  'http://www.youtube.com/embed/hLym7dcWw68',
  'http://www.youtube.com/embed/ys099qG3HVY',
  'http://www.youtube.com/embed/92wik18z78Y',
  'http://www.youtube.com/embed/O2yRtgaldgg',
  'http://www.youtube.com/embed/W8gaZvgO9ac',
  'http://www.youtube.com/embed/JBSbyOzun0Y',
  'http://www.youtube.com/embed/9EocrqxkvDk',
  'http://www.youtube.com/embed/zN91WQzqQYc',
  'http://www.youtube.com/embed/8kaW5xJ8WlI'
  ];

  randomVideo();

  function randomVideo() {
    // Make sure we do not display the same video twice in a row
    var random = Math.floor(Math.random() * links.length);
    document.getElementById("video").src = links[random];
  }
});
