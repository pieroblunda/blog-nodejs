Por que estimamos?
Cuales son los beneficios de estimar? (Pros)
Cuales son los desventajas de estimar? (Cons)
Cuales son los problemas para estimar? (Impedimentos)
Cuales son las tecnicas para estimar?
Que relacion tiene la estimacion de una tarea con la productividad?
Relacion entre estimacion y SaaS
Relacion entre la estimacion y el modelo en cascada y modelo agile
Cuando estimar?

Estimar tiene sentido cuando el producto que se vende son horas trabajadas. Algunos ejemplos son el modelo de negocio llave en mano,

- software factory (el mismo caso?)

- Sirve para entender mejor la complejidad de una tarea
- Sirve para planificar una tarea que demorara mas de un sprint o que puede involucrar muchas personas. Analizar cuanto tiempo podria tomar ayudaria a bajar el riesgo de la tarea.

Estimar de menos tambien es errar con la estimacion.

5256 a.C - Inicio de la Carpinteria
1985 - United States Department of Defense captured this approach in DOD-STD-2167A, their standards for working with software development https://en.wikipedia.org/wiki/Waterfall_model
1990' - la web empieza a ser masivo
1991 - lanzamiento Primera web
2000 - Introduccion de Saas (Tim O'Reilly)
2005 - First version of git
2007 - GitHub founded and Netflix launch video on demand
2008 - Lanzamiento de Chrome
2011 - Adobe lanza servicios SaaS
2011, the Agile Alliance created the Guide to Agile Practices
2015 - Software as a service is masive

https://www.blissfully.com/saas-trends/q3-2017-saas-explosion-creates-saas-chaos/
https://www.denis-oakley.com/saas-pricing-tactics-business/
https://notion.vc/resources/the-saas-takeover-of-the-software-industry/ <----- MUY BUENO
https://en.wikipedia.org/wiki/Agile_Unified_Process

El problema

Agile manifest speaks about planning the sprint and even says that task added to the sprint should be completed inside the iteration. Redundantly if you can not complete an issue inside the iteration you must to do it in the next one. It is a bit confuse. Isn't it?

In order to aboard this problem, many Product Managers add to sprint tasks shorter than 2 weeks (or any other sprint duration) and split bigger ones in sub-tasks. Intuitively, to decide how many task include in a sprint we should know how complex is. Teams spend ours weekly to analyze each task and classify them in groups using different estimation methods.

In another experience I had, the analyst was upset with me because I was not trying hard enough to make correct estimations. So, I decided to use the 5-why technique to find out why estimation was so important to her. I did to the third why question and she couldn't answer. She just didn't know why she did estimations.

Another curious experience I had is with the team I used to lead. I told them that they can organize their work as them prefer and they started to estimate tasks. I mean, estimations were optional and they decided to include an estimation meeting into the development flow.

I remember a boss who mades me estimate to note the deadline in his calendar. He liked follow all activities in the calendar and he considered as a delay also one day. It was his way to organize activities.

Maybe, the answer witch most sense I had was from a software area manager in a development team for an internal customer. She implemented a methodology analyze-estimation-development in order to make a budget by product and also to let decide customer if want to go ahead with the task development.

In other industries or life situation, you estimate to make a decision. Before travel, you calculate the travel duration to decide witch route you prefer. Sometimes you choose a faster highway with tollbooth and in other cases a slower route without additional cost. You estimate to organize your roadmap to be better prepared to that situation. Certainly, you estimate when you do not know the place, when you travel occasionally or when your time is limited. But, I am sure you not estimate the time to arrival when you go to the supermarket, in a walking in a free day or when you have to do a route several times like going to your girlfriend's house.

What does it means in the software industry? In some cases I find very useful estimate. It helps to measure and control the risk in a software project. Unfortunately, estimate is, in my opinion, another of the availability heuristic, also known as availability bias. It means that estimate is a good practice, but we should use time carefully. The lack of synergy and communication are leading companies to spend more time in meetings. Like as the "real world", estimation can help us to decide which is the better plan the future, but is a bad way to build it. 

### When to estimate

- When the selling product is hours instead a software (piecework, software house, consultancy)
- When there is an external deadline (a new law like GDPR)
- When estimation is used as a communication tool (like using effort as confirmation check)
- When there is a suspect that a task can involve many different teams, iterations, and other resources (like a big rework)
- When there is a decision made previously that has a direct effect on the task that is being analyzed (for example, adding a functionality that a third-party technology already purchased will take care of in the near future)
- When unexpected big events appear and there is the possibility of pivoting the project
- When the product lifecycle is a star

### When not to estimate

- When the company business model is software as a service (SaaS) 
- When the solution to be implemented is well known or a routine (like adding a new typical CRUD)
- When the time is infinite (Usually open-source software, personal projects)
- When the estimation result does not matter (like a political decision in a company of launching a new product)
- When the product lifecycle is a cow

Conclusion

The main goal of estimations is manage risk in order to get better prepared before work. Examples before are a guideline, not a rule. Estimation is not a poker planning or Fibonacci points (they are methos). Instead, estimation is an effort analysis to measure risk. Probably you will find exceptions to this guideline, but it should be aligned whith the 90% of situations.

Consider that estimation are optionals and you can work perfectly without them. Estimation, are... estimations! It is not a contract or a precise predict. In order to guarantee the fulfillment of the objectives, estimations must always have an alternative "Plan B". It is only enough to use Timeboxing techniques.



I found that all of them, do not work in a real agile methodology. They work instead in a waterfall model and they need an effort estimation before proceed. Simply they are waterfall thinking. They need to define all of possible before start and they have difficult to adapt they work on the fly.

Especially when there are unexpected problems they argue that the work done is aligned with the paper, user story, or any other document. When they detect it, they try to invest more effort in analysis, writing user stories and test cases, and even more resources in more detailed and precise estimation.

In consequence, the waterfall model get deeper, the entire team is further away from the solution, and customer must wait more time to see results. Fans sustain that time spent early in the software production cycle can reduce costs at later stages. A typical waterfall model argument. In my experience I never saw a waterfall team solving their problems using this approach. Conversely, I found the solution using the process unified (UP) and fortunately, many people with my same opinion and experiences. Most people code as computational resources is finite and time is infinite, while the correct approach is just the opposite, so, programming as time is finite and resource are infinite. 

The problem with this approach is that project changes course focusing in the user in favor to programmer by changing the "User level goal" into a "programmer level goal" (sub-task level or low level).  Alistair Cockburn explain it in his book Writing Effective Use Cases. Code pushed in a subtask level rarely have a value for the customer, but have sense for the programmer. Adding a code line without a real value for the customer is worst than nothing. If this occurs, so the project is programmer oriented. Have you notice any relation with the fourth agile principle?











In addition, some Product Managers use the "trend velocity" as a KPI of team performance.


Many people agree the fact that measuring time as performance indicator is not appropriate because is easy to manipulate it. In fact, by definition, time elapsed and effort can not be a KPI because it should follow the SMART criteria (Specific, Measurable, Achievable, Relevant, Time phased).

Also, people in the community develop many ways to measuring the effort like Poker planning, T-shirt Size, Fibonacci. It means that no exist a perfect way to do that, and people have not prefer one of them, or at least this makes me think. We can check it on a particular question in the official blog.

So... how should I to define the next sprint? Before speaking about sprint, it is mandatory to speak about product backlog. It is an ordered list of everything that is known to be needed in the product.

A good way to aboard this is the urgent-important matrix (also know as Eisenhower Matrix). It was popularized in the book, The 7 Habits of Highly Effective People by Stephen R. Covey. The urgent-important Matrix, consists of four quadrants that help you to decide on and prioritize tasks by urgency and importance. You should to classify task in on order to follow the product vision, it means, in a long term.

A simpler time management strategy is the Pareto principle (also know as 80-20 rule). This is the idea that 80% of tasks can be completed in 20% of the disposable time, and the remaining 20% of tasks will take up 80% of the time. This principle is used to sort tasks into two parts. It can be applied to increase productivity: it is assumed that 80% of the productivity can be achieved by doing 20% of the tasks.

Once we have a strong backlog, it is time to define the sprint goal. For a programmers, having "Complete tasks" as sprint goal is like having "Playing match" as goal for a football player. A good goals can help a team to create a Done Increment by the end of a sprint. Continue reading about [sprint goals](what-about-sprint-goals).

And finally, the amount of tasks within the sprint should be a motivational instrument for the team and not a goal to accomplish.
The success or failure of each iteration will depend on the fulfillment or not of the sprint goals, regardless of having performed all the planned tasks. In this way, it is not necessary to estimate time needed to successfully complete a sprint. On the other hand, making an estimate on a task can be useful for feasibility analysis in the early stages of the project. Undoubtedly, time is a fundamental factor when deciding whether to develop a task, or even to prioritize it, but it makes no sense to do this for all project tasks. In this scenario, the objective of estimating is to make a decision instead of planning the sprint.
