# Resume Folder

Place your resume PDF file in this directory.

## Instructions:

1. Save your resume as a PDF file
2. Name it: `Chester_Cairel_Resume.pdf` (or update the filename in index.html and about.html)
3. Place it in this `assets/resume/` folder

The resume download button in the navigation will automatically work once you add your PDF here.

## Current filename expected:
- `Chester_Cairel_Resume.pdf`

## To change the filename:
Update the href attribute in both:
- `index.html` (line ~36)
- `about.html` (line ~35)

Change from:
```html
<a href="assets/resume/Chester_Cairel_Resume.pdf" download class="resume-btn">
```

To your preferred filename:
```html
<a href="assets/resume/YOUR_FILENAME.pdf" download class="resume-btn">
```
