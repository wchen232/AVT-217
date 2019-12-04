$(document).ready(function(){
  console.log("Document is ready");

  var links = [
  'https://streamable.com/s/crn28/mgdvrl',  //Exterminate (GX)
  'https://streamable.com/s/qm82/fmewbh',   //Space Shuttle Scene (GX)
  'https://streamable.com/s/gr15u/eoqmeu',  //Phoenix Flamme (G)
  'https://streamable.com/s/6ul0n/htbloe',  //Beef Stroganoff (GX)
  'https://streamable.com/s/chmh6/jrayel',  //Synchrogazer (OG)
  'https://streamable.com/s/gq3sy/ckrxqx',  //Vitalization (G)
  'https://streamable.com/s/hyd1t/qlzrio',  //Testament (AXZ)
  'https://streamable.com/s/2mzx2/lfpgjb',  //Seiten Galaxy Cross (GX)
  'https://streamable.com/s/ayign/rshthq',  //Gekishou Infinity (AXZ)
  'https://streamable.com/s/u97sk/qkexnf',  //Genjuro (AXZ)
  'https://streamable.com/s/hp3k/thjclu',   //G-Beat (GX)
  'https://streamable.com/s/hkmdg/punghx',  //Radiant Force IGNITED (GX)
  'https://streamable.com/s/xdf2h/bgdnwl',  //Ame no Habakiri (OG)
  'https://streamable.com/s/gto8w/lypwnt',  //Hibiki Transforms (XV)
  'https://streamable.com/s/uklij/dstti',   //Tsubasa Transforms (G)
  'https://streamable.com/s/3vwgo/dnpsir',  //Chris Transforms (G)
  'https://streamable.com/s/9palx/ituxsq',  //Tsubasa (XV)
  'https://streamable.com/s/wqd7h/wgloef',  //Hibiki (G)
  'https://www.youtube.com/embed/qMJKzp6CkvA?rel=0;&autoplay=1',  //Chris (XV)
  'https://www.youtube.com/embed/3WtVidplrHw?rel=0;&autoplay=1',  //Maria (XV)
  'https://www.youtube.com/embed/eMl3t0grrRA?rel=0;&autoplay=1',  //Kirika (XV)
  'https://www.youtube.com/embed/Vgf0hUWt_ng?rel=0;&autoplay=1',  //Shirabe(XV)
  'https://www.youtube.com/embed/9f2djy1OIdk?rel=0;&autoplay=1',  //Lasting Song (XV)
  'https://www.youtube.com/embed/P5l2wBEWNKc?rel=0;&autoplay=1',  //Metanoia (XV)
  'https://streamable.com/s/qm82/fmewbh',
  'https://streamable.com/s/qm82/fmewbh',
  'https://streamable.com/s/qm82/fmewbh'
  // 'https://www.facebook.com/1752382674993643/videos/1753891924842718/', //Tsubasa vs Phara (GX)
  // A bunch of XV Clips (may contain spoilers)
  // 'https://www.youtube.com/embed/hLym7dcWw68',
  // 'https://www.youtube.com/embed/ys099qG3HVY',
  // 'https://www.youtube.com/embed/92wik18z78Y',
  // 'https://www.youtube.com/embed/O2yRtgaldgg',
  // 'https://www.youtube.com/embed/W8gaZvgO9ac',
  // 'https://www.youtube.com/embed/JBSbyOzun0Y',
  // 'https://www.youtube.com/embed/9EocrqxkvDk',
  // 'https://www.youtube.com/embed/zN91WQzqQYc',
  // 'https://www.youtube.com/embed/8kaW5xJ8WlI',
  ];

  randomVideo();

  function randomVideo() {
    // Make sure we do not display the same video twice in a row
    var random = Math.floor(Math.random() * links.length);
    document.getElementById("video").src = links[random];
  }
});
