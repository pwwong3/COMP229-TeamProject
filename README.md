# COMP229-TeamProject
Final Team Project

1. Before doing any modification:
   - Fetch and pull the main branch
   ```
   git checkout main
   git pull
   ```
   - Create and switch to feature branch
   ```
   git checkout -b <branch>
   ```
2. Update node_modules
```
npm i
cd client
npm i
```
3. Run mock server (inside folder "client")
```
npm run json
```
3. Commit and push the feature branch after development (make sure your are in the root folder of the project)
```
git add .
git commit -m "<issue-key> <message>"
git push --set-upstream origin <branch>
```
4. Create a pull request in GitHub. I will merge it to main branch after review the code
5. I will notify you after merging to the main branch, then delete the feature branch and switch back to main branch
```
git checkout main
git branch -d <branch>
```
