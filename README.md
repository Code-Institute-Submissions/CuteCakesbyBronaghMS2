![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Cute Cakes by Bronagh MS2

## Second Milestone Project for Code Institute by Lorna Clarke.

### User Experience
===============  
The brief for this project calls for "an interactive front-end site.  
The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals."  
Keeping this in mind I intend to design a intuitive and responsive website for independently run cake business Cute Cakes by Bronagh. 
  
*Owner Objectives*
* As the company owner, I would like to provide customers with general information on the company .ie who it's ran by, their story, products available etc.
* As the company owner, I would like an area to display pictures of past work and insperation for customers' orders.
* As the company owner, I would like an area to answer frequently asked questions.
* As the company owner, I would like a map displaying designated pick up points.
* As the company owner, I would like when pick up point is selected, the information will be retained in the below form.
* As the company owner, I would like a calendar displaying available consulation appointments and when the business in able/un-able to take on cake orders.
* As the company owner, I would like when a date is selected in the calendar, the information will be retained in be below form.
* As the company owner, I would like a contact form for customers to contact the company.
* As the company owner, I would like a form that allows customers to make bookings for consultations.
* As the company owner, I would like that when a customer gets in contact via the form they will recieve an automated e-mail letting them know their contact has been recieved, and someone will be in contact as soon as possible.
* As the company owner, I would like an interactive cake editor that allows the customer to send on a general idea of what kind of cake they require. The cake will change appearence depending on the customers' selection.
  
*User Stories*
* As a potential customer of the company, I would like to visit a website that is intuitive and easy to use. With easy to locate information and responsive design that assures me I have executed the task at hand correctly.
* As a potential customer, I would like to view the offerings of the comany with regards to cakes, fillings, icings etc.
* As a potential customer, I would like to view products the company have made previously so that I can assess the quality of the product.
* As a potential customer, I would like to see reviews from previous customers so that I can assess the quality of the product.
* As a potential customer, I would like to see the pick up points and select the point that is closest to me.
* As a potential customer, I would like to see if the company can take on orders/ a consultation at a time that suits me.
* As a potential customer, I would like to be able to contact the company with any queries I may have.
* As a potential customer, I would like to recieve e-mail confirmation that the company has recieved it and that they will be in contact soon.
* As a potential customer, I would like to see a clean and consistent website regardless of whether I choose to visit on desktop, tablet or mobile.
* As a return customer, I would like the website to retain my previous location and cake order so that I may have a quicker check out on my next visit.
  
| Feature                                                           | Importance | Feasibility |
|-------------------------------------------------------------------|------------|-------------|
| Gallery                                                           |1           |5            |
| Calendar                                                          |2           |4            |
| Map                                                               |2           |4            |
| About Section                                                     |1           |5            |
| Links to Social Media                                             |1           |5            |
| Frequently Asked Questions                                        |1           |5            |
| Reviews                                                           |5           |3            |
| Contact Form                                                      |2           |4            |
| Map sends selection to Form                                       |3           |2            |
| Calendar sends selection to Form                                  |3           |2            |
| Form sends automated E-mail                                       |3           |4            |
| Cake Customization Section                                        |4           |1            |
| Responsive design for browser, mobile and tablet                  |1           |5            |
| Site retains previous pick up and cake selections for return users|5           |3            |  
  
*Wireframes*
![wireframe](ccbbwireframems2.png)

### Coding Process & Bugs  
======================
* I created my workspace using Code Institute's provided Github template and created my files and folders.
* I used Bootstrap to create a responsive Nabvar with Dropdown functionality on smaller screens.
* I created the footer and added in FontAwesome social media icons and links to social media pages.
* I uploaded the background image, I used Canva to make the image. 
* I created a container that would create a white column down the screen so that content could be easily read.
* I next added the sections and their headings and used CSS to style what I had done so far.
* I added the section content for About and FAQ sections.
* I uploaded and styled the Menu image, which I created in Canva.
* I next added the Google Maps API with the assistance of the tutorial provided by Code Institute. Once finished, I found that the map wasn't
    loading and I was getting an error message in the widow.
    I checked my CSS and tried moving the provided JavaScript code from the index.html to the main.js file. The map was still not loading
    so I went back to check my settings on the API, I found that I had only authorised my Github. Once I rectified this the map worked
    correctly.
* The map was now too zoomed out, I changed this in my JavaScript function. It was also too wide for the site, I changed the size and 
  position in the CSS. The markers were also not working, I visited the Marker Cluster section in the Google Maps API documentation
  and found that I did not have the correct library referenced in the code.
  I had intended to have a function where if a marker was slected, this information would be sent to a field in the form, but due to 
  time restrictions I was unable to look into this.
* Next I started on the EmailJS functionality with the assistance of the tutorial provided by Code Institute. I used this and the documentation
  provided by EmailJS to set sending an email via the form and a respnse email.
* I moved onto the gallery which I created using Bootsrap. I noticed that when I scrolled down the page the images would move over the 
  navbar. I solved this by adjusting the z-index on the navbar.
* I then moved onto adding a calendar for my form. I found the guidance of a online tutorial to be extremely helpful in doing this.
  I edited the JavaScript to change the number of days depending on the month and I adusted the CSS to suit the look of the website. 
  I had wanted the selected date to be retained in the form to then be sent via the EmailJS function to the business owner but 
  I was unable to do this at this time.
* I moved on to setting up my cake Customization functionality using jQuery. I found this part to be challenging and have been unable to 
  to resolved some bugs in the code. Initially to select just the cake base worked but when I started to add more code to select two ids
  the images began to jumble. On occasion you will get the corrct image, on others you will get something seemingly randomly selected. I
  have yet to find the reason for this but I continue to look into it. 
* I checked back on my code and found that all Bootstrap on my page had stopped working. I went through my code and could find no issues. I 
  also took snippets and tried them alone in Repl.it to see if something on the page was overriding them but I found that they did not work
  in the workspace with just the essential code either. I began to run out of time so I decided to use JavaScript and CSS and to remove 
  Bootstrap from the project.
* I started on the navbar I began with a dropdown menu using the documentation provided by w3schools.
  I found that trying to change this menu into a normal navigation menu on larger screens with media queries was giving me issues. I decided
  to leave it for now and come back to it if I had time. Unfortunately, I did not.
* I then started on the new gallery, which had also stopped working. Again, I found the w3schools website to be helpful with this.
  Initially the gallery was far too large and stuck to the left hand side on the body container. I rectified this using CSS. 
  At the beginning I could not get the gallery to move calling the gallery's container class in the CSS
  after using the inspect function I tried adding a common class to all the images and acessed that with the CSS. 
* Just before submitting I found that the Cake Selector jQuery was not working even though it had been previously. I found that the
  sections selecting two ids ie "Vanilla and...." etc were returning a broken image when two radios were selected, even though
  it had worked previously. I have left the code in for the sake of assessment but am unable to investigate this at this time.

### Credits
============
* All images in the gallery belong to Bronagh Fitzgerald.
* Logo, Menu Image and Background Image are designed by Lorna Clarke using Canva.
* Hero Image photograph belongs to Daria Shevtsova via pexels.com https://www.pexels.com/collections/daria-shevtsova-photo-pack-6htjydz/
* FontAwesome: https://use.fontawesome.com/releases/v5.6.1/css/all.css
* Calendar: https://www.youtube.com/watch?v=wY2dao1hJms&t=2163s&ab_channel=TylerPotts
* Google Maps API: https://developers.google.com/maps/documentation/javascript/overview
* EmailJS: https://www.emailjs.com/docs/tutorial/adding-email-service/
* Dropdown Menu: https://www.w3schools.com/howto/howto_js_dropdown.asp
* Gallery: https://www.w3schools.com/howto/howto_js_slideshow.asp
* Monterrat Font: https://fonts.google.com/specimen/Montserrat?preview.text_type=custom
* Cardo Font: https://fonts.google.com/specimen/Cardo?preview.text_type=custom

### Further Reading
====================
* jQuery syntax: https://www.w3schools.com/jquery/jquery_syntax.asp
* jQuery get started: https://www.w3schools.com/jquery/jquery_get_started.asp
* focus: selector: https://www.w3schools.com/cssref/sel_focus.asp
* Media queries: w3schools.com/css/css_rwd_mediaqueries.asp
* JavaScript Calendar: https://www.cssscript.com/filterable-calendar-vanilla/
* Codecademy JavaScript Cheatsheet: https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
* JavaScript Operators: https://www.tutorialsteacher.com/javascript/javascript-operators
* jQuery select multipe classes: https://www.w3schools.com/jquery/sel_multiple_classes.asp
* Change image src jQuery: https://www.tutorialrepublic.com/faq/how-to-change-the-image-source-using-jquery.php
* jQuery attr() method: https://www.w3schools.com/jquery/html_attr.asp
* getElementById() method: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
* Comparison and logical operators: https://www.w3schools.com/js/js_comparisons.asp
* Beginners guide to functional JavaScript: https://opensource.com/article/17/6/functional-javascript
* JavaScript functions: https://www.w3schools.com/js/js_functions.asp

### Technologies Used
=======================
* HTML: for the main body and content of the website.
* CSS: in all aspects of styling and formatting the website.
* JavaScript: for the dropdown, gallery, calendar, EmailJs and Google Maps API functionalities.
* jQuery: for the cake customisation function.

### Deployment
================
To deploy this project the following steps must be followed.
* Log into Github and navivate to the page https://github.com/lornajane92
* Select the "Repositories" tab and locate the "CuteCakesbyBronaghMS2" project
* Select the "Code" menu to the left of the green "Gitpod" button
* From this menu copy the HTTPS link to the project to clone it
* Open your local IDE on your computer and change your working directory to where you would like to store the project
* Paste the HTTPS link and press enter
* Alternatively you can set up a gitpod account and download the extension to your chrome browser
* To open the project this way simply follow the above step and slect the green "Gitpod" button from the CuteCakesbyBronaghMS2 project in Github

### Testing
============
Manual:
* Clicked all links and ensured they directed to their desired location
* Ensured gallery is functional
* Ensured dropdown menu is functional
* Opened the project on Chrome, Safari and Edge to ensure there are no formatting errors/ missing items
* Ran the site on laptop, mobile and iPad to ensure there are no formetting errors across screen sizes

Validation:
* HTML passes through https://validator.w3.org/ validator with no errors
* CSS passes through https://jigsaw.w3.org/css-validator/ validator with no errors 
* JavaScript and jQuery pass through http://beautifytools.com/javascript-validator.php validator with the following errors with syntax and declaration errors, 
    which due to time restrictions I cannot fix at this time.
