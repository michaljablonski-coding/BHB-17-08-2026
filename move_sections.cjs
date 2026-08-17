const fs = require('fs');

let content = fs.readFileSync('src/components/CarportsLandingPage.tsx', 'utf8');

const reviewsStart = content.indexOf('{/* Reviews Section */}');
const reviewsEnd = content.indexOf('</section>', reviewsStart) + '</section>'.length;
const reviewsText = content.substring(reviewsStart, reviewsEnd);

content = content.substring(0, reviewsStart) + content.substring(reviewsEnd);

const wideImageStart = content.indexOf('{/* Wide Image Section Before Comparison */}');
const wideImageEnd = content.indexOf('</section>', wideImageStart) + '</section>'.length;
const wideImageText = content.substring(wideImageStart, wideImageEnd);

content = content.substring(0, wideImageStart) + content.substring(wideImageEnd);

const featuresStart = content.indexOf('{/* Features Section */}');

content = content.substring(0, featuresStart) + reviewsText + '\n\n      ' + wideImageText + '\n\n      ' + content.substring(featuresStart);

fs.writeFileSync('src/components/CarportsLandingPage.tsx', content, 'utf8');
console.log('Done');
