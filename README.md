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

gallery scrolling over navbar, played with z-index on gallery first. Wouldnt work, 
changed z-index on navbar, worked.
loading maps api with code Institute tutorial. Map didnt render, added given css, 
box loads with a something went wrong notification.
tried moving the JS from the HTML to the main.js, same problem.
checked js console in inspect, realised i had not authorised my workspace on my api 
restrictions. map was far too zoomed out, changed the zoom value in my js function. 
map too wide, changed width and position with css.
markers didn't load, typo in js function? went through code Institute tutoral again,
markers working.
Seriously hard time getting emailjs to work, tried various methods and tutorals. Eventually,
copied and pasted the code from the playground area of the emailjs site and it worked. I edited
the code to suit the website