A requirement could be big enough to be developed at once time. There are many thinking schools about the way to convert a promise into an published work. The teams do not have a theoretical framework to rely on. Although there are roles such as Scrum Master or Agile Champion, many teams lack these roles, or are very weak as a figure.

Rarely, programmers works as a real team and they use to add unnecessary complexity to a problem. Programmers think any project as a software challenge one (instead of a business challenge), so they always makes evolve the project in a technical way. instead of a business challenge. Splitting tasks in the horizontal way is very comfortable for developers, but unfortunately is not convenient for the project.
If this happens, it is a clear sign that the project is being directed by the needs of the programmer instead of being directed by the risk.

Is very intuitive manage a project by splitting tasks in the horizontal way. In this approach seem all have sense and it helps to divide a big task into many programmers, but really it only generate bottlenecks. Many blogs recommend to work in a vertical way. This thinking school is very extended in many computer branches and it is strongly related with agile methodologies because is business oriented.

The sense behind the vertical splitting is show to the Product Owner a complete and functional software at the end of each iteration. Lets see some examples:

![Donal Trump Pixelado](/img/donald-trump-pixel.png)

Can you say who is the man in the picture before? Of course! He is Donald Trump. It was easy because picture have information enaugh to answer, even if the image is not a fully version of the [original one](/img/donald-trump.jpg). This is exactly what we want to do with our project. If you can say the correct answer, so, you are thinking in vertical mode.

![progressive image example](/img/progressive-image.jpg)

Progressive JPG technology show us the entire picture, but with a progressive resolution. Users can decide if prefer continue reading or turn back without waiting the full-version image. This is just expect the product owner.

![Agile sprint goals](/img/agile-vs-waterfall.png)

Agile manifest tell us to work in iterations in order to show the product owner a complete software version to be tested but a reduced version respect the final one. In this case, skateboard is a 100% functional way to go from A to B. After that, product owner tell us what is project needs and at the end, a car is developed. This is just we need.

We are ready to continue with a practical example. In our study case, we are developing an e-commerce. Lets enum steps to develop the ideal e-commerce platform.

### 1. Structure

![Agile sprint goals](/img/donald-trump-010-32px.png)

The goal of this task is develop the entire platform structure. So all pages will be ready at the end of this work. A secondary goal is understand better the main  sense of the project to detect possible problems you will have in the future. Did you know you have to develop a refunds page? Once you had finished, you will be able to merge your code.

### 2. Hardcoding

![Agile sprint goals](/img/donald-trump-020-22px.png)

The goal of this task is to develop the minimal and basic structure of the content inside the structure. For Example, the home page will have a banner section, a promotions section, newsletter section, a footer section, etc. You do not have to finish them and you do not have to develop the user requirements. You must to hardcode the minimal code to understand that the section is for. Once you had finished, you will be able to merge your code. You can even merge your code even after complete each page.

### 3. Mocked Front-End

![Agile sprint goals](/img/donald-trump-050-12px.png)

