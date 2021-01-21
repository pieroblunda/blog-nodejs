[Robustness](https://en.wikipedia.org/wiki/Robustness_(computer_science)) is a desiderable (if it is not mandatory) [quality attribute](Lista de los atributos de calidad) in any software project. Basically, it means that software always must manage errors during execution in order to help users in theirs goals in case software send an unexpected response.

The 40m-rule is a very simply mechanism to add in our existent [procedure protocol](procedimiento de subida a produccion) that help us to always comply with the Robustness. If you are using the [GitHub flow](choose a correct branching model) one of thoose svantages, is that the production code can become unstable most easily. The 40m-rule is a very well done complementary task to solve this GitHub Flow problem.

After an online update, naturally the online software is tested in order to check changes are correctly implemented. In case tester detects an error online, he must to decide (maybe together a programmer) if is it possible to fix it in 40 minutes or less. So, the solution will be upload by a `hotfix branch` in a low time lapse. In the other side, bug can be more complex to develop a solution or maybe too difficult to detect the cause of the problem to fix it. In this case, in production environment must turn back to the last stable state.

The worse situation can happen, is abort the production update and spend a bit time to fix it and re-upload changes. But users will not lose confidence because of the instability of the system and programmers do not entry in panic while try to fix a problem.

I find this critical in a `production environment` but feel free to apply this method in other stable branch like `release/*` or `develop`.
