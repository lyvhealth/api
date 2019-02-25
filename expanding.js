// inspired by https://gist.github.com/stephenorem/5162a871c5d96bfa522e31ede6205e51
function getMaxDepth(elem) {
  var maxDepth = 0,
	  d,
	  parents;
  document.querySelectorAll(elem).forEach((e) => {
	parents = getParents(e);
	d = parents ? parents.length + 1 : 1;
	maxDepth = d > maxDepth ? d : maxDepth;
  });

  return maxDepth;
}
	
// https://gomakethings.com/how-to-get-all-parent-elements-with-vanilla-javascript/
var getParents = function (elem) {
	// Set up a parent array
	var parents = [];
	
	// Push each parent element to the array
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		parents.push(elem);
	}
	
	// Return our parent array
	return parents;
};
	
document.querySelectorAll('div').forEach((div) => div.click());
max = getMaxDepth('td');
setTimeout(function() {
	for (i = 0; i <= max; i++) {
		document.querySelectorAll('tr:not(.expanded) > td').forEach((td) => td.click());
	}
}, 1000); 
// the timeout above is needed to let the divs be expanded first (didn't care to figure out right now why)