The goal of this step is to start to transform an static front-end site into a dynamical one. We will replace the front end mocks to a better code to make our page dynamical. Do not considerer all scenarios. Yo must only develop the [happy path](https://en.wikipedia.org/wiki/Happy_path). For example, in a payment form, accept only one payment method. Avoid develop any UX animations. Do not focus in the a11y, do not make complex validation forms. Focus in the main goal, like "complete a basic purchase paying by cash". Once you had finished, you will be able to merge your code.

### 4. Database

![Agile sprint goals](/img/donald-trump-070-8px.png)

The goal of this step is to start to transform an static back-end platform into a dynamical one. You can connect the database in this step. It is OK if you replace the 80% percent of the happy path. You can develop only the getter functions on this steps and continue developing with a [fixtures](https://en.wikipedia.org/wiki/Test_fixture). Do not worry to develop fully functionalities, you will have much time later. Absolutely do not focus in the performance now. Focus in returning a solid and scalable response. Once you had finished, you will be able to merge your code.

### 5. Complete your code

![Agile sprint goals](/img/donald-trump-090-4px.png)

Maybe this is the longest step. The goal is to complete basic functionality that we didn't it before. Do not forget to ask your Product Owner for the priority. Add a complete CRUD operations, other payment methods, validations forms, a newsletter subscription form and other new features inside the roadmap to get a 100% usable software. Do not do Optimization yet. Avoid refactoring in this step. Once you had finished, you will be able to merge your code.

### 6. Do an Minimal Product

![Agile sprint goals](/img/donald-trump-100-0px.jpg)

The goal of this step is to develop your Minimal Viable Product. Add all complete functionalities classified as [Minimal Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product). Consider develop an Minimal Awesome product instead an MVP. Your Product Owner can decide it. Test, test, test. If your product owner decide that having usability animation is part of the MAP is time to develop them. This is valid for any other quality attribute. You will be able to merge your code aftear each minimal change that add value to the project. After that, you are able to go online.

### 7. Go Online / Listen to your users

![Agile sprint goals](/img/donald-trump-070-8px.png)

The goal of this step is to publish your product and share it with the entire world. Start to collect feedback from your users as soon as possible. Feedback can be text Comments from users, behavior patterns or most visited pages. After that you are able to cheers with your colleague.

### 8. Enhancement

![Agile sprint goals](/img/donald-trump-100-0px.png)

The goal of this step is to get better than before. This step never ends. Use the data collected before to analyze what your users wants to focus in your business. For example, if your users are requesting new functionalities, it is not time to optimize the functionalities already developed. On the other hand, if your users are having difficulties to achieve their objectives, it is time to think about usability, stability, performance, and many other quality attributes.
We know that developers can add incredible performance enhancements, but do not do them if users do not need it.

### Extra

In each step you should to fix your bugs, add automatic test, add documentation, make tools, develop an styleguide, and add quality attributes but this should be only the 10% of the effort instead get focused in this goal. Quality attributes like accessibility or a maintenance code are important, but they not priority. Beta user tester do not will use that, and you should defer this tasks. Getting an early good feedback is more important than you think.

## So, you are not agile enough if...

### 1. Too many time spent on meetings

How many time are you investing in meetings? According with an agile guidelines, if you are spend more than 10% of your available time, maybe you are working in a cascade way and having an horizontal approach. A meeting should be a space to unblock a task or decide something important. Do not use meetings to try to get all things defined before start. If you need a meeting, it mean that your are not splitting the task correctly.

### 2. The objective of the sprint is related to technical stages

Let's retrieve our e-commerce case study. We are planning the route-map and we have to define any iteration goal. We use to do it in two different ways.


| Technical goals | Business goals |
|:----------------|:------------|
| Complete menu | Develop a draft |
| Complete footer | Add design |
| Complete the Home page | Add main business user stories |
| Complete the PDP page | Add support for major languages |
| Complete the PLP  page| Improve quality attributes KPI |
| Complete the checkout | Complete the MVP/MAP |
| Go online | Get user's Feedback |

_Notice that there are not real examples and they are written for study proposal_

Do you remember iteration proposal by agile manifest? The left column represents the old waterfall model and a horizontal thinking. The right column represents a vertical one, according with the agile. If your team has goals like left column maybe you have to think about getting a modern way to work today.

### 3. Team members are not autonomous

Your team should be self-sufficient in each task. It means, that nobody should depends of any other team member. Its occurs when tasks are exclusively from a team and others members cant do a task outside their main responsibilities.

For example a developer should be able to take design decision, write content or approve a testing. In other wise, any small inconvenient will be a block. This is more difficult when teams are located in different cities.

### 4. You do not use timeboxing for your activities

Do you control your time? How many time do you spend at in refactory? Eighty percent of worries never occur. Many times developers focus their attention in quality attributes (usually maintenability) that customers didn't request. Track the time spend in each software attributes and be worried for improvements and quality only if there is time to do it. Do not program for the future. Do no resolve problems that not exists. Remember that solution is easier than you think.

Refactoring and other software quality attributes (testability, performance) are important but focus on it only when you have time and spend the time planned. If you decide you have (for example) two hours doing test, spend two hours. Focus in your customer and avoid to transform a business project into a software project.
