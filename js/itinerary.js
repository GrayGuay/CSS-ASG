function nextStep() {
  const days = document.getElementById("days").value;

  if (days < 1 || days > 60) {
    alert("Please enter a number between 1 and 60");
    return;
  }

  alert("Step 1 saved! Days: " + days);
  // Later: move to step 2, change UI, load new content
}

self.__next_f.push([
  1,
  "1:\"$Sreact.fragment\"\n" +
  "2:I[22016,[" +
    "\"/_next/static/chunks/0c765afb31316c4e.js\"," +
    "\"/_next/static/chunks/ee81c...js\"," + // (truncated in image)
    "\"/_next/static/chunks/ff1a16fafef87110.js\"," +
    "\"/_next/static/chunks/7340a...js\"" +    // (truncated in image)
  "],\"default\"]\n" +
  ":HL[\"/_next/static/chunks/87045103f222b138.css\",\"style\"]"
]);

