// Add URLs to pageMap to create shortcuts.

const pageMap = {
	70: '',
	75: '',
	80: '',
	83: '',
}

const openInNewTab = url => {
	var a = document.createElement("a");
	a.target = "_blank";
	a.href = url;
	a.click();
}

const docKeyDown = e => {
	console.log(e);
	if (e.ctrlKey) {
		console.log('Ctrl key truthy');
	}
	if (e.shiftKey) {
		console.log('Shift key truthy');
	}
	if (e.ctrlKey && e.shiftKey && (e.keyCode in pageMap)) {
		openInNewTab(pageMap[e.keyCode]);
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode === 65) {
		for (let keyCode in pageMap) {
			openInNewTab(pageMap[keyCode]);
		}
	}
}

window.setTimeout(() => {
	document.addEventListener('keydown', docKeyDown, false);
}, 1)

console.log("WORKING");