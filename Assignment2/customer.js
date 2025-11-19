let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let negative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(words, negative ? "Needs Improvement" : "Positive Feedback");
