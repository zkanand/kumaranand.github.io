document.addEventListener("DOMContentLoaded", function () {
    this.addEventListener("click", e => {
        let tar = e.target;
        if (tar.hasAttribute("data-dl")) {
            let dlClass = "dl-working";
            if (!tar.classList.contains(dlClass)) {
                let lastSpan = tar.querySelector("span:last-child"),
                    lastSpanText = lastSpan.textContent,
                    timeout = getMSFromProperty("--dur", ":root");

                tar.classList.add(dlClass);
                lastSpan.textContent = "Downloading…";
                tar.disabled = true;

                setTimeout(() => {
                    // Replace the following line with your actual download logic
                    initiateDownload("KumarAnand's Resume.pdf").then(() => {
                        lastSpan.textContent = "Completed!";
                        tar.classList.remove(dlClass);
                        tar.disabled = false;
                    });
                }, timeout * 0.9);
            }
        }
    });
});

function getMSFromProperty(property, selector) {
    let cs = window.getComputedStyle(document.querySelector(selector)),
        transDur = cs.getPropertyValue(property),
        msLabelPos = transDur.indexOf("ms"),
        sLabelPos = transDur.indexOf("s");

    if (msLabelPos > -1)
        return transDur.substr(0, msLabelPos);
    else if (sLabelPos > -1)
        return transDur.substr(0, sLabelPos) * 1e3;
}

function initiateDownload(filePath) {
    return new Promise(resolve => {
        // Create a temporary anchor element for the download
        const a = document.createElement("a");
        a.href = filePath;
        a.download = "KumarAnand's Resume.pdf";

        // Append the anchor element to the document and trigger a click
        document.body.appendChild(a);
        a.click();

        // Remove the anchor element
        document.body.removeChild(a);

        // Resolve the promise after a short delay (simulating download time)
        setTimeout(resolve, 1000);
    });
}
