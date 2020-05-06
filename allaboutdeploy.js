/*


Git hub is very popular software development platform which gives us all of the tools necessary
to manage the software development projects whether we're working by ourselves or whether we're working 
others

heroku gives us all of the tools and infrastruture needed to actually deploy our node js application to the 
production ready server to get started.


heroku cli its a tool which provides us the functions to deploy our node js on web server   

-heroku login 

Version Control : It allows us to manage the versions of our applications over time
    -if we change or code or update it we can track the changes using version control
    - we can create what are essentially save points along the way for the various versions of our applications 
    -git is version control system(make sure to check git bash or install again )

GIT:
- git init from root of the folder eg web-server
-git repository is nothing but the things related to git are stored
-git status is used for checking untracked files....
- we can use git add to add the things in staging area and git commit to get things committed

 git add we have to list up the things we need to add in our staging area .
 we can list out individual file or entire directory 

        -git add src/ (entire src directory would be added in staged area to get committed)
        -git add . gonna add everthing in the staging area.

once all the files we wants to get committed are in the staging area we can commit them using command 

        -git commit and we have to provide the message with each commit describing what exactly changed.
        -Right here we do that by using -m flag with the message enclosed in the " "
                git commit -m "Initial Commit"

how to transfer your local machine data to over heroku and git hub which are third party services servers in a secure 
way and anwer is to use SSH it stands for secure shell and it gives us the means of securely communicating with another
machine 

    create sshkey pairs:-          type         bits          comment
                        ssh-keygen -t     rsa  -b     4096 -C "emailid"
  
                          ls -a -l ~/.ssh
                        
                        eval $(ssh-agent -s)
                        
                     so all this command is going to start up ssh agent if running before going to tell us by printing the process
                     id we get agent id. 

                     after running that command is to register the file 

                            ssh-add ~/.shh/id_rsa   

                cat ~/.ssh/id_rsa.pub
                git push -u origin master
                ssh -T git@github.com

heroko:-
            kwy:add going to look through the  to ssa directory and ask us which keys wana upload 

we can create our heroku applications using heroku create (this is to be run from root of our project) 
            -heroku create appname
            make changes in package-json
            start:node /src.app.js

            commit by git add. 
            git commit -m "setup for heroku"


Steps for adding your project on web    

        1.git status
        2.git add filename or .
        3.git commit -m "comment"
        4.git push
        5.git remote
        6.git push heroku master.
        
*/  