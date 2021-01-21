[Technical debt](https://en.wikipedia.org/wiki/Technical_debt) is major reason of discussion between Scrum Masters and Developers. Try to ask in your team the next question: "Are technical debt negative for your project?" Most people will answer that zero technical debt is better. So, are they right?

Scrum Masters focus their effort satisfying the Product Owner by giving the expected product in a reasonable time, but usually they do not consider in the planning the effort necessary to rework code and they feels they are loosing the control when develop needs to do something outside the planning, like re-work code.

Programmers feels they are in the software project (instead in a business project) and want to resolve all technical debt as soon they detect it justifying "is the best option for the project because we are sure we need to rework this code in the future". Programmers let know to the Scrum master and start to explain the problem using technical arguments, and usually convince the him because the conversation is technical oriented and scrum master has limited action in this sense.

This is exactly that agile framework try to tell us in the [fourth agile principle](https://www.smartsheet.com/comprehensive-guide-values-principles-agile-manifesto): Business team and developers team are not aligned. So... How we should to approach the technical debt?

### The cost of a technical debit

The first important thing to know is that resolving a technical debt is not free. You must invest time to improve the software quality and other resources are involved like testers and developers. Both are limited. Do not forget the risk involved by the possibility to add new bugs or worse yet, broke something. Claig Larman explain in his excelent book [UML & Patters](https://www.amazon.it/Applying-UML-Patterns-Introduction-Object-Oriented/dp/0582832489/ref=sr_1_1?dchild=1&qid=1594364693&refinements=p_27%3ACraig+Larman%2Cp_n_feature_browse-bin%3A509817031&rnid=509815031&s=books&sr=1-1) that the simplest way to classify issues is "functional issues" and "quality issues". In this sense, an issue classified as "technical debt" is not different that others like "new feature", "bug", or "design". In fact, a technical debt is a [software quality](https://en.wikipedia.org/wiki/List_of_system_quality_attributes) bug related.

In an ideal situation, your backlog list does not have any technical debt to resolve, all of them are new features to add to the project without a due date and John Lennon is still live. The worst possible situation is having a lot of technical debt to solve and many functionalities to add in a short time.

When the level of technical debt increases, the cost of developing a new feature will grow as well. The more technical debt you have, the less you will pay for quality improvements. The less technical debt you have, the more expensive increasing the quality further will be and will be cheaper the cost of add a new feature. [Krzysztof Liszewski](https://www.linkedin.com/in/krzysztof-liszewski/) (Agile Coach) explain it very well in [his blog](https://4agile.pl/how-to-manage-technical-debt/).

Notice we are talking about time management, instead of programming. In my opinion, a senior programmer is who know manage this situation and find a great value for money.

### Managing the situation

The first step is analyze the context in order to understand the project situation by tracking issues. You should know which your situation is. I like follow [extreme programming](https://www.agilealliance.org/glossary/xp) techniques instead open a new ticket in a software like Jira for agility reasons. A good practice is frequently read your own code. You will discover lot of possible issues.

The second step is to manage them, including priority. The sense of the code review is **identify** a potential technical debt and suddenly decide if is more convenient for the project to resolve it now or generate a new issue. The goal of the code review is not eradicate all of issues. Instead the main responsibility of the reviewer is identify an issue, and decide if is convenient merge the code or a revision is necessary. To decide it, you do not follow the programmer thinking. Instead, you must have a general vision shared with the business team and answer the question "What will be my technical debt level after merging?" Create an issue if your project have few technical debt or the cost to solve it is too high (it means so much time, or even if a critical and stable code is involved). Solve it immediately if the quality will be outside the desidered params or the cost to fix it is very low.

The third step is planning when you will fix them. You must be always aligned with the scrum master to decide together witch issue are higher priority. Consider [timeboxing](https://www.agilealliance.org/glossary/timebox) in order to lower risk. Avoid and entire sprint dedicated to fix this issues. You should to fix them in the free time between task. Maybe, biggest issues like a complete architectural change needs more time, but this is an exception, not a rule. I like finish an iteration with all planned task completed and "a something more". That extra value issualy are classified as "performance improvements", "stability" or "ux improvements".

I publish [a software](https://www.npmjs.com/package/technical-debt-cli) to help you to manage technical debts inside your code by adding a comment and show them in a list in your terminal.

Is not mandatory to correct all issue discovered, but you must add a @Todo to track it to be fixed in a future. Set in mind that the most important thing to do is not blocking your coworker and delivery as soon as possible in order to continue with the natural software cycle.

Do you know time spend in refactoring? The sense of this is to measure time spent to an activity that do not add value to the customer. If you resolve an refactoring issue and a new functionality issue together, you never will measure that and you lose control of the project. As a programmer, you have a KPI too.

By blocking a pull-request and looking for a perfect code you are bypassing many best practices like agile, programming for the future, timeboxing, continuous integration, a single responsibility, probably, you are not full aligned with your scrum master. Ey! Avoid pushing bad code. Quality is very important, but remember that this is a business and you are helping them in a software way. You should to find the correct balance for your project.

### Timing and non-stop strategy

It seems that following this method we never will correct issues generated and the list can grow without limit. In fact, this is the biggest fear that programmers have. When is the best moment to fix an issue? You should simply follow the iteration goal. Listen you scrum master and resolve only the task of the iteration in order to be aligned with needs of the project. You can also, fix technical issues while business team is waiting other stakeholders or definition.